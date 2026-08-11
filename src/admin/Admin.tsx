import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Project, ProjectCategory } from "../data/projects";
import { categories } from "../data/projects";
import {
  clearToken,
  createProject,
  deleteProject,
  getToken,
  listProjects,
  login,
  updateProject,
  uploadImage,
} from "./adminApi";

const emptyForm = {
  name: "",
  category: "Web" as ProjectCategory,
  client: "",
  year: "[COMPLETAR]",
  description: "",
  problem: "",
  what: "",
  result: "",
  image: "",
  link: "",
  liveUrl: "",
};

export default function Admin() {
  const [authed, setAuthed] = useState(!!getToken());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saving, setSaving] = useState(false);

  function reload() {
    listProjects().then(setProjects);
  }

  useEffect(() => {
    if (authed) reload();
  }, [authed]);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError("");
    try {
      await login(username, password);
      setAuthed(true);
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Error");
    }
  }

  function handleLogout() {
    clearToken();
    setAuthed(false);
  }

  function startEdit(p: Project) {
    setEditingId(p.id);
    setForm({
      name: p.name,
      category: p.category,
      client: p.client,
      year: p.year,
      description: p.description,
      problem: p.problem,
      what: p.what,
      result: p.result || "",
      image: p.image || "",
      link: p.link || "",
      liveUrl: p.liveUrl || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startNew() {
    setEditingId(null);
    setForm(emptyForm);
  }

  async function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      setForm((f) => ({ ...f, image: url }));
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Error subiendo imagen");
    } finally {
      setUploading(false);
    }
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setSaveError("");
    setSaving(true);
    const payload = {
      ...form,
      result: form.result || null,
      image: form.image || null,
      link: form.link || undefined,
      liveUrl: form.liveUrl || undefined,
    };
    try {
      if (editingId) {
        await updateProject(editingId, payload);
      } else {
        await createProject(payload);
      }
      startNew();
      reload();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Error guardando");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("¿Borrar este proyecto? No se puede deshacer.")) return;
    await deleteProject(id);
    if (editingId === id) startNew();
    reload();
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink px-6 text-paper">
        <form onSubmit={handleLogin} className="glass w-full max-w-sm p-8">
          <h1 className="font-condensed text-2xl uppercase tracking-tight">
            Admin <span className="text-accent">Login</span>
          </h1>
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-line bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
              autoFocus
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-line bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
          {loginError && <p className="mt-3 text-xs text-accent">{loginError}</p>}
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-accent py-3 text-xs font-semibold uppercase tracking-wide text-paper transition hover:bg-paper hover:text-ink"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink px-6 py-10 text-paper sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between border-b border-line pb-6">
          <h1 className="font-condensed text-3xl uppercase tracking-tight">
            Admin <span className="text-accent">Proyectos</span>
          </h1>
          <div className="flex gap-3">
            <a href="/" className="text-xs uppercase tracking-wide text-paper/50 hover:text-accent">
              Ver sitio
            </a>
            <button onClick={handleLogout} className="text-xs uppercase tracking-wide text-paper/50 hover:text-accent">
              Salir
            </button>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSave} className="glass mt-8 space-y-4 p-6">
          <h2 className="font-condensed text-lg uppercase text-accent">
            {editingId ? `Editando: ${editingId}` : "Nuevo proyecto"}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs uppercase tracking-wide text-paper/50">
              Nombre
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </label>
            <label className="block text-xs uppercase tracking-wide text-paper/50">
              Categoría
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as ProjectCategory })}
                className="mt-1 w-full border border-line bg-ink px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs uppercase tracking-wide text-paper/50">
              Cliente
              <input
                value={form.client}
                onChange={(e) => setForm({ ...form, client: e.target.value })}
                className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </label>
            <label className="block text-xs uppercase tracking-wide text-paper/50">
              Año
              <input
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </label>
          </div>

          <label className="block text-xs uppercase tracking-wide text-paper/50">
            Descripción corta
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              rows={2}
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs uppercase tracking-wide text-paper/50">
              Problema / objetivo
              <textarea
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
                rows={2}
              />
            </label>
            <label className="block text-xs uppercase tracking-wide text-paper/50">
              Qué hice
              <textarea
                value={form.what}
                onChange={(e) => setForm({ ...form, what: e.target.value })}
                className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
                rows={2}
              />
            </label>
          </div>

          <label className="block text-xs uppercase tracking-wide text-paper/50">
            Resultado (opcional, deja vacío si no hay evidencia)
            <input
              value={form.result}
              onChange={(e) => setForm({ ...form, result: e.target.value })}
              className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs uppercase tracking-wide text-paper/50">
              Enlace externo (opcional)
              <input
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                placeholder="https://..."
                className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </label>
            <label className="block text-xs uppercase tracking-wide text-paper/50">
              URL preview en vivo / iframe (opcional)
              <input
                value={form.liveUrl}
                onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
                placeholder="https://..."
                className="mt-1 w-full border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
            </label>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-paper/50">Imagen</label>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="text-xs text-paper/70 file:mr-3 file:border-0 file:bg-accent file:px-3 file:py-1.5 file:text-xs file:uppercase file:text-paper"
              />
              {uploading && <span className="text-xs text-paper/50">Subiendo…</span>}
              <input
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="o pega una URL de imagen"
                className="min-w-[220px] flex-1 border border-line bg-transparent px-3 py-2 text-sm text-paper outline-none focus:border-accent"
              />
              {form.image && (
                <img src={form.image} alt="preview" className="h-16 w-16 rounded object-cover" />
              )}
            </div>
          </div>

          {saveError && <p className="text-xs text-accent">{saveError}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-paper transition hover:bg-paper hover:text-ink disabled:opacity-50"
            >
              {saving ? "Guardando…" : editingId ? "Guardar cambios" : "Crear proyecto"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={startNew}
                className="rounded-full border border-line px-6 py-2.5 text-xs font-semibold uppercase tracking-wide hover:border-accent hover:text-accent"
              >
                Cancelar edición
              </button>
            )}
          </div>
        </form>

        {/* Lista */}
        <div className="mt-10">
          <h2 className="font-condensed text-lg uppercase text-paper/70">
            Proyectos ({projects.length})
          </h2>
          <div className="mt-4 divide-y divide-line border border-line">
            {projects.map((p) => (
              <div key={p.id} className="flex items-center gap-4 px-4 py-3">
                <div className="h-12 w-12 shrink-0 overflow-hidden border border-line bg-surface">
                  {p.image && <img src={p.image} alt={p.name} className="h-full w-full object-cover" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-paper">{p.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-paper/40">
                    {p.category} · {p.id}
                  </p>
                </div>
                <button
                  onClick={() => startEdit(p)}
                  className="text-xs uppercase tracking-wide text-paper/50 hover:text-accent"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-xs uppercase tracking-wide text-paper/50 hover:text-red-500"
                >
                  Borrar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
