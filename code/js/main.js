const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0x000000 );
renderer.setSize( 800,800 );
document.body.appendChild( renderer.domElement );