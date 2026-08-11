import express from 'express'
import cors from 'cors'
import multer from 'multer'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const PORT = process.env.PORT || 4000
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Renovvo123'
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'renovvo-admin-token'
const ROOT = path.resolve('./')
const DATA_FILE = path.join(ROOT, 'data.json')
const UPLOAD_DIR = path.join(ROOT, 'uploads')

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true })
}

const app = express()
app.use(cors())
app.use(express.json({ limit: '20mb' }))
app.use('/uploads', express.static(UPLOAD_DIR))

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '-')
    const name = `${base}-${Date.now()}${ext}`
    cb(null, name)
  },
})
const upload = multer({ storage })

function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ content: {}, images: [] }, null, 2), 'utf-8')
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

function validateToken(req, res, next) {
  const token = req.headers['x-admin-token']
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/login', (req, res) => {
  const { password } = req.body
  if (password === ADMIN_PASSWORD) {
    return res.json({ token: ADMIN_TOKEN })
  }
  res.status(401).json({ error: 'Invalid password' })
})

app.get('/api/content', (req, res) => {
  const data = readData()
  const page = req.query.page
  if (page) {
    return res.json(data.content[page] ?? {})
  }
  res.json(data.content)
})

app.post('/api/content', validateToken, (req, res) => {
  const newContent = req.body.content
  if (!newContent || typeof newContent !== 'object') {
    return res.status(400).json({ error: 'Invalid content payload' })
  }

  const data = readData()
  data.content = { ...data.content, ...newContent }
  writeData(data)
  res.json({ success: true, content: data.content })
})

app.get('/api/images', (req, res) => {
  const data = readData()
  res.json(data.images ?? [])
})

app.post('/api/upload', validateToken, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Missing file upload' })
  }

  const data = readData()
  const image = {
    id: `${Date.now()}-${req.file.filename}`,
    url: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname,
    createdAt: new Date().toISOString(),
  }
  data.images = [...(data.images || []), image]
  writeData(data)
  res.json(image)
})

app.delete('/api/images/:id', validateToken, (req, res) => {
  const id = req.params.id
  const data = readData()
  const index = (data.images || []).findIndex(img => img.id === id)
  if (index < 0) {
    return res.status(404).json({ error: 'Image not found' })
  }
  const [removed] = data.images.splice(index, 1)
  const filePath = path.join(UPLOAD_DIR, path.basename(removed.url))
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
  writeData(data)
  res.json({ success: true })
})

app.listen(PORT, () => {
  console.log(`Renovvo CMS backend running on http://localhost:${PORT}`)
})
