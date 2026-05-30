const express = require('express');
const path = require('path');
const componentsRouter = require('./routes/components');
const componentsService = require('./services/componentsService');

const app = express();
const PORT = 3000;

// Инициализируем БД
const DATA_FILE = path.join(__dirname, 'data/components.json');
componentsService.init(DATA_FILE);

app.use(express.json());

// Логирующий middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Подключаем маршруты
app.use('/api/components', componentsRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});
