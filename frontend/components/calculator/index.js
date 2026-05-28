export class CalculatorComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <div class="calculator-wrapper w-100">
                <div class="mb-2 ms-2 text-secondary" style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">История операций</div>
                <div class="calc-history w-100 mb-4 shadow" id="history-log">
                    <div class="text-muted fst-italic" style="opacity: 0.5;">Лог расчетов пуст...</div>
                </div>

                <div class="iphone-container mx-auto" style="max-width: 320px; background: #000; padding: 24px 18px; border-radius: 40px; border: 4px solid #1e293b; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    <div class="iphone-screen" style="height: 100px; display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-end; padding: 0 10px 10px 10px;">
                        <div id="calc-operation" style="color: #ff9f0a; font-size: 1.1rem; min-height: 1.5rem; font-family: monospace;"></div>
                        <div id="screen" style="font-size: 3.5rem; font-weight: 300; color: white; line-height: 1;">0</div>
                    </div>
                    <div class="iphone-keyboard" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px;">
                        <button class="btn btn-light rounded-circle fw-bold" id="btn-ac" style="width: 60px; height: 60px;">AC</button>
                        <button class="btn btn-light rounded-circle fw-bold" id="btn-sign" style="width: 60px; height: 60px;">+/-</button>
                        <button class="btn btn-light rounded-circle fw-bold" id="btn-percent" style="width: 60px; height: 60px;">%</button>
                        <button class="btn btn-warning rounded-circle text-white fs-4 op-btn" data-op="/" style="width: 60px; height: 60px;">÷</button>

                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">7</button>
                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">8</button>
                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">9</button>
                        <button class="btn btn-warning rounded-circle text-white fs-4 op-btn" data-op="*" style="width: 60px; height: 60px;">×</button>

                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">4</button>
                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">5</button>
                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">6</button>
                        <button class="btn btn-warning rounded-circle text-white fs-4 op-btn" data-op="-" style="width: 60px; height: 60px;">-</button>

                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">1</button>
                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">2</button>
                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">3</button>
                        <button class="btn btn-warning rounded-circle text-white fs-4 op-btn" data-op="+" style="width: 60px; height: 60px;">+</button>

                        <button class="btn btn-dark text-white fs-5 btn-num" style="grid-column: span 2; border-radius: 30px; text-align: left; padding-left: 22px;">0</button>
                        <button class="btn btn-dark rounded-circle text-white fs-5 btn-num" style="width: 60px; height: 60px;">.</button>
                        <button class="btn btn-warning rounded-circle text-white fs-4" id="btn-eq" style="width: 60px; height: 60px;">=</button>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners() {
        let currentInput = '0';
        let previousInput = '';
        let currentOperator = null;
        let shouldResetScreen = false;
        let historyArray = [];

        const screen = document.getElementById('screen');
        const operationDisplay = document.getElementById('calc-operation');
        const historyLog = document.getElementById('history-log');

        const updateScreen = () => {
            screen.innerText = currentInput;
            operationDisplay.innerText = currentOperator ? `${previousInput} ${currentOperator}` : '';
        };

        const addToHistoryLog = (expr, res) => {
            if (historyArray.length === 0) historyLog.innerHTML = '';
            historyArray.push({ expr, res });
            const item = document.createElement('div');
            item.className = 'history-item';
            item.innerHTML = `<span class="expr">${expr}</span><span class="res">${res}</span>`;
            historyLog.insertBefore(item, historyLog.firstChild);
        };

        document.querySelectorAll('.btn-num').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const digit = e.target.innerText;
                if (currentInput === '0' || shouldResetScreen) {
                    currentInput = digit;
                    shouldResetScreen = false;
                } else if (currentInput.length < 9) {
                    currentInput += digit;
                }
                updateScreen();
            });
        });

        document.getElementById('btn-ac').addEventListener('click', () => {
            currentInput = '0'; previousInput = ''; currentOperator = null; shouldResetScreen = false; updateScreen();
        });

        document.getElementById('btn-sign').addEventListener('click', () => {
            currentInput = String(parseFloat(currentInput) * -1); updateScreen();
        });

        document.getElementById('btn-percent').addEventListener('click', () => {
            currentInput = String(parseFloat(currentInput) / 100); updateScreen();
        });

        document.querySelectorAll('.op-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const op = e.target.getAttribute('data-op');
                if (currentOperator !== null && !shouldResetScreen) document.getElementById('btn-eq').click();
                previousInput = currentInput; currentOperator = op; shouldResetScreen = true; updateScreen();
            });
        });

        document.getElementById('btn-eq').addEventListener('click', () => {
            if (currentOperator === null || shouldResetScreen) return;
            let result = 0;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            switch(currentOperator) {
                case '+': result = prev + current; break;
                case '-': result = prev - current; break;
                case '*': result = prev * current; break;
                case '/': result = current !== 0 ? prev / current : 'Ошибка'; break;
            }
            if (result !== 'Ошибка') result = Math.round(result * 100000) / 100000;
            addToHistoryLog(`${prev} ${currentOperator} ${current} =`, result);
            currentInput = String(result); currentOperator = null; shouldResetScreen = true; updateScreen();
        });
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        this.addListeners();
    }
}
