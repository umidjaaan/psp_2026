// frontend/pages/detail/index.js
import { ModelViewerComponent } from "../../components/model-viewer/index.js";

export class DetailPage {
    constructor(parent, productId) {
        this.parent = parent;
        this.productId = productId || "Неизвестно";
    }

    getHTML() {
        // Достаем измененные цены из локального хранилища браузера
        const savedPrices = JSON.parse(localStorage.getItem('cubesatPrices') || '{}');

        // Дефолтные цены (на случай, если цену еще не меняли)
        const defaultPrices = { 1: 150000, 2: 210000, 3: 85000, 4: 120000 };
        // Берем сохраненную цену, если нет - дефолтную, если и ее нет - 150000
        const currentPrice = savedPrices[this.productId] || defaultPrices[this.productId] || 150000;

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
                        <h2 class="fw-bold text-white mb-4">Детальный просмотр модуля</h2>
                        <p class="text-secondary fs-5">Здесь отображается интерактивная 3D-модель (GLB) выбранного узла наноспутника. Вы можете интегрировать её в свою сборку.</p>

                        <div class="d-flex align-items-center mb-4 mt-3">
                            <input type="number" id="editPriceInput" class="form-control bg-dark text-info border-info me-2" style="width: 150px; font-size: 1.5rem;" value="${currentPrice}">
                            <span class="fs-4 text-info me-3">₽</span>
                            <button id="savePriceBtn" class="btn btn-outline-warning fw-bold">💾 Сохранить</button>
                        </div>

                        <button class="btn btn-hero-primary mt-2 w-50" onclick="alert('Добавлено в корзину!')">В корзину</button>
                    </div>
                    <div class="col-md-6">
                        <div id="3d-model-container" style="height: 400px; width: 100%;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        // Запускаем 3D-модель
        const viewer = new ModelViewerComponent('3d-model-container');
        viewer.render();

        // ЛОГИКА СОХРАНЕНИЯ НОВОЙ ЦЕНЫ
        const saveBtn = document.getElementById('savePriceBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                const newPriceValue = document.getElementById('editPriceInput').value;
                const savedPrices = JSON.parse(localStorage.getItem('cubesatPrices') || '{}');

                // Перезаписываем цену именно для этого ID
                savedPrices[this.productId] = parseInt(newPriceValue);
                localStorage.setItem('cubesatPrices', JSON.stringify(savedPrices));

                // Визуальный эффект успешного сохранения
                saveBtn.innerText = '✅ Успешно!';
                saveBtn.classList.replace('btn-outline-warning', 'btn-success');
                setTimeout(() => {
                    saveBtn.innerText = '💾 Сохранить';
                    saveBtn.classList.replace('btn-success', 'btn-outline-warning');
                }, 2000);
            });
        }
    }
}
