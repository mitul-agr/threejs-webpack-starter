console.log('Hello World!', { THREE });
const canvas = document.querySelector('.webgl');

/** Scene */
const scene = new THREE.Scene();

/** Perspective Camera */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

/** WebGL Renderer */
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

/** render loop */
const render = () => {
	renderer.render(scene, camera);

	requestAnimationFrame(render);
}

requestAnimationFrame(render);
