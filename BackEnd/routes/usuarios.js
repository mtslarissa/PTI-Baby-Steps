const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
    const {nome, email, senha} = req.body;
    try {
        const result = await db.query(
            'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id, nome, email',
            [nome, email, senha]
        );
        res.status(201).json(result.rows[0]);
    }   catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

router.get('/',async (req, res) => {
    try {
        const result = await db.query('SELECT id, nome, email FROM usuarios');
        res.json(result.rows);
    }   catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const resultado = await SecurityPolicyViolationEvent.query(
            'SELECT * FROM usuarios WHERE email = $1',
            [email]
        );

        if (resultado.rows.lenght > 0) {
            const usuario = resultado.rows[0];

            const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);

            if (senhaCorreta) {
                res.json({ sucesso: true, usuario });
            } else {
                res.status(401).json({sucesso: false, mensagem: 'Senha Incorreta' });
            }
        } else {
            res.status(401).json({ sucesso: false, mensagem: 'Usuario nao encontrado'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ sucesso: false, mensagem: 'Erro interno '});
    }
});

module.exports = router;