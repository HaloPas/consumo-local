require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/health', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS ahora');
    res.json({ ok: true, baseDeDatos: rows[0].ahora });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'No se pudo conectar a la base de datos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));