let cards = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"];
      cards.forEach((id) => {
        let card = document.getElementById(id);
        let detail = document.getElementById("detail");
        let close = document.getElementById("close");
        card.addEventListener("click", () => {
          detail.classList.add("show");
        });
        close.addEventListener("click",()=>{
          detail.classList.remove("show")
        })
      });
      

      import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
      //Import the THREE.js library
      import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
      // To allow for the camera to move around the scene
      import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
      // To allow for importing the .gltf file
      import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

      const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        slidesPerView: 3,
        autoplay: {
          delay: 3000, // Delay between transitions (3000ms = 3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interactions
        },
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      // Step 1: Create the scene
      let canvas = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"];
      canvas.forEach((id) => {
        // Step 1: Set up the scene
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(335, 400); // Set size to half of the window
        document.getElementById(id).appendChild(renderer.domElement);

        // Step 2: Create a cube geometry and material
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff }); // Random color
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Step 3: Set the camera position
        camera.position.z = 5;

        // Step 4: Create the animation loop
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Resize event to adjust renderer size
        window.addEventListener('resize', function () {
            let width = window.innerWidth / 2;
            let height = window.innerHeight / 2;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });
      });