var x = 0;
var y = 0;
var a = 100;

var b = 40;
var r = 80;

var colorList1 = ["#A4036F", "#048BA8", "#16DB93", "#EFEA5A", "#F29E4C"];
var colorList2 = ["#30292F", "#413F54", "#006992", "#27476E", "#001D4A"];

var colorList3 = ["#069E2D", "#058E3F", "#DDE392", "#6BFFB8", "#E8FCCF"];
var colorList4 = ["#C3E8BD", "#345995", "#3E8914", "#A594F9", "#6EEB83"];
var colorList5 = ["#6EEB83", "#00798C", "#03CEA4", "#0CCE6B", "#7CB518"];


function preload() {
  avenir = loadFont('assets/AvenirNextLTPro-Regular.otf');
  fulbo = loadFont('assets/Fulbo-Argenta.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  if (y > windowHeight - 10) {
    frameRate(2);
  } else {
    frameRate(120);
  }
  lines();
  instructions();
  shapes();
}

function instructions() {
  push();
  textAlign(CENTER, CENTER);
  fill(240);
  textSize(20);
  textFont(avenir);
  text('MOVE THE CURSOR LEFT AND RIGHT, AND WAIT...', windowWidth / 2, windowHeight - 62);
  pop();
};

function shapes() {
  if (y > windowHeight - 40) {
    push();
    translate(r / 2, r / 2);
    background("#263732");
    noStroke();
    for (var z = -b; z < windowWidth + b; z += 2 * b) {
      for (var t = 0; t < windowHeight + b; t += 2 * b) {
        push();
        var index3 = Math.round(random() * (colorList3.length - 1));
        fill(color(colorList3[index3]));
        arc(z + b, t - b, r, r, HALF_PI, PI);
        pop();

        push();
        var index4 = Math.round(random() * (colorList4.length - 1));
        fill(color(colorList4[index4]));
        arc(z - b, t, r, r, PI + HALF_PI, TWO_PI);
        pop();

        push();
        var index5 = Math.round(random() * (colorList5.length - 1));
        fill(color(colorList5[index5]));
        arc(z + b, t, r, r, HALF_PI, PI);
        pop();

      }
    }

    if (mouseIsPressed) {

      push();
      fill("#F45328");
      arc(12 * b, 14 * b, r, r, HALF_PI, PI);
      pop();

      push();
      fill(0);
      arc(12 * b, 15 * b, r, r, PI + HALF_PI, TWO_PI);
      rect(12 * b, 15 * b, r / 2, r / 2)
      pop();

      push();
      fill(255);
      ellipse(12 * b + b / 3, 14 * b + b / 2, 10);
      pop();

    }
  }
  pop();

  if (y > windowHeight - 40) {
    push();
    textAlign(CENTER, CENTER);
    fill("#F45328");
    stroke("#345995");
    strokeWeight(1);
    textSize(32);
    textFont(fulbo);
    text('PRESS TO FIND THE TUCAN', windowWidth / 2, windowHeight - 2.5 * b);
    pop();
  }
}

function lines() {

  push();

  translate(-50, -10);
  rectMode(CENTER);

  var index1 = Math.round(random() * (colorList1.length - 1));
  var index2 = Math.round(random() * (colorList2.length - 1));

  if (mouseX > windowWidth / 2) {
    stroke(color(colorList1[index1]));
    fill(color(colorList1[index1]));
  } else {
    stroke(color(colorList2[index2]));
    fill(color(colorList2[index2]));
  };

  strokeWeight(1);

  if (random(2) < 0.5) {
    line(x, y, x + a, y + a);
    ellipse(x + a, y + a, random() * 10);
  } else {
    line(x, y + a, x + a, y);
  }

  x = x + 10;
  if (x > windowWidth) {
    x = 0;
    y = y + 70;
  }

  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
