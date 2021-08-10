const express = require('express');
const cors = require('cors');
const app = express();
const postRoute = require('./src/routes/postRoute');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 3333;

mongoose.connect(process.env.MONGOOSE_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db = mongoose.connection;

db.on('error', () => {
  console.log('Houve um erro');
});
db.once('open', () => {
  console.log('Banco Carregado');
});

app.use(cors());
app.use('/', postRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
