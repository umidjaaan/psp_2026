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

// Разрешаем CORS напрямую на сервере (замена глючному расширению)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Мгновенно отвечаем на проверочный запрос браузера
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Логирующий middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Подключаем маршруты
app.use('/api/components', componentsRouter);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});
