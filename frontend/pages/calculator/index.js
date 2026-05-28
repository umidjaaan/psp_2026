import { CalculatorComponent } from "../../components/calculator/index.js";

export class CalculatorPage {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
                <div class="container-fluid px-4">
                    <a class="navbar-brand text-white d-flex align-items-center" onclick="window.navigateTo('main')">
                        <span class="fw-bold text-info me-1">CubeSat</span><span class="fw-light">Lab</span>
                    </a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav align-items-center">
                            <li class="nav-item">
                                <a class="nav-link" onclick="window.navigateTo('main')">ПРОДУКЦИЯ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">ПОСТАВЩИКАМ</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" onclick="window.navigateTo('calculator')">КАЛЬКУЛЯТОР</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onclick="window.navigateTo('contacts')">КОНТАКТЫ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">КОРЗИНА (0)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container" style="padding-top: 130px; min-height: 100vh;">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-5 text-center">
                        <h2 class="fw-light mb-3 text-white">Инженерный <span class="fw-bold">расчет</span></h2>
                        <p class="text-secondary mb-5">Рассчитайте параметры сборки и энергопотребление наноспутника перед добавлением в корзину.</p>

                        <div id="calculator-root"></div>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        const calcRoot = document.getElementById('calculator-root');
        const calculator = new CalculatorComponent(calcRoot);
        calculator.render();
    }
}
