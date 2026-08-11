require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString("hex");
const ADMIN_USER = process.env.ADMIN_USER || "fernando";
// Hash generado a partir de ADMIN_PASSWORD en el arranque (ver abajo)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "cambia-esta-clave";

const DATA_FILE = path.join(__dirname, "data", "projects.json");
const UPLOADS_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(UPLOADS_DIR));

function readProjects() {
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}
function writeProjects(list) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "No autorizado" });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
}

// --- Auth ---
const passwordHash = bcrypt.hashSync(ADMIN_PASSWORD, 10);

app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  if (username !== ADMIN_USER || !bcrypt.compareSync(password || "", passwordHash)) {
    return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token });
});

// --- Public: listar proyectos ---
app.get("/api/projects", (req, res) => {
  res.json(readProjects());
});

// --- Protegido: crear ---
app.post("/api/projects", requireAuth, (req, res) => {
  const list = readProjects();
  const body = req.body || {};
  if (!body.name || !body.category) {
    return res.status(400).json({ error: "name y category son obligatorios" });
  }
  const id = body.id || body.name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Date.now().toString(36);
  const project = {
    id,
    name: body.name,
    category: body.category,
    client: body.client || "[COMPLETAR]",
    year: body.year || "[COMPLETAR]",
    description: body.description || "",
    problem: body.problem || "",
    what: body.what || "",
    result: body.result || null,
    image: body.image || null,
    link: body.link || undefined,
    liveUrl: body.liveUrl || undefined,
  };
  list.push(project);
  writeProjects(list);
  res.status(201).json(project);
});

// --- Protegido: editar ---
app.put("/api/projects/:id", requireAuth, (req, res) => {
  const list = readProjects();
  const idx = list.findIndex((p) => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "No encontrado" });
  const body = req.body || {};
  list[idx] = {
    ...list[idx],
    name: body.name ?? list[idx].name,
    category: body.category ?? list[idx].category,
    client: body.client ?? list[idx].client,
    year: body.year ?? list[idx].year,
    description: body.description ?? list[idx].description,
    problem: body.problem ?? list[idx].problem,
    what: body.what ?? list[idx].what,
    result: body.result ?? list[idx].result,
    image: body.image ?? list[idx].image,
    link: body.link ?? list[idx].link,
    liveUrl: body.liveUrl ?? list[idx].liveUrl,
  };
  writeProjects(list);
  res.json(list[idx]);
});

// --- Protegido: borrar ---
app.delete("/api/projects/:id", requireAuth, (req, res) => {
  const list = readProjects();
  const next = list.filter((p) => p.id !== req.params.id);
  if (next.length === list.length) return res.status(404).json({ error: "No encontrado" });
  writeProjects(next);
  res.json({ ok: true });
});

// --- Protegido: subir imagen ---
const storage = multer.diskStorage({
  destination: UPLOADS_DIR,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || ".jpg";
    const safe = crypto.randomBytes(8).toString("hex");
    cb(null, `${Date.now()}-${safe}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (/^image\/(jpeg|png|webp|gif)$/.test(file.mimetype)) cb(null, true);
    else cb(new Error("Solo se permiten imágenes"));
  },
});

app.post("/api/upload", requireAuth, upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No se recibió archivo" });
  res.json({ url: `/uploads/${req.file.filename}` });
});

app.listen(PORT, () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
