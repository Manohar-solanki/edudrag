const courses = [
    { university: "Lovely Professional University", link: "./university_course/Lovely_Professional_University.html" },
    { university: "University B", link: "https://example.com/lpu" },
    { university: "University A", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Bombay", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science", link: "https://example.com/lpu" },
    { university: "University of Delhi", link: "https://example.com/lpu" },
    { university: "Jawaharlal Nehru University", link: "https://example.com/lpu" },
    { university: "Anna University", link: "https://example.com/lpu" , link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Madras", link: "https://example.com/lpu" },
    { university: "University of Mumbai", link: "https://example.com/lpu" },
    { university: "Indian Statistical Institute", link: "https://example.com/lpu" },
    { university: "Tata Institute of Fundamental Research", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Ahmedabad", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Delhi", link: "https://example.com/lpu" },
    { university: "University of Calcutta", link: "https://example.com/lpu" },
    { university: "Banaras Hindu University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Kharagpur", link: "https://example.com/lpu" },
    { university: "University of Madras", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Kanpur", link: "https://example.com/lpu" },
    { university: "University of Pune", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Pune", link: "https://example.com/lpu" },
    { university: "Delhi Technological University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Roorkee", link: "https://example.com/lpu" },
    { university: "University of Hyderabad", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Guwahati", link: "https://example.com/lpu" },
    { university: "Osmania University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Bangalore", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Mohali"},
    { university: "Savitribai Phule Pune University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Indore", link: "https://example.com/lpu" },
    { university: "University of Calicut", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Calcutta", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Mandi", link: "https://example.com/lpu" },
    { university: "University of Allahabad", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Kolkata", link: "https://example.com/lpu" },
    { university: "Visva-Bharati University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology (BHU) Varanasi", link: "https://example.com/lpu" },
    { university: "University of Kerala", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Lucknow", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Jodhpur", link: "https://example.com/lpu" },
    { university: "University of Mysore", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Bhopal", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Patna", link: "https://example.com/lpu" },
    { university: "University of Jammu", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Indore", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Gandhinagar", link: "https://example.com/lpu" },
    { university: "University of Kashmir", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Thiruvananthapuram", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Bhubaneswar", link: "https://example.com/lpu" },
    { university: "University of Lucknow", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Raipur", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Hyderabad", link: "https://example.com/lpu" },
    { university: "University of Rajasthan", link: "https://example.com/lpu" },
    // Add more courses here...
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function search() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCourses = courses.filter(course => {
        return course.university.toLowerCase().includes(searchTerm);
    });

    displayResults(filteredCourses);
}

function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(course => {
            const link = document.createElement('a');
            link.href = `university_${course.university.replace(/\s+/g, '_')}.html`;
            link.textContent = course.university;
            link.classList.add('universityLink');
            searchResults.appendChild(link);
            searchResults.appendChild(document.createElement('br'));
        });
    }
}

searchInput.addEventListener('input', search);









// // Moving Galaxy
// // ---------------------------------------------------------------------------------------------------

//     // Moving Galaxy

//     const canvas = document.createElement('canvas');
//     document.body.appendChild(canvas);
//     const ctx = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars = [];
//     const numStars = 2000;

//     // Generate random stars
//     for (let i = 0; i < numStars; i++) {
//       const x = Math.random() * canvas.width;
//       const y = Math.random() * canvas.height;
//       const radius = Math.random() * 2;
//       stars.push({ x, y, radius });
//     }

//     function drawGalaxy() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
//       for (const star of stars) {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     function animateGalaxy() {
//       drawGalaxy();
//       requestAnimationFrame(animateGalaxy);
//     }

//     animateGalaxy();

//     // Solar System

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Add ambient light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
//     scene.add(ambientLight);

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(0, 1, 0);
//     scene.add(directionalLight);

//     // Load textures
//     const loader = new THREE.TextureLoader();
//     const earthTexture = loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
//     const earthCloudTexture = loader.load('https://threejs.org/examples/textures/planets/earth_clouds_1024.png');

//     // Create sun
//     const sunGeometry = new THREE.SphereGeometry(15, 32, 32);
//     const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//     const sun = new THREE.Mesh(sunGeometry, sunMaterial);
//     scene.add(sun);

//     // Create Earth
//     const earthGeometry = new THREE.SphereGeometry(7, 32, 32);
//     const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
//     const earth = new THREE.Mesh(earthGeometry, earthMaterial);
//     scene.add(earth);

//     // Create Earth clouds
//     const earthCloudMaterial = new THREE.MeshLambertMaterial({
//       map: earthCloudTexture,
//       transparent: true,
//     });
//     const earthCloudGeometry = new THREE.SphereGeometry(7.05, 32, 32);
//     const earthClouds = new THREE.Mesh(earthCloudGeometry, earthCloudMaterial);
//     scene.add(earthClouds);

//     // Render function
//     function render() {
//       requestAnimationFrame(render);

//       // Update planet positions
//       earth.position.x = 30 * Math.cos(Date.now() * 0.0005);
//       earth.position.z = 30 * Math.sin(Date.now() * 0.0005);
//       earthClouds.position.copy(earth.position);

//       // Rotate Earth and clouds
//       earth.rotation.y += 0.01;
//       earthClouds.rotation.y += 0.01;

//       // Rotate sun
//       sun.rotation.y += 0.005;

//       renderer.render(scene, camera);
//     }

//     // Camera settings
//     camera.position.set(0, 50, 200);
//     camera.lookAt(0, 0, 0);

//     // Start rendering
//     render();




    // blender

    (function () {
        'use strict';
        window.addEventListener('load', function () {
          var canvas = document.getElementById('canvas');
      
          if (!canvas || !canvas.getContext) {
            return false;
          }
      
          /********************
            Random Number
          ********************/
      
          function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
      
          /********************
            Var
          ********************/
      
          var ctx = canvas.getContext('2d');
          var X = canvas.width = window.innerWidth;
          var Y = canvas.height = window.innerHeight;
          var mouseX = null;
          var mouseY = null;
          var dist = 80;
          var lessThan = Math.sqrt(dist * dist + dist * dist);
          var mouseDist = 150;
          var shapeNum;
          var shapes = [];
          var ease = 0.3;
          var friction = 0.9;
          var lineWidth = 5;
          X > Y ? shapeNum = X / dist : shapeNum = Y / dist;
      
          if (X < 768) {
            lineWidth = 2;
            dist = 40;
            lessThan = Math.sqrt(dist * dist + dist * dist);
            mouseDist = 50;
            X > Y ? shapeNum = X / dist : shapeNum = Y / dist;
          }
      
          /********************
            Animation
          ********************/
      
          window.requestAnimationFrame =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(cb) {
              setTimeout(cb, 17);
            };
      
          /********************
            Shape
          ********************/
          
          function Shape(ctx, x, y, i) {
            this.ctx = ctx;
            this.init(x, y, i);
          }
          
          Shape.prototype.init = function(x, y, i) {
            this.x = x;
            this.y = y;
            this.xi = x;
            this.yi = y;
            this.i = i;
            this.r = 1;
            this.v = {
              x: 0,
              y: 0
            };
            this.c = rand(0, 360);
          };
      
          Shape.prototype.draw = function() {
            var ctx  = this.ctx;
            ctx.save();
            ctx.fillStyle = 'hsl(' + this.c + ', ' + '80%, 60%)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.restore();
          };
      
          Shape.prototype.mouseDist = function() {
            var x = mouseX - this.x;
            var y = mouseY - this.y;
            var d = x * x + y * y;
            var dist = Math.sqrt(d);
            if (dist < mouseDist) {
              this.v.x = +this.v.x;
              this.v.y = +this.v.y;
              var colAngle = Math.atan2(mouseY - this.y, mouseX - this.x);
              this.v.x = -Math.cos(colAngle) * 5;
              this.v.y = -Math.sin(colAngle) * 5;
              this.x += this.v.x;
              this.y += this.v.y;
            } else if (dist > mouseDist && dist < mouseDist + 10) {
              this.v.x = 0;
              this.v.y = 0;
            } else {
              this.v.x += (this.xi - this.x) * ease;
              this.v.y += (this.yi - this.y) * ease;
              this.v.x *= friction;
              this.v.y *= friction;
              this.x += this.v.x;
              this.y += this.v.y;
            }
          };
      
          Shape.prototype.drawLine = function(i) {
            var j = i;
            for (var i = 0; i < shapes.length; i++) {
              if (j !== i) {
                var x = this.x - shapes[i].x;
                var y = this.y - shapes[i].y;
                var d = x * x + y * y;
                var dist = Math.floor(Math.sqrt(d));
                if (dist <= lessThan) {
                  ctx.save();
                  ctx.lineWidth = lineWidth;
                  ctx.strokeStyle = 'hsl(' + this.c + ', ' + '80%, 60%)';
                  ctx.beginPath();
                  ctx.moveTo(this.x, this.y);
                  ctx.lineTo(shapes[i].x, shapes[i].y);
                  ctx.stroke();
                  ctx.restore();
                }
              }
            }
          };
      
          Shape.prototype.render = function(i) {
            this.drawLine(i);
            if (mouseX !== null) this.mouseDist();
            this.draw();
          };
          
          for (var i = 0; i < shapeNum + 1; i++) {
            for (var j = 0; j < shapeNum + 1; j++) {
              if (j * dist - dist > Y) break;
              var s = new Shape(ctx, i * dist, j * dist, i, j);
              shapes.push(s);
            }
          }
         
          /********************
            Render
          ********************/
          
          function render() {
            ctx.clearRect(0, 0, X, Y);
            for (var i = 0; i < shapes.length; i++) {
              shapes[i].render(i);
            }
            requestAnimationFrame(render);
          }
      
          render();
      
          /********************
            Event
          ********************/
          
          function onResize() {
            X = canvas.width = window.innerWidth;
            Y = canvas.height = window.innerHeight;
            shapes = [];
            if (X < 768) {
              lineWidth = 2;
              dist = 40;
              lessThan = Math.sqrt(dist * dist + dist * dist);
              mouseDist = 50;
              X > Y ? shapeNum = X / dist : shapeNum = Y / dist;
            } else {
              lineWidth = 5;
              dist = 80;
              lessThan = Math.sqrt(dist * dist + dist * dist);
              mouseDist = 150;
              X > Y ? shapeNum = X / dist : shapeNum = Y / dist;
            }
            for (var i = 0; i < shapeNum + 1; i++) {
              for (var j = 0; j < shapeNum + 1; j++) {
                if (j * dist - dist > Y) break;
                var s = new Shape(ctx, i * dist, j * dist, i, j);
                shapes.push(s);
              }
            }
          }
      
          window.addEventListener('resize', function() {
            onResize();
          });
      
          window.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
          }, false);
      
          canvas.addEventListener('touchmove', function(e) {
            var touch = e.targetTouches[0];
            mouseX = touch.pageX;
            mouseY = touch.pageY;
          });
      
        });
        // Author
        console.log('File Name / net.js\nCreated Date / July 11, 2020\nAuthor / Toshiya Marukubo\nTwitter / https://twitter.com/toshiyamarukubo');
      })();
