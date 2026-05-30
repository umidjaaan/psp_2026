// frontend/pages/main/index.js
import { ProductCardComponent } from "../../components/product-card/index.js";
import { ajax } from "../../modules/ajax.js";
import { urls } from "../../modules/urls.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.currentData = []; // Хранилище загруженных карточек
        this.titleQuery = '';  // Текущий поисковый запрос
        this.limit = 10;       // Максимальное количество карточек по умолчанию
    }

    // Получаем данные с бэкенда через await
    async getData() {
        const data = await ajax.get(urls.getComponents(this.titleQuery));
        if (data) {
            this.currentData = data;
            this.renderData();
        }
    }

    // Отрисовываем карточки с учетом клиентской пагинации (лимита)
    renderData() {
        const cardsRoot = document.getElementById('cards-root');
        if (!cardsRoot) return;

        cardsRoot.innerHTML = ''; // Очищаем старые карточки

        // Ограничиваем количество карточек на клиенте
        const limitedItems = this.currentData.slice(0, this.limit);

        limitedItems.forEach((item) => {
            const productCard = new ProductCardComponent(cardsRoot);
            productCard.render(item, this.clickCard.bind(this));
        });
    }

    getHTML() {
        return `
            <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
                <div class="container-fluid px-4">
                    <a class="navbar-brand text-white d-flex align-items-center" style="cursor: pointer;" onclick="window.navigateTo('main')">
                        <span class="fw-bold text-info me-1">CubeSat</span><span class="fw-light">Lab</span>
                    </a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav align-items-center">
                            <li class="nav-item active">
                                <a class="nav-link" style="cursor: pointer;" onclick="window.navigateTo('main')">ПРОДУКЦИЯ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="cursor: pointer;">ПОСТАВЩИКАМ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="cursor: pointer;" onclick="window.navigateTo('calculator')">КАЛЬКУЛЯТОР</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="cursor: pointer;" onclick="window.navigateTo('contacts')">КОНТАКТЫ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-info fw-bold" style="cursor: pointer;" onclick="window.navigateTo('tasks')">АЛГОРИТМЫ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="cursor: pointer;">КОРЗИНА (0)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="hero-section">
                <div class="container">
                    <h1 class="hero-title fw-bold">Космические технологии<br>в формате CubeSat</h1>
                    <p class="fs-4 text-light mb-5" style="opacity: 0.85;">Надежные компоненты для образовательных и коммерческих миссий</p>

                    <div class="d-flex gap-3 justify-content-center">
                        <a onclick="document.getElementById('catalog').scrollIntoView({behavior: 'smooth'})" class="btn btn-hero-primary" style="cursor: pointer;">Каталог систем</a>
                        <a onclick="window.navigateTo('calculator')" class="btn btn-hero-outline" style="cursor: pointer;">Инженерный расчет</a>
                    </div>
                </div>
            </section>

            <div class="container py-5 mt-4" id="catalog">
                <h2 class="fw-light mb-5 text-center">Доступные <span class="fw-bold">компоненты</span></h2>

                <div class="row justify-content-center mb-5">
                    <div class="col-md-6 mb-3">
                        <label class="form-label text-light">Поиск по названию</label>
                        <input type="text" id="search-title" class="form-control" placeholder="Введите название (например, ADCS)...">
                    </div>
                    <div class="col-md-3 mb-3">
                        <label class="form-label text-light">Количество карточек</label>
                        <input type="number" id="limit-cards" class="form-control" min="1" value="10">
                    </div>
                </div>

                <div class="row justify-content-center" id="cards-root"></div>
            </div>
        `;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        window.navigateTo('detail', cardId);
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        // Находим наши поля ввода
        const searchInput = document.getElementById('search-title');
        const limitInput = document.getElementById('limit-cards');

        // Слушатель для поиска (отправляет новый GET-запрос к API)
        searchInput.addEventListener('input', (e) => {
            this.titleQuery = e.target.value;
            this.getData();
        });

        // Слушатель для лимита (обрезает массив на клиенте без запроса к API)
        limitInput.addEventListener('input', (e) => {
            this.limit = parseInt(e.target.value) || 10;
            this.renderData();
        });

        // Первичная загрузка
        this.getData();
    }
}
