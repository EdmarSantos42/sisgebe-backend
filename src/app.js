// sisgebe-backend/src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Rotas da API (inicialmente vazias, serão criadas depois)
// Exemplo: const authRoutes = require(' ./routes/authRoutes');
// app.use('/api/auth', authRoutes);

// Rota de teste
app.get('/api/status', (req, res)=> {
    res.status(200).json({ message: 'API SISGEBE está online!'})
});

// Middleware de tratamento de erros (deve ser o último app.use)
app.use((err, arq, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado no servidor!');
});

module.exports = app;