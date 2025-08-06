//sisgebe-backend/server.js
require('dotenv').config();// Carrega as variáveis de ambiente do arquivo
const app = require('./srg/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
    console.log('Acesse: http://localhost:${PORT}'); // No GitPod. será uma URL diferente
});