const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors()); // em produção, precisaria configura o origin como parametro do cors
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);