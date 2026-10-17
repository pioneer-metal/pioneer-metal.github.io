/** Pioneer emblem: locally bundled Three.js, original logo geometry, progressive enhancement. */
import * as THREE from './vendor/three/three.module.min.js';

const stage = document.querySelector('[data-emblem-stage]');
if (stage) initEmblem(stage).catch(() => { /* The original emblem stays visible if WebGL is unavailable. */ });

async function initEmblem(stage) {
    const response = await fetch(new URL('./resources/emblem-shapes.json', import.meta.url));
    if (!response.ok) throw new Error('Emblem geometry unavailable');
    const outlines = await response.json();
    const canvas = stage.querySelector('canvas');
    const toggle = stage.querySelector('[data-emblem-toggle]');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, .1, 40);
    camera.position.set(0, 0, 9.6);

    // Studio reflection panels give the metal real highlights rather than a flat texture.
    const faces = Array.from({ length: 6 }, (_, index) => {
        const panel = document.createElement('canvas');
        panel.width = panel.height = 128;
        const context = panel.getContext('2d');
        context.fillStyle = '#707477'; context.fillRect(0, 0, 128, 128);
        context.fillStyle = index % 2 ? '#ffffff' : '#25292b'; context.fillRect(16, 0, 38, 128);
        context.fillStyle = '#e9eeef'; context.fillRect(82, 0, 18, 128);
        return panel;
    });
    const environment = new THREE.CubeTexture(faces);
    environment.colorSpace = THREE.SRGBColorSpace;
    environment.needsUpdate = true;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const reflection = pmrem.fromCubemap(environment);
    scene.environment = reflection.texture;
    pmrem.dispose(); environment.dispose();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x383432, 2));
    const key = new THREE.DirectionalLight(0xffffff, 4.5);
    key.position.set(-3, 4, 6); scene.add(key);
    const rim = new THREE.DirectionalLight(0xffd6c9, 3);
    rim.position.set(4, -1, -4); scene.add(rim);
    const red = new THREE.MeshStandardMaterial({ color: 0xc72016, metalness: .82, roughness: .27 });
    const silver = new THREE.MeshStandardMaterial({ color: 0xf4f4f0, metalness: .9, roughness: .24 });
    const emblem = new THREE.Group();
    scene.add(emblem);
    function extrude(points, depth, bevel, material, z) {
        const shape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x, y)));
        const geometry = new THREE.ExtrudeGeometry(shape, {
            depth, bevelEnabled: true, bevelSegments: 3, steps: 1,
            bevelSize: bevel, bevelThickness: bevel, curveSegments: 32
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = z;
        emblem.add(mesh);
        return mesh;
    }
    // The octagonal seal and five white forms come from Pioneer's own Favicon.png.
    const octagon = Array.from({ length: 8 }, (_, i) => {
        const angle = Math.PI / 2 + i * Math.PI / 4;
        return [Math.cos(angle) * 2, Math.sin(angle) * 2];
    });
    extrude(octagon, .30, .045, red, -.15);
    outlines.forEach(points => {
        extrude(points, .045, .008, silver, .185);
        const back = extrude(points, .045, .008, silver, -.23);
        back.scale.x = -1;
    });
    emblem.rotation.set(0, -.40, 0);
    emblem.scale.z = 2.00;
    let paused = reduced.matches;
    let visible = true;
    let dragging = false;
    let previousX = 0;
    let lastTime = 0;
    let frame = 0;
    let disposed = false;
    function syncToggle() {
        toggle.setAttribute('aria-pressed', String(paused));
        stage.classList.toggle('is-paused', paused);
        const label = toggle.querySelector('[data-i18n]');
        const key = paused ? 'resume_rotation' : 'pause_rotation';
        label.dataset.i18n = key;
        const language = document.documentElement.lang || 'en';
        if (typeof i18nData !== 'undefined') label.textContent = (i18nData[language] || i18nData.en)[key];
    }
    function draw(time = 0) {
        frame = 0;
        if (disposed) return;
        const elapsed = lastTime ? Math.min((time - lastTime) / 1000, .05) : 0;
        lastTime = time;
        if (!paused && !dragging) emblem.rotation.y += elapsed * .24;
        renderer.render(scene, camera);
        if (visible && !document.hidden && !paused) frame = requestAnimationFrame(draw);
    }
    function resume() {
        if (disposed) return;
        cancelAnimationFrame(frame); lastTime = 0;
        if (visible && !document.hidden) frame = requestAnimationFrame(draw);
    }
    const resize = new ResizeObserver(() => {
        const { width, height } = stage.getBoundingClientRect();
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        resume();
    });
    resize.observe(stage);
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; resume(); });
    visibility.observe(stage);
    document.addEventListener('visibilitychange', resume);
    reduced.addEventListener('change', () => { paused = reduced.matches; syncToggle(); resume(); });
    toggle.addEventListener('click', () => { paused = !paused; syncToggle(); resume(); });
    canvas.addEventListener('pointerdown', event => {
        if (reduced.matches || (event.pointerType === 'mouse' && event.button !== 0)) return;
        dragging = true; previousX = event.clientX;
        canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener('pointermove', event => {
        if (!dragging) return;
        emblem.rotation.y += (event.clientX - previousX) * .009;
        previousX = event.clientX;
        if (paused) renderer.render(scene, camera);
    });
    const release = () => { dragging = false; };
    canvas.addEventListener('pointerup', release);
    canvas.addEventListener('pointercancel', release);
    canvas.addEventListener('lostpointercapture', release);
    canvas.addEventListener('webglcontextlost', event => {
        event.preventDefault(); cancelAnimationFrame(frame);
        stage.classList.remove('is-ready');
    });
    canvas.addEventListener('webglcontextrestored', () => { stage.classList.add('is-ready'); resume(); });
    // Do not dispose on bfcache navigation; the restored page reuses the same scene.
    window.addEventListener('pagehide', event => {
        cancelAnimationFrame(frame);
        if (event.persisted) return;
        disposed = true; resize.disconnect(); visibility.disconnect();
        scene.traverse(object => object.geometry?.dispose());
        red.dispose(); silver.dispose(); reflection.dispose(); renderer.dispose();
    });
    window.addEventListener('pageshow', resume);
    new MutationObserver(syncToggle).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    renderer.render(scene, camera);
    stage.classList.add('is-ready'); syncToggle(); resume();
}
