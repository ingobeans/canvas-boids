canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

function update() {
  drawRect(ctx, 0, 0, canvas.width, canvas.height, "#ffffff");
  moveBoids();
  drawBoids(ctx);
  drawCircle(ctx, mouse.x, mouse.y, mouseRadius, null, "#00ff00");
  requestAnimationFrame(update);
}

window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  mapWidth = canvas.width;
  mapHeight = canvas.height;
}
resizeCanvas();

createBoids((mapWidth * mapHeight) / 29408);
// create a suitable amount of boids for the screen size
// this will create roughly 70 boids on a 1920x1080 viewport

update();
