// frontend/components/product-card/index.js
export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        // ЧИТАЕМ СОХРАНЕННЫЕ ЦЕНЫ. Если есть кастомная - берем ее, иначе дефолтную из data
        const savedPrices = JSON.parse(localStorage.getItem('cubesatPrices') || '{}');
        const displayPrice = savedPrices[data.id] || data.price;

        return `
            <div class="col-md-6 mb-4">
                <div class="card h-100 text-white p-3 border-0 shadow-lg" style="background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(10px); border-top: 4px solid #4da6ff !important; border-radius: 12px;">
                    <div class="card-body d-flex flex-column p-2">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title fw-bold text-light mb-0">${data.title}</h5>
                            <span class="badge bg-primary rounded-pill px-2 py-1 ms-2">Space Ready</span>
                        </div>
                        <p class="card-text text-secondary flex-grow-1 mt-3 mb-4" style="font-size: 0.95rem; line-height: 1.5;">${data.text}</p>

                        <div class="mt-auto pt-3 border-top border-secondary d-flex justify-content-between align-items-center">
                            <h4 class="text-info fw-bold mb-0">${displayPrice.toLocaleString()} ₽</h4>
                            <button class="btn px-4 py-2 fw-bold" style="background-color: #00a0ff; color: white; border-radius: 8px; border: none;" data-id="${data.id}" id="click-card-${data.id}">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners(data, listener) {
        document.getElementById(`click-card-${data.id}`).addEventListener("click", listener);
    }

    render(data, listener) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        this.addListeners(data, listener);
    }
}
