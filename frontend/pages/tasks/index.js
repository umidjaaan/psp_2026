// frontend/pages/tasks/index.js

import {
    buildSatelliteName,
    countDuplicateSensors,
    countCompatiblePrefixModules,
    mergeCubeSatConfigs
} from '../../utils/algorithms.js';

export class TasksPage {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <div class="container mt-5">
                <h2 class="mb-4">Модуль тестирования алгоритмов (ДЗ 1)</h2>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">Задача 1.1: Генерация имени</h5>
                                <p class="card-text text-muted small mb-1">Массив: ['CubeSat', 'Pro', 'v2'], разделитель: '-'</p>
                                <p class="card-text fw-bold mt-2">Результат: <span id="res-1.1" class="text-success">...</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">Задача 1.2: Поиск дубликатов</h5>
                                <p class="card-text text-muted small mb-1">Датчики: ['Temp', 'Gyro', 'Temp', 'Mag', 'Gyro']</p>
                                <p class="card-text fw-bold mt-2">Результат: <span id="res-1.2" class="text-success">...</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">Задача 2.10: Совместимые префиксы</h5>
                                <p class="card-text text-muted small mb-1">Коды: ["OBC", "COM", "CAM", "OBC-1"], Спецификация: "OBC-1-Alpha"</p>
                                <p class="card-text fw-bold mt-2">Результат: <span id="res-2.10" class="text-success">...</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">Задача 3.1: Слияние конфигураций</h5>
                                <p class="card-text text-muted small mb-1">Конфиг 1: { power: '5W', cpu: 'ARM' } <br> Конфиг 2: { cpu: 'x86', ram: '2GB' }</p>
                                <p class="card-text fw-bold mt-2">Результат: <span id="res-3.1" class="text-success">...</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="run-algo-btn" class="btn btn-dark mt-3 px-4">Запустить диагностику</button>
            </div>
        `;
    }

    render() {
        // Отрисовываем верстку
        this.parent.innerHTML = this.getHTML();

        // Вешаем логику на кнопку
        const btn = document.getElementById('run-algo-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                document.getElementById('res-1.1').textContent = buildSatelliteName(['CubeSat', 'Pro', 'v2'], '-');
                document.getElementById('res-1.2').textContent = countDuplicateSensors(['Temp', 'Gyro', 'Temp', 'Mag', 'Gyro']) + ' (повторяющихся сенсора)';
                document.getElementById('res-2.10').textContent = countCompatiblePrefixModules(["OBC", "COM", "CAM", "OBC-1"], "OBC-1-Alpha") + ' (совпадений)';

                const merged = mergeCubeSatConfigs({ power: '5W', cpu: 'ARM' }, { cpu: 'x86', ram: '2GB' });
                document.getElementById('res-3.1').textContent = JSON.stringify(merged);
            });
        }
    }
}
