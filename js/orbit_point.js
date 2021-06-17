var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;

camera.position.z = 5;

const vertices = [];

for ( let i = 0; i < 10000; i ++ ) 
{
  const x = THREE.MathUtils.randFloatSpread( 2000 );
  const y = THREE.MathUtils.randFloatSpread( 2000 );
  const z = THREE.MathUtils.randFloatSpread( 2000 );

  vertices.push( x, y, z );

  var myObj = { x : x, y : y, z : z };
  console.log(myObj);
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

const material = new THREE.PointsMaterial( { color: 0xf18c41 } );

const points = new THREE.Points( geometry, material );

scene.add( points );

var animate = function () {
    requestAnimationFrame( animate );

    controls.update();

    // points.rotation.x += 0.01;
    // points.rotation.y += 0.005;

    renderer.render( scene, camera );
};

animate();