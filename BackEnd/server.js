const express = require('express');
const cors = require('cors');

const usuariosRouter = require('./routes/usuarios');
const bebesRouter = require('./routes/bebes');
const atividadesRouter = require('./routes/atividades');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRouter);
app.use('/api/bebes', bebesRouter);
app.use('/api/atividades', atividadesRouter);

app.get('/', (req, res) => res.send('API BabySteps está rodando!'));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
