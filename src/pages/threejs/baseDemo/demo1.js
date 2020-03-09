import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { CSS2DObject,CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
// const THREE = window.THREE;


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
          canvasId:''
        }
    }

    componentDidMount(){
        const threeDom = this.refs.threeDom;
        var MOON_RADIUS = 0.27;
            /**
         * 创建场景对象Scene
         */
        var scene = new THREE.Scene();
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();

        var AxisHelper = THREE.AxisHelper(1000);

         scene.add(AxisHelper)
        /**
         * 创建网格模型
         */
        var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
        var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff
        }); //材质对象Material
        var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

        console.log(mesh)
        scene.add(mesh); //网格模型添加到场景中

        
        /**
         * 光源设置
         */
        //点光源
        var point = new THREE.PointLight(0xffffff);
        point.position.set(400, 200, 300); //点光源位置
        scene.add(point); //点光源添加到场景中
        //环境光
        var ambient = new THREE.AmbientLight(0x444444);
        scene.add(ambient);
        /**
         * 相机设置
         */
        var width = window.innerWidth; //窗口宽度
        var height = window.innerHeight; //窗口高度
        var k = width / height; //窗口宽高比
        var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
        //创建相机对象
        var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
        camera.position.set(200, 300, 200); //设置相机位置
        camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
        /**
         * 创建渲染器对象
         */
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);//设置渲染区域尺寸
        renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
        threeDom.appendChild(renderer.domElement); //body元素中插入canvas对象

        
        mesh.add(createdLabel('1',100));
        mesh.add(createdLabel('2',200));

        labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(width, height);
        labelRenderer.domElement.style.position = "absolute";
        labelRenderer.domElement.style.top = 0;
        threeDom.appendChild(labelRenderer.domElement);
     
        function createdLabel(text,zindex){
            var moonDiv = document.createElement("div");
            moonDiv.className = "label";
            moonDiv.textContent = text;
            moonDiv.style.marginTop = "-1em";
            moonDiv.style.border = 'solid #333 1px'
            var moonLabel = new CSS2DObject(moonDiv);
            moonLabel.position.set(0, 0, zindex);

            return moonLabel
        }

        // 渲染函数
        function render() {
      
   
           
            labelRenderer.render(scene, camera)
            renderer.render(scene,camera);//执行渲染操作
            // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
            requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧

        }
            
        render();
        
        var objects=[],labelRenderer ;
         
        //监听全局点击事件,通过ray检测选中哪一个object
        threeDom.addEventListener("mousedown", function(event)  {
            console.log(scene.children)
        // 　　event.preventDefault();
        　mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
        　　mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
        
        　　raycaster.setFromCamera(mouse, camera);
        　　scene.children.forEach(child => {
                if (child instanceof THREE.Mesh) {//根据需求判断哪些加入objects,也可以在生成object的时候push进objects
        　　　　　　objects.push(child)
        　　　　}
             })
            var intersects = raycaster.intersectObjects(objects);
            if (intersects.length > 0) {
            　　console.log(intersects[0].object.uuid)
                console.log(mesh.uuid)
                // 添加新几何体
                addmesh();
                
            }
        }, false)

        var yIndex = 1;
        function addmesh(){
            yIndex++
            // 圆柱  参数：圆柱面顶部、底部直径50,50   高度100  圆周分段数
            var geometry1 = new THREE.CylinderGeometry( 50, 50, 100, 25 );
            geometry1.translate(0, yIndex*100, 100);
            var material1 = new THREE.MeshLambertMaterial({
                color: 0x0000ff
            }); //材质对象Material
            var mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh

            　　scene.add(mesh1)
        }
    
        var controls = new OrbitControls(camera,renderer.domElement);//创建控件对象
        // 监听鼠标事件，触发渲染函数，更新canvas画布渲染效果
        controls.addEventListener('change', render);

        var controls1 = new OrbitControls(camera,labelRenderer.domElement);
        controls.addEventListener('change', render);
    }

    render(){
        return (
            <div ref="threeDom">
            </div>
        )
    }
}