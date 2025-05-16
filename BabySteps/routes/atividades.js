const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
    const {tipo, descricao, data_hora, bebe_id} = req.body;
    try {
        const result = await db.query(
            'INSERT INTO atividades (tipo, descricao, data_hora) VALUES ($1, $2, $3, $4) RETURNING *',
            [tipo, descricao, data_hora, bebe_id]
        );
        res.status(201).json(result.rows[0]);
    }   catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

router.get('/',async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM atividades');
        res.json(result.rows);
    }   catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

module.exports = router;