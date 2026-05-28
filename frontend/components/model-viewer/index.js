export class ModelViewerComponent {
    constructor(parentId) {
        this.parentId = parentId;
    }

    render() {
        const container = document.getElementById(this.parentId);
        if (!container) return;

        // 1. Создаем сцену и камеру
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // ==========================================
        // ВАЖНО: Активируем ручное управление мышкой
        // ==========================================
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Делает вращение плавным (с инерцией)
        controls.dampingFactor = 0.05;

        // 2. Свет
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        scene.add(ambientLight);

        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight1.position.set(5, 10, 5);
        scene.add(directionalLight1);

        const directionalLight2 = new THREE.DirectionalLight(0x4da6ff, 1.0);
        directionalLight2.position.set(-5, -5, -5);
        scene.add(directionalLight2);

        // 3. Загружаем .glb файл
        const loader = new THREE.GLTFLoader();
        let loadedModel;

        loader.load(
            './models/satellite.glb',
            (gltf) => {
                loadedModel = gltf.scene;

                // Умное центрирование
                const box = new THREE.Box3().setFromObject(loadedModel);
                const center = box.getCenter(new THREE.Vector3());
                loadedModel.position.sub(center);

                // Авто-отдаление камеры (чтобы станция влезла)
                const size = box.getSize(new THREE.Vector3());
                const maxDimension = Math.max(size.x, size.y, size.z);

                const fovRad = camera.fov * (Math.PI / 180);
                const requiredDistance = (maxDimension / 2) / Math.tan(fovRad / 2);

                camera.position.set(0, requiredDistance * 0.4, requiredDistance * 1.5);
                camera.lookAt(0, 0, 0);

                // Обновляем контроллеры мыши под новую позицию камеры
                controls.update();

                scene.add(loadedModel);
            },
            undefined,
            (error) => {
                console.error('Ошибка загрузки .glb файла:', error);
                container.innerHTML = '<div style="color: #ff4d4d; text-align: center; padding-top: 50px;">Не удалось прочитать файл models/satellite.glb</div>';
            }
        );

        // 4. Запускаем анимацию
        const animate = function () {
            requestAnimationFrame(animate);

            // Мы УБРАЛИ авто-вращение (loadedModel.rotation.y += ...)
            // Вместо этого мы обновляем контроллеры мыши каждый кадр
            controls.update();

            renderer.render(scene, camera);
        };

        animate();

        // Адаптивность при ресайзе
        window.addEventListener('resize', () => {
            if(container) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        });
    }
}
