export class ContactsPage {
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
                            <li class="nav-item">
                                <a class="nav-link" onclick="window.navigateTo('calculator')">КАЛЬКУЛЯТОР</a>
                            </li>
                            <li class="nav-item active">
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
                <div class="row justify-content-center text-center">
                    <div class="col-md-10">
                        <h2 class="fw-light mb-4 text-white">Свяжитесь с <span class="fw-bold">нами</span></h2>
                        <p class="text-secondary mb-5 fs-5">Лаборатория проектирования малых космических аппаратов. Мы готовы ответить на любые ваши вопросы по спецификациям и поставкам стандарта CDS.</p>

                        <div class="row mt-5">
                            <div class="col-md-4 mb-4">
                                <div class="p-4 glass-card h-100">
                                    <h4 class="text-info fw-bold mb-3">📍 Адрес</h4>
                                    <p class="text-light mb-0">г. Москва<br>2-я Бауманская ул., д.5, стр.1<br>МГТУ им. Н.Э. Баумана</p>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="p-4 glass-card h-100">
                                    <h4 class="text-info fw-bold mb-3">📞 Телефон</h4>
                                    <p class="text-light mb-0">+7 (777) 777-77-77<br>Пн-Пт: 10:00 - 18:00</p>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="p-4 glass-card h-100">
                                    <h4 class="text-info fw-bold mb-3">✉️ Email</h4>
                                    <p class="text-light mb-0">cubesat@bmstu.ru<br>support@cubesatlab.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
    }
}
