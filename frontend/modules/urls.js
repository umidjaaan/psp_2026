class ApiUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api';
    }

    // Добавили параметр title для реализации поиска (4 вариант)
    getComponents(title = '') {
        let url = `${this.baseUrl}/components`;
        if (title) {
            // Если текст есть, добавляем его в URL как query-параметр
            url += `?title=${encodeURIComponent(title)}`;
        }
        return url;
    }

    getComponentById(id) {
        return `${this.baseUrl}/components/${id}`;
    }

    // Заготовки для будущих запросов
    createComponent() {
        return `${this.baseUrl}/components`;
    }

    updateComponentById(id) {
        return `${this.baseUrl}/components/${id}`;
    }

    removeComponentById(id) {
        return `${this.baseUrl}/components/${id}`;
    }
}

export const urls = new ApiUrls();
