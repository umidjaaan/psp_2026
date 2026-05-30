const componentsService = require('../services/componentsService');

const getAll = (req, res) => {
    const { title } = req.query;
    res.json(componentsService.findAll(title));
};

const getById = (req, res) => {
    const component = componentsService.findOne(parseInt(req.params.id));
    if (!component) return res.status(404).json({ error: 'Компонент не найден' });
    res.json(component);
};

const create = (req, res) => {
    const { title, text, price } = req.body;
    if (!title || !price) {
        return res.status(400).json({ error: 'Название и цена обязательны' });
    }
    const newComponent = componentsService.create({ title, text, price });
    res.status(201).json(newComponent);
};

const update = (req, res) => {
    const updated = componentsService.update(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Компонент не найден' });
    res.json(updated);
};

const remove = (req, res) => {
    const success = componentsService.remove(parseInt(req.params.id));
    if (!success) return res.status(404).json({ error: 'Компонент не найден' });
    res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };
