function calcAngle(x, y) {
    return Math.atan2(y, x);
  }
  
  function setup() {
    createCanvas(800, 800);
  }
  
  let angle;
  let bullets = [];
  
  function draw() {  
    drawCannon();
    updateBullets();
  }
  
  function drawCannon() {
    push()
    var posX = width  / 2;
    var posY = height / 2;
    background(220);
    
    angle = calcAngle(mouseX - posX, mouseY - posY);
    
    translate(posX, posY);
    rotate(angle);
  
    strokeWeight(3);
    fill(193, 154, 107);
    rect(15, -15, 50, 30);
  
    fill(168, 169, 173);
    ellipse(0, 0, 50, 50);
    pop();
  }
  
  function mouseClicked() {
    fire();
  }
  
  function fire() {
    let thisBullet = {
      x: width/2 + cos(angle) * 62,
      y: height/2 + sin(angle) * 62,
      radius: 10,
      angle: angle,
      speed: 10
    };
    bullets.push(thisBullet);
  }