var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=class{constructor(e){this.parent=e}getHTML(e){let t=JSON.parse(localStorage.getItem(`cubesatPrices`)||`{}`)[e.id]||e.price;return`
            <div class="col-md-6 mb-4">
                <div class="card h-100 text-white p-3 border-0 shadow-lg" style="background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(10px); border-top: 4px solid #4da6ff !important; border-radius: 12px;">
                    <div class="card-body d-flex flex-column p-2">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title fw-bold text-light mb-0">${e.title}</h5>
                            <span class="badge bg-primary rounded-pill px-2 py-1 ms-2">Space Ready</span>
                        </div>
                        <p class="card-text text-secondary flex-grow-1 mt-3 mb-4" style="font-size: 0.95rem; line-height: 1.5;">${e.text}</p>

                        <div class="mt-auto pt-3 border-top border-secondary d-flex justify-content-between align-items-center">
                            <h4 class="text-info fw-bold mb-0">${t.toLocaleString()} ₽</h4>
                            <button class="btn px-4 py-2 fw-bold" style="background-color: #00a0ff; color: white; border-radius: 8px; border: none;" data-id="${e.id}" id="click-card-${e.id}">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        `}addListeners(e,t){document.getElementById(`click-card-${e.id}`).addEventListener(`click`,t)}render(e,t){this.parent.insertAdjacentHTML(`beforeend`,this.getHTML(e)),this.addListeners(e,t)}}})),i,a,o=e((()=>{i=class{async get(e){try{return await(await fetch(e)).json()}catch(e){return console.error(`Ошибка GET запроса:`,e),null}}async post(e,t){try{return await(await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})).json()}catch(e){return console.error(`Ошибка POST запроса:`,e),null}}async patch(e,t){try{return{status:(await fetch(e,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})).status}}catch(e){return console.error(`Ошибка PATCH запроса:`,e),{status:500}}}async delete(e){try{return{status:(await fetch(e,{method:`DELETE`})).status}}catch(e){return console.error(`Ошибка DELETE запроса:`,e),{status:500}}}},a=new i})),s,c,l=e((()=>{s=class{constructor(){this.baseUrl=`http://localhost:3000/api`}getComponents(e=``){let t=`${this.baseUrl}/components`;return e&&(t+=`?title=${encodeURIComponent(e)}`),t}getComponentById(e){return`${this.baseUrl}/components/${e}`}createComponent(){return`${this.baseUrl}/components`}updateComponentById(e){return`${this.baseUrl}/components/${e}`}removeComponentById(e){return`${this.baseUrl}/components/${e}`}},c=new s})),u,d=e((()=>{r(),o(),l(),u=class{constructor(e){this.parent=e,this.currentData=[],this.titleQuery=``,this.limit=10}async getData(){let e=await a.get(c.getComponents(this.titleQuery));e&&(this.currentData=e,this.renderData())}renderData(){let e=document.getElementById(`cards-root`);e&&(e.innerHTML=``,this.currentData.slice(0,this.limit).forEach(t=>{new n(e).render(t,this.clickCard.bind(this))}))}getHTML(){return`
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
        `}clickCard(e){let t=e.target.dataset.id;window.navigateTo(`detail`,t)}render(){this.parent.innerHTML=``,this.parent.insertAdjacentHTML(`beforeend`,this.getHTML());let e=document.getElementById(`search-title`),t=document.getElementById(`limit-cards`);e.addEventListener(`input`,e=>{this.titleQuery=e.target.value,this.getData()}),t.addEventListener(`input`,e=>{this.limit=parseInt(e.target.value)||10,this.renderData()}),this.getData()}}})),f,p=e((()=>{f=class{constructor(e){this.parent=e}getHTML(){return`
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
        `}addListeners(){let e=`0`,t=``,n=null,r=!1,i=[],a=document.getElementById(`screen`),o=document.getElementById(`calc-operation`),s=document.getElementById(`history-log`),c=()=>{a.innerText=e,o.innerText=n?`${t} ${n}`:``},l=(e,t)=>{i.length===0&&(s.innerHTML=``),i.push({expr:e,res:t});let n=document.createElement(`div`);n.className=`history-item`,n.innerHTML=`<span class="expr">${e}</span><span class="res">${t}</span>`,s.insertBefore(n,s.firstChild)};document.querySelectorAll(`.btn-num`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.target.innerText;e===`0`||r?(e=n,r=!1):e.length<9&&(e+=n),c()})}),document.getElementById(`btn-ac`).addEventListener(`click`,()=>{e=`0`,t=``,n=null,r=!1,c()}),document.getElementById(`btn-sign`).addEventListener(`click`,()=>{e=String(parseFloat(e)*-1),c()}),document.getElementById(`btn-percent`).addEventListener(`click`,()=>{e=String(parseFloat(e)/100),c()}),document.querySelectorAll(`.op-btn`).forEach(i=>{i.addEventListener(`click`,i=>{let a=i.target.getAttribute(`data-op`);n!==null&&!r&&document.getElementById(`btn-eq`).click(),t=e,n=a,r=!0,c()})}),document.getElementById(`btn-eq`).addEventListener(`click`,()=>{if(n===null||r)return;let i=0,a=parseFloat(t),o=parseFloat(e);switch(n){case`+`:i=a+o;break;case`-`:i=a-o;break;case`*`:i=a*o;break;case`/`:i=o===0?`Ошибка`:a/o;break}i!==`Ошибка`&&(i=Math.round(i*1e5)/1e5),l(`${a} ${n} ${o} =`,i),e=String(i),n=null,r=!0,c()})}render(){this.parent.insertAdjacentHTML(`beforeend`,this.getHTML()),this.addListeners()}}})),m,h=e((()=>{p(),m=class{constructor(e){this.parent=e}getHTML(){return`
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
        `}render(){this.parent.insertAdjacentHTML(`beforeend`,this.getHTML()),new f(document.getElementById(`calculator-root`)).render()}}})),g,_=e((()=>{g=class{constructor(e){this.parent=e}getHTML(){return`
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
        `}render(){this.parent.insertAdjacentHTML(`beforeend`,this.getHTML())}}})),v,y=e((()=>{v=class{constructor(e){this.parentId=e}render(){let e=document.getElementById(this.parentId);if(!e)return;let t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,e.clientWidth/e.clientHeight,.1,1e3),r=new THREE.WebGLRenderer({alpha:!0,antialias:!0});r.setSize(e.clientWidth,e.clientHeight),r.setPixelRatio(window.devicePixelRatio),e.appendChild(r.domElement);let i=new THREE.OrbitControls(n,r.domElement);i.enableDamping=!0,i.dampingFactor=.05;let a=new THREE.AmbientLight(16777215,1.2);t.add(a);let o=new THREE.DirectionalLight(16777215,1.5);o.position.set(5,10,5),t.add(o);let s=new THREE.DirectionalLight(5089023,1);s.position.set(-5,-5,-5),t.add(s);let c=new THREE.GLTFLoader,l;c.load(`./models/satellite.glb`,e=>{l=e.scene;let r=new THREE.Box3().setFromObject(l),a=r.getCenter(new THREE.Vector3);l.position.sub(a);let o=r.getSize(new THREE.Vector3),s=Math.max(o.x,o.y,o.z),c=n.fov*(Math.PI/180),u=s/2/Math.tan(c/2);n.position.set(0,u*.4,u*1.5),n.lookAt(0,0,0),i.update(),t.add(l)},void 0,t=>{console.error(`Ошибка загрузки .glb файла:`,t),e.innerHTML=`<div style="color: #ff4d4d; text-align: center; padding-top: 50px;">Не удалось прочитать файл models/satellite.glb</div>`});let u=function(){requestAnimationFrame(u),i.update(),r.render(t,n)};u(),window.addEventListener(`resize`,()=>{e&&(n.aspect=e.clientWidth/e.clientHeight,n.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight))})}}})),b,x=e((()=>{y(),o(),l(),b=class{constructor(e,t){this.parent=e,this.productId=t||`Неизвестно`}async getData(){let e=await a.get(c.getComponentById(this.productId));this.renderData(e)}renderData(e){e&&(document.getElementById(`edit-title`).value=e.title||``,document.getElementById(`edit-text`).value=e.text||``,document.getElementById(`edit-price`).value=e.price||``)}getHTML(){return`
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
                        <h2 class="fw-bold text-white mb-4">Данные модуля</h2>
                        <p class="text-secondary fs-6 mb-4">Редактирование компонента через PATCH-запрос к API.</p>

                        <div class="mb-3">
                            <label class="form-label text-light">Название</label>
                            <input type="text" id="edit-title" class="form-control bg-dark text-info border-info" placeholder="Загрузка...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-light">Описание</label>
                            <textarea id="edit-text" class="form-control bg-dark text-info border-info" rows="3" placeholder="Загрузка..."></textarea>
                        </div>
                        <div class="mb-4">
                            <label class="form-label text-light">Цена (₽)</label>
                            <input type="number" id="edit-price" class="form-control bg-dark text-info border-info" placeholder="Загрузка...">
                        </div>

                        <button id="save-btn" class="btn btn-outline-warning fw-bold w-50">💾 Сохранить</button>
                    </div>
                    <div class="col-md-6">
                        <div id="3d-model-container" style="height: 400px; width: 100%;"></div>
                    </div>
                </div>
            </div>
        `}render(){this.parent.innerHTML=``,this.parent.insertAdjacentHTML(`beforeend`,this.getHTML()),new v(`3d-model-container`).render(),this.getData();let e=document.getElementById(`save-btn`);e&&e.addEventListener(`click`,async()=>{let t={title:document.getElementById(`edit-title`).value,text:document.getElementById(`edit-text`).value,price:parseInt(document.getElementById(`edit-price`).value)||0},n=await a.patch(c.updateComponentById(this.productId),t);n.status===200||n.status===204?(e.innerText=`✅ Успешно!`,e.classList.replace(`btn-outline-warning`,`btn-success`),setTimeout(()=>{e.innerText=`💾 Сохранить`,e.classList.replace(`btn-success`,`btn-outline-warning`)},2e3)):alert(`Ошибка при сохранении на сервер!`)})}}}));function S(e,t){return e.join(t)}function C(e){let t={},n=0;e.forEach(e=>{t[e]=(t[e]||0)+1});for(let e in t)t[e]>1&&n++;return n}function w(e,t){let n=0,r=0;for(;r<e.length;){let i=String(e[r]);t.startsWith(i)&&n++,r++}return n}function T(...e){let t={},n=0;for(;n<e.length;){let r=e[n],i=Object.keys(r),a=0;for(;a<i.length;){let e=i[a];t[e]===void 0&&(t[e]=r[e]),a++}n++}return t}var E=e((()=>{})),D,O=e((()=>{E(),D=class{constructor(e){this.parent=e}getHTML(){return`
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
        `}render(){this.parent.innerHTML=this.getHTML();let e=document.getElementById(`run-algo-btn`);e&&e.addEventListener(`click`,()=>{document.getElementById(`res-1.1`).textContent=S([`CubeSat`,`Pro`,`v2`],`-`),document.getElementById(`res-1.2`).textContent=C([`Temp`,`Gyro`,`Temp`,`Mag`,`Gyro`])+` (повторяющихся сенсора)`,document.getElementById(`res-2.10`).textContent=w([`OBC`,`COM`,`CAM`,`OBC-1`],`OBC-1-Alpha`)+` (совпадений)`;let e=T({power:`5W`,cpu:`ARM`},{cpu:`x86`,ram:`2GB`});document.getElementById(`res-3.1`).textContent=JSON.stringify(e)})}}}));t((()=>{d(),h(),_(),x(),O();var e=document.getElementById(`root`);window.navigateTo=function(t,n){e.innerHTML=``,t===`main`?new u(e).render():t===`calculator`?new m(e).render():t===`contacts`?new g(e).render():t===`detail`?new b(e,n).render():t===`tasks`&&new D(e).render()},window.navigateTo(`main`)}))();