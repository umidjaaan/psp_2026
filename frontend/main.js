import { MainPage } from "./pages/main/index.js";
import { CalculatorPage } from "./pages/calculator/index.js";
import { ContactsPage } from "./pages/contacts/index.js";
import { DetailPage } from "./pages/detail/index.js"; // Подключили Подробнее

// Алгоритмы из ДЗ запускаем в фоне, чтобы препод увидел их в консоли
import { countCompatiblePrefixModules, mergeCubeSatConfigs } from "./utils/algorithms.js";
console.log("🚀 Результат Задачи 2.10:", countCompatiblePrefixModules(["obc", "comm", "comm-s"], "comm-s-v2"));
console.log("🚀 Результат Задачи 3.1:", mergeCubeSatConfigs({ power: '10W' }, { power: '15W', cpu: 'ARM' }));

const root = document.getElementById('root');

window.navigateTo = function(pageName, param) {
    root.innerHTML = '';
    if (pageName === 'main') new MainPage(root).render();
    else if (pageName === 'calculator') new CalculatorPage(root).render();
    else if (pageName === 'contacts') new ContactsPage(root).render();
    else if (pageName === 'detail') new DetailPage(root, param).render(); // Переход на Подробнее
};

window.navigateTo('main');
