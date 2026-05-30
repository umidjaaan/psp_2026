// frontend/pages/detail/index.js
import { ModelViewerComponent } from "../../components/model-viewer/index.js";
import { ajax } from "../../modules/ajax.js";
import { urls } from "../../modules/urls.js";

export class DetailPage {
    constructor(parent, productId) {
        this.parent = parent;
        this.productId = productId || "Неизвестно";
    }

    // Делаем запрос к API для получения конкретной детали
    getData() {
        ajax.get(urls.getComponentById(this.productId), (data) => {
            this.renderData(data);
        });
    }

    // Раскладываем пришедшие данные по полям ввода
    renderData(item) {
        if (!item) return;

        document.getElementById('edit-title').value = item.title || '';
        document.getElementById('edit-text').value = item.text || '';
        document.getElementById('edit-price').value = item.price || '';
    }

    getHTML() {
        return `
            <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
                <div class="container-fluid px-4">
                    <a class="navbar-brand text-white d-flex align-items-center" style="cursor:pointer;" onclick="window.navigateTo('main')">
                        <span class="fw-bold text-info me-1">CubeSat</span><span class="fw-light">Lab</span>
                    </a>
                </div>
            </nav>

            <div class="container" style="padding-top: 120px; min-height: 100vh;">
                <button class="btn btn-outline-info mb-4" onclick="window.navigateTo('main')">← Назад в каталог</button>

                <div class="row glass-card p-4 mx-1">
                    <div class="col-md-6 d-flex flex-column justify-content-center">
                        <span class="badge bg-primary mb-3" style="width: fit-content;">ID Компонента: ${this.productId}</span>
                        <h2 class="fw-bold text-white mb-4">Данные модуля</h2>
                        <p class="text-secondary fs-6 mb-4">Редактирование компонента через PATCH-запрос к API.</p>

                        <div class="mb-3">
                            <label class="form-label text-light">Название</label>
                            <input type="text" id="edit-title" class="form-control bg-dark text-info border-info" placeholder="Загрузка...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-light">Описание</label>
                            <textarea id="edit-text" class="form-control bg-dark text-info border-info" rows="3" placeholder="Загрузка..."></textarea>
                        </div>
                        <div class="mb-4">
                            <label class="form-label text-light">Цена (₽)</label>
                            <input type="number" id="edit-price" class="form-control bg-dark text-info border-info" placeholder="Загрузка...">
                        </div>

                        <button id="save-btn" class="btn btn-outline-warning fw-bold w-50">💾 Сохранить</button>
                    </div>
                    <div class="col-md-6">
                        <div id="3d-model-container" style="height: 400px; width: 100%;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        // Запускаем 3D-модель
        const viewer = new ModelViewerComponent('3d-model-container');
        viewer.render();

        // Отправляем запрос за данными
        this.getData();

        // ЛОГИКА СОХРАНЕНИЯ ЧЕРЕЗ API
        const saveBtn = document.getElementById('save-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                // 1. Собираем измененные данные из полей ввода
                const updatedData = {
                    title: document.getElementById('edit-title').value,
                    text: document.getElementById('edit-text').value,
                    price: parseInt(document.getElementById('edit-price').value) || 0
                };

                // 2. Отправляем PATCH-запрос на сервер
                ajax.patch(urls.updateComponentById(this.productId), updatedData, (response, status) => {
                    if (status === 200 || status === 204) {
                        // Визуальный эффект успешного сохранения
                        saveBtn.innerText = '✅ Успешно!';
                        saveBtn.classList.replace('btn-outline-warning', 'btn-success');

                        setTimeout(() => {
                            saveBtn.innerText = '💾 Сохранить';
                            saveBtn.classList.replace('btn-success', 'btn-outline-warning');
                        }, 2000);
                    } else {
                        alert('Ошибка при сохранении на сервер!');
                    }
                });
            });
        }
    }
}
