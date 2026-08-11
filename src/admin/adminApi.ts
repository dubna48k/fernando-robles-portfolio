import type { Project } from "../data/projects";

const TOKEN_KEY = "admin_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function authFetch(url: string, options: RequestInit = {}) {
  const token = getToken();
  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.body && !(options.body instanceof FormData) ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
  if (res.status === 401) {
    clearToken();
    throw new Error("Sesión expirada, vuelve a iniciar sesión");
  }
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Error ${res.status}`);
  }
  return res;
}

export async function login(username: string, password: string) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "No se pudo iniciar sesión");
  }
  const data = await res.json();
  setToken(data.token);
  return data.token as string;
}

export async function listProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects");
  return res.json();
}

export async function createProject(project: Partial<Project>): Promise<Project> {
  const res = await authFetch("/api/projects", { method: "POST", body: JSON.stringify(project) });
  return res.json();
}

export async function updateProject(id: string, project: Partial<Project>): Promise<Project> {
  const res = await authFetch(`/api/projects/${id}`, { method: "PUT", body: JSON.stringify(project) });
  return res.json();
}

export async function deleteProject(id: string): Promise<void> {
  await authFetch(`/api/projects/${id}`, { method: "DELETE" });
}

export async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const res = await authFetch("/api/upload", { method: "POST", body: form });
  const data = await res.json();
  return data.url as string;
}
