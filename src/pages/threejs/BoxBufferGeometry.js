import React, { Component } from 'react';
// import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const THREE = window.THREE;

export default class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
        canvasId:''
      }

      this.config = {
        timeOut:60
      }
      this.captchaIns = null;
      
    }
    componentDidMount(){
        var camera, scene, renderer;
			// var geometry, material, mesh;
			var target = new THREE.Vector3();

			var lon = 90, lat = 0;
			var phi = 0, theta = 0;
            const _this = this;
			var touchX, touchY;

			init();
			animate();
          
			function init() {

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

				scene = new THREE.Scene();

				var sides = [
					{
						url: require('../../assets/c99cefee8fb840c98084ef78e57092bd.jpg'),
						position: [ -512, 0, 0 ],
						rotation: [ 0, Math.PI / 2, 0 ]
					},
					{
                        url: require('../../assets/c795b798f55041788ac3fccea6e2ea27.jpg'),
						position: [ 512, 0, 0 ],
						rotation: [ 0, -Math.PI / 2, 0 ]
					},
					{
                        url: require('../../assets/557a20d3323641a98b153d82eeef96cd.jpg'),
						position: [ 0,  512, 0 ],
						rotation: [ Math.PI / 2, 0, Math.PI ]
					},
					{
                        url: require('../../assets/fa915108d5a5453d9883ef687b7c6918.jpg'),
						position: [ 0, -512, 0 ],
						rotation: [ - Math.PI / 2, 0, Math.PI ]
					},
					{
                        url: require('../../assets/b710f190e434479bb5af497f97f35f59.jpg'),
						position: [ 0, 0,  512 ],
						rotation: [ 0, Math.PI, 0 ]
					},
					{
                        url: require('../../assets/95d90f26aebe43a8b789f8428493b9e0.jpg'),
						position: [ 0, 0, -512 ],
						rotation: [ 0, 0, 0 ]
					}
				];
                // var sides = ['https://oss-qa.roewe.com.cn/lovecar/360Image/RW-783-327/c99cefee8fb840c98084ef78e57092bd.jpg', 
                // 'https://oss-qa.roewe.com.cn/lovecar/360Image/RW-783-327/c795b798f55041788ac3fccea6e2ea27.jpg',
                // 'https://oss-qa.roewe.com.cn/lovecar/360Image/RW-783-327/557a20d3323641a98b153d82eeef96cd.jpg', 
                // 'https://oss-qa.roewe.com.cn/lovecar/360Image/RW-783-327/fa915108d5a5453d9883ef687b7c6918.jpg',
                // 'https://oss-qa.roewe.com.cn/lovecar/360Image/RW-783-327/b710f190e434479bb5af497f97f35f59.jpg',
                //  'https://oss-qa.roewe.com.cn/lovecar/360Image/RW-783-327/95d90f26aebe43a8b789f8428493b9e0.jpg']
				for ( var i = 0; i < sides.length; i ++ ) {

					var side = sides[ i ];

					var element = document.createElement( 'img' );
					element.width = 1026; // 2 pixels extra to close the gap.
					element.src = side.url;

					var object = new THREE.CSS3DObject( element );
					object.position.fromArray( side.position );
					object.rotation.fromArray( side.rotation );
					scene.add( object );

				}

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
                // 获得渲染后元素，可以改变位置，增加样式
                const threeDom = _this.refs.threeDom;
				threeDom.appendChild( renderer.domElement );
				renderer.domElement.style.marginTop = '100px'
				console.log(renderer.domElement)

				//

				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'wheel', onDocumentMouseWheel, false );

				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseDown( event ) {

				event.preventDefault();

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );

			}

			function onDocumentMouseMove( event ) {

				var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
				var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

				lon -= movementX * 0.1;
				lat += movementY * 0.1;

			}

			function onDocumentMouseUp( event ) {

				document.removeEventListener( 'mousemove', onDocumentMouseMove );
				document.removeEventListener( 'mouseup', onDocumentMouseUp );

			}

			function onDocumentMouseWheel( event ) {

				var fov = camera.fov + event.deltaY * 0.05;

				camera.fov = THREE.Math.clamp( fov, 10, 75 );

				camera.updateProjectionMatrix();

			}

			function onDocumentTouchStart( event ) {

				event.preventDefault();

				var touch = event.touches[ 0 ];

				touchX = touch.screenX;
				touchY = touch.screenY;

			}

			function onDocumentTouchMove( event ) {

				event.preventDefault();

				var touch = event.touches[ 0 ];

				lon -= ( touch.screenX - touchX ) * 0.1;
				lat += ( touch.screenY - touchY ) * 0.1;

				touchX = touch.screenX;
				touchY = touch.screenY;

			}

			function animate() {

				requestAnimationFrame( animate );

				// lon +=  0.1;
				lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = THREE.Math.degToRad( 90 - lat );
				theta = THREE.Math.degToRad( lon );

				target.x = Math.sin( phi ) * Math.cos( theta );
				target.y = Math.cos( phi );
				target.z = Math.sin( phi ) * Math.sin( theta );

				camera.lookAt( target );

				renderer.render( scene, camera );

			}
    }
    inputOnChange(){

    }
    submit(){
    }
    
    render(){

        return (
            <div ref="threeDom" >
         
        </div>
        )
    }

}