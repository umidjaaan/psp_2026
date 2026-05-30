const fileService = require('./fileService');

let dataFilePath;

const init = (filePath) => {
    dataFilePath = filePath;
};

const findAll = (title) => {
    const components = fileService.readData(dataFilePath);
    if (title) {
        return components.filter(c =>
            c.title.toLowerCase().includes(title.toLowerCase())
        );
    }
    return components;
};

const findOne = (id) => {
    const components = fileService.readData(dataFilePath);
    return components.find(c => c.id === id);
};

const create = (componentData) => {
    const components = fileService.readData(dataFilePath);
    const newId = components.length > 0
        ? Math.max(...components.map(c => c.id)) + 1
        : 1;

    const newComponent = { id: newId, ...componentData };
    components.push(newComponent);
    fileService.writeData(dataFilePath, components);
    return newComponent;
};

const update = (id, componentData) => {
    const components = fileService.readData(dataFilePath);
    const index = components.findIndex(c => c.id === id);

    if (index === -1) return null;

    components[index] = { ...components[index], ...componentData };
    fileService.writeData(dataFilePath, components);
    return components[index];
};

const remove = (id) => {
    const components = fileService.readData(dataFilePath);
    const filtered = components.filter(c => c.id !== id);

    if (filtered.length === components.length) return false;

    fileService.writeData(dataFilePath, filtered);
    return true;
};

module.exports = { init, findAll, findOne, create, update, remove };
