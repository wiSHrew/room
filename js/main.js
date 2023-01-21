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
const floorM = new THREE.MeshStandardMaterial( { color: 0x3C2A21 } );
const floor = new THREE.Mesh( floorG, floorM );
floor.receiveShadow = true;
scene.add( floor );
floor.position.y = -3.3;

//left wall
const LWallG = new THREE.BoxGeometry( 1, 6, 4 );
const LWallM = new THREE.MeshStandardMaterial( {color: 0xE8D2A6} );
const LWall = new THREE.Mesh( LWallG, LWallM );
LWall.receiveShadow = true;
scene.add( LWall );
LWall.position.x = -6;
LWall.position.y = 0;
LWall.position.z = 0;

//right wall
const RWallG = new THREE.BoxGeometry( 1, 6, 4 );
const RWallM = new THREE.MeshStandardMaterial( {color: 0xE8D2A6} );
const RWall = new THREE.Mesh( RWallG, RWallM );
RWall.receiveShadow = true;
scene.add( RWall );
RWall.position.x = 6;
RWall.position.y = 0;
RWall.position.z = 0;

//back wall
const BWallG = new THREE.BoxGeometry( 12, 6, 1 );
const BWallM = new THREE.MeshStandardMaterial({color: 0xE8D2A6});
const BWall = new THREE.Mesh( BWallG, BWallM );
BWall.receiveShadow = true;
scene.add( BWall );
BWall.position.x = 0;
BWall.position.y = 0;
BWall.position.z = -2;

//ceiling
const CeilG = new THREE.BoxGeometry( 12, 1, 4 );
const CeilM = new THREE.MeshStandardMaterial( {color: 0xD0B8A8} );
const Ceil = new THREE.Mesh( CeilG, CeilM );
Ceil.receiveShadow = true;
scene.add( Ceil );
Ceil.position.x = 0;
Ceil.position.y = 3;
Ceil.position.z = 0;

//bed
const bedG = new THREE.BoxGeometry( 3, 1.5, 3 );
const bedM = new THREE.MeshStandardMaterial({color: 0x86A3B8});
const bed = new THREE.Mesh( bedG, bedM );
bed.receiveShadow = true;
scene.add( bed );
bed.position.x = 4;
bed.position.y = -2.5;
bed.position.z = 0;

//desk
const deskG = new THREE.BoxGeometry( 9, 3, 1 );
const deskM = new THREE.MeshStandardMaterial({color: 0xC27664});
const desk = new THREE.Mesh( deskG, deskM );
desk.receiveShadow = true;
scene.add( desk );
desk.position.x = -2;
desk.position.y = -2;
desk.position.z = -1;	


//chair
const chairG = new THREE.BoxGeometry( 1, 1.5, 1 );
const chairM = new THREE.MeshStandardMaterial({color: 0xECECEC});
const chair = new THREE.Mesh( chairG, chairM );
chair.receiveShadow = true;
scene.add( chair );
chair.position.x = -2;
chair.position.y = -2;
chair.position.z = 0;
const chairBackRestG = new THREE.BoxGeometry( 1, 5, .1 );
const chairBackRestM = new THREE.MeshStandardMaterial({color: 0xECECEC});
const chairBackRest = new THREE.Mesh( chairBackRestG, chairBackRestM );
chairBackRest.receiveShadow = true;
scene.add( chairBackRest );
chairBackRest.position.x = -2;
chairBackRest.position.y = -2;
chairBackRest.position.z = .5;

//laptop
const laptopKeyG = new THREE.BoxGeometry( 1.5, .1, 1 );
const laptopKeyM = new THREE.MeshStandardMaterial({color: 0x181818});
const laptopKey = new THREE.Mesh( laptopKeyG, laptopKeyM );
laptopKey.receiveShadow = true;
scene.add( laptopKey );
laptopKey.position.x = -1;
laptopKey.position.y = -.45;
laptopKey.position.z = -1;

const laptopScreenG = new THREE.BoxGeometry( 1.5, 1, .05 );
const laptopScreenM = new THREE.MeshStandardMaterial({color: 0x181818});
const laptopScreen = new THREE.Mesh( laptopScreenG, laptopScreenM );
laptopScreen.receiveShadow = true;
scene.add( laptopScreen );
laptopScreen.position.x = -1;
laptopScreen.position.y = 0;
laptopScreen.position.z = -1.5;

const laptopScreenLightG = new THREE.BoxGeometry( 1.35, .85, .055 );
const laptopScreenLightM = new THREE.MeshStandardMaterial({color: 0xFEFBF6});
const laptopScreenLight = new THREE.Mesh( laptopScreenLightG, laptopScreenLightM );
laptopScreenLight.receiveShadow = true;
scene.add( laptopScreenLight );
laptopScreenLight.position.x = -1;
laptopScreenLight.position.y = 0;
laptopScreenLight.position.z = -1.5;


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