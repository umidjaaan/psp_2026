import { MainPage } from "./pages/main/index.js";
import { CalculatorPage } from "./pages/calculator/index.js";
import { ContactsPage } from "./pages/contacts/index.js";
import { DetailPage } from "./pages/detail/index.js";
import { TasksPage } from "./pages/tasks/index.js"; // Подключили новую страницу с алгоритмами

const root = document.getElementById('root');

window.navigateTo = function(pageName, param) {
    root.innerHTML = '';
    if (pageName === 'main') new MainPage(root).render();
    else if (pageName === 'calculator') new CalculatorPage(root).render();
    else if (pageName === 'contacts') new ContactsPage(root).render();
    else if (pageName === 'detail') new DetailPage(root, param).render();
    else if (pageName === 'tasks') new TasksPage(root).render(); // Добавили переход на Алгоритмы
};

window.navigateTo('main');
