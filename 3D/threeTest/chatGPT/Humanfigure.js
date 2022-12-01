// First, we need to create a scene, a camera, and a renderer
// This is the basic setup for any three.js project
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Next, we need to create the cubes that will make up the human figure
const cubeSize = 0.1;
const head = new THREE.Mesh(
  new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize ),
  new THREE.MeshBasicMaterial( { color: 0xff0000 } )
);

const body = new THREE.Mesh(
  new THREE.BoxGeometry( cubeSize, cubeSize * 2, cubeSize ),
  new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
);

const arm1 = new THREE.Mesh(
  new THREE.BoxGeometry( cubeSize, cubeSize * 1.5, cubeSize ),
  new THREE.MeshBasicMaterial( { color: 0x0000ff } )
);

const arm2 = arm1.clone();

const leg1 = new THREE.Mesh(
  new THREE.BoxGeometry( cubeSize, cubeSize * 2, cubeSize ),
  new THREE.MeshBasicMaterial( { color: 0x0000ff } )
);

const leg2 = leg1.clone();

// Now we can position the cubes to create the human figure
head.position.set( 0, cubeSize * 2, 0 );
body.position.set( 0, cubeSize, 0 );
arm1.position.set( -cubeSize, cubeSize * 1.5, 0 );
arm2.position.set( cubeSize, cubeSize * 1.5, 0 );
leg1.position.set( -cubeSize / 2, 0, 0 );
leg2.position.set( cubeSize / 2, 0, 0 );

// Finally, we add the cubes to the scene and render them
scene.add( head );
scene.add( body );
scene.add( arm1 );
scene.add( arm2 );
scene.add( leg1 );
scene.add( leg2 );
renderer.render( scene, camera );
