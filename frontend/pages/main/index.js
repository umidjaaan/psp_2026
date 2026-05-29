// frontend/pages/main/index.js
import { ProductCardComponent } from "../../components/product-card/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getData() {
        return [
            { id: 1, title: "Компьютер OBC 3U", text: "Мощная вычислительная платформа для CubeSat с дублированием CAN-шин.", price: 150000 },
            { id: 2, title: "Система ADCS", text: "Точное наведение спутника на орбите по датчикам звездной ориентации.", price: 210000 },
            { id: 3, title: "Панели EPS Deployable", text: "Развертываемые солнечные панели с КПД 30% и контроллером заряда.", price: 85000 },
            { id: 4, title: "Передатчик COMM-S", text: "Высокоскоростной приемопередатчик S-диапазона для телеметрии.", price: 120000 }
        ];
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
                <div class="row justify-content-center" id="cards-root"></div>
            </div>
        `;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        window.navigateTo('detail', cardId);
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        const cardsRoot = document.getElementById('cards-root');

        this.getData().forEach((item) => {
            const productCard = new ProductCardComponent(cardsRoot);
            productCard.render(item, this.clickCard.bind(this));
        });
    }
}
