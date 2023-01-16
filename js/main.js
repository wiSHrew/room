const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xffffff );
renderer.setSize( window .innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


//floor
const floorG = new THREE.BoxGeometry( 12, 1, 4 );
const floorM = new THREE.MeshStandardMaterial( { color: 0xd3d8d7 } );
const floor = new THREE.Mesh( floorG, floorM );
floor.receiveShadow = true;
scene.add( floor );
floor.position.y = -3.3;

//left wall
const LWallG = new THREE.BoxGeometry( 1, 6, 4 );
const LWallM = new THREE.MeshStandardMaterial( {color: 0x355a85} );
const LWall = new THREE.Mesh( LWallG, LWallM );
LWall.receiveShadow = true;
scene.add( LWall );
LWall.position.x = -6;
LWall.position.y = 0;
LWall.position.z = 0;

//right wall
const RWallG = new THREE.BoxGeometry( 1, 6, 4 );
const RWallM = new THREE.MeshStandardMaterial( {color: 0x355a85} );
const RWall = new THREE.Mesh( RWallG, RWallM );
RWall.receiveShadow = true;
scene.add( RWall );
RWall.position.x = 6;
RWall.position.y = 0;
RWall.position.z = 0;

//back wall
const BWallG = new THREE.BoxGeometry( 12, 6, 1 );
const BWallM = new THREE.MeshToonMaterial({color: 0x355a85});
const BWall = new THREE.Mesh( BWallG, BWallM );
BWall.receiveShadow = true;
scene.add( BWall );
BWall.position.x = 0;
BWall.position.y = 0;
BWall.position.z = -2;

//ceiling
const CeilG = new THREE.BoxGeometry( 12, 1, 4 );
const CeilM = new THREE.MeshStandardMaterial( {color: 0x764234} );
const Ceil = new THREE.Mesh( CeilG, CeilM );
Ceil.receiveShadow = true;
scene.add( Ceil );
Ceil.position.x = 0;
Ceil.position.y = 3;
Ceil.position.z = 0;


const AmbientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( AmbientLight );
const HemisphereLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, .3 );
scene.add( HemisphereLight );
const PointLight = new THREE.PointLight( 0xffffff, .3, 100 );
PointLight.castShadow = true;
scene.add( PointLight );
PointLight.position.z = -4;

PointLight.shadow.mapSize.width = 1024;
PointLight.shadow.mapSize.height = 1024;

camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );

renderer.render( scene, camera );
}
animate();