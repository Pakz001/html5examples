// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create a cube
const cubeSize = 10;
const cubeGeometry = new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize );

// Generate a stone-like texture
const canvas = document.createElement('canvas');
canvas.width = 256;
canvas.height = 256;
const context = canvas.getContext('2d');
const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, 'rgb(200, 200, 200)');
gradient.addColorStop(0.5, 'rgb(70, 70, 70)');
gradient.addColorStop(1, 'rgb(200, 200, 200)');
context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeStyle = 'rgb(100, 100, 100)';
context.lineWidth = 2;
for (let i = 0; i < 15; i++) {
  context.beginPath();
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const length = Math.random() * 40 + 10;
  const direction = Math.random() * Math.PI * 2;
  context.moveTo(x + length * Math.cos(direction), y + length * Math.sin(direction));
  context.lineTo(x - length * Math.cos(direction), y - length * Math.sin(direction));
  context.stroke();
}

// Create a texture from the canvas and apply it to the cube
const texture = new THREE.CanvasTexture(canvas);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );
const cubeMaterial = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

// Add the cube to the scene
scene.add(cube);

// Set up the camera
camera.position.z = 5 * cubeSize;

// Set up a loop to animate the scene
const animate = function () {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
};

animate();
