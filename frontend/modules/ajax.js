class Ajax {
    // Используем async/await и встроенную функцию fetch
    async get(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data; // Возвращаем данные (промис разрешится ими)
        } catch (error) {
            console.error('Ошибка GET запроса:', error);
            return null;
        }
    }

    async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Ошибка POST запроса:', error);
            return null;
        }
    }

    async patch(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            // Для PATCH нам важен статус ответа (200 или 204)
            return { status: response.status };
        } catch (error) {
            console.error('Ошибка PATCH запроса:', error);
            return { status: 500 };
        }
    }

    async delete(url) {
        try {
            const response = await fetch(url, { method: 'DELETE' });
            return { status: response.status };
        } catch (error) {
            console.error('Ошибка DELETE запроса:', error);
            return { status: 500 };
        }
    }
}

export const ajax = new Ajax();
