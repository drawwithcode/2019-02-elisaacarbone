var x = 0;
var y = 0;
var a = 50;

var b = 30;

var colorList1 = ["#A4036F", "#048BA8", "#16DB93", "#EFEA5A", "#F29E4C"];
var colorList2 = ["#30292F", "#413F54", "#006992", "#27476E", "#001D4A"];

var colorList3 = ["#ECE4B7", "#D9DD92", "#EABE7C", "#DD6031", "#F4E04D"];
var colorList4 = ["#00A6ED", "#FFB400", "#CB48B7", "#A594F9", "#7371FC"];
var colorList5 = ["#E56399", "#00798C", "#D95D39", "#FE5F55", "#F75C03"];


function preload() {
  avenir = loadFont('assets/AvenirNextLTPro-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  if (y > windowHeight - 10) {
    frameRate(1.5);
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
  textSize(16);
  text('Move the cursor left and right, and wait...', windowWidth / 2, windowHeight - 62);
  textFont(avenir);
  pop();
};

function shapes() {
  if (y > windowHeight - 10) {
    push();
    background("#FCFF6C");
    noStroke();
    for (var z = 0; z < windowWidth; z += 2 * b) {
      for (var t = 0; t < windowHeight; t += 2 * b) {
        push();
        var index3 = Math.round(random() * (colorList3.length - 1));
        fill(color(colorList3[index3]));
        quad(b + z, 0 + t, 2 * b + z, b + t, b + z, 2 * b + t, 0 + z, b + t);
        pop();

        push();
        var index4 = Math.round(random() * (colorList4.length - 1));
        fill(color(colorList4[index4]));
        quad(b + z, 0 + t, 1.5 * b + z, 0.5 * b + t, b + z, b + t, 0.5 * b + z, 0.5 * b + t);
        pop();

        push();
        var index5 = Math.round(random() * (colorList5.length - 1));
        fill(color(colorList5[index5]));
        ellipse(z, t, 15);
        ellipse(z + 30, t, 7);
        ellipse(z, t + 30, 7);
        pop();
      }
    }
  }
  pop();
}

function lines() {

  push();

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
    ellipse(x + a, y + a, 5);
  } else {
    line(x, y + a, x + a, y);
  }

  x = x + 10;
  if (x > windowWidth) {
    x = 0;
    y = y + a;
  }

  pop();
}
