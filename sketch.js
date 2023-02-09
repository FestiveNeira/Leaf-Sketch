// Creates and sets the leaf1 variable, as well as changing the angle mode for easier calculation.
var leaf1;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  leaf1 = new leaf();
}
// Runs and draws the Elm leaf.
function draw() {
  background(131, 68, 104);
  fill(200, 150, 50);
  leaf1.drawleaf();
  leaf1.drawveins();
}
// Creates the leaf class with methods to draw the base leaf and it's veins.
class leaf {
  // Generates base data needed for the leaf class.
  constructor() {
    this.x = 0;
    this.y = 0;
    this.points = [];
    this.points2 = [];
    for (var i = 0; i < 9; i++) {
      this.points[this.points.length] = [
        sin(60 + i * 10) / 2,
        cos(60 + i * 10) / 2,
      ];
    }
    for (var o = 0; o < 10; o++) {
      this.points2[this.points2.length] = [
        sin(55 + o * 10) / 2,
        cos(55 + o * 10) / 2,
      ];
    }
  }
  // The drawleaf method draws the shape of the leaf itself minus the veins and stem.
  drawleaf() {
    var d = cos(290) - cos(250);
    var diff = 0.05;
    push();
    strokeWeight(0.005);
    translate(200, 200);
    rotate(35);
    scale(200, 300);
    noStroke();
    // Draw the base leaf shape.
    arc(0 - d / 4, 0, 1, 1, 290, 70, OPEN);
    arc(0 + d / 4, 0, 1, 1, 110, 250, OPEN);
    stroke(160, 80, 15);
    arc(0 - d / 4, 0, 1, 1, 35, 70, OPEN);
    arc(0 + d / 4, 0, 1, 1, 110, 145, OPEN);
    // Draw the 'spikes' around the leaf.
    noStroke();
    for (var i = 0; i < this.points.length; i++) {
      triangle(
        this.points[i][0] - d / 4 + diff,
        this.points[i][1] - diff / 2,
        this.points2[i][0] - d / 4,
        this.points2[i][1],
        this.points2[i + 1][0] - d / 4,
        this.points2[i + 1][1]
      );
      triangle(
        -this.points[i][0] + d / 4 - diff,
        this.points[i][1] - diff / 2,
        -this.points2[i][0] + d / 4,
        this.points2[i][1],
        -this.points2[i + 1][0] + d / 4,
        this.points2[i + 1][1]
      );
    }
    triangle(
      0,
      -0.5,
      this.points[8][0] - d / 4,
      this.points[8][1],
      -this.points[8][0] + d / 4,
      this.points[8][1]
    );
    stroke(160, 80, 15);
    // Draws the outline of the leaf.
    for (var o = 0; o < this.points.length; o++) {
      line(
        this.points[o][0] - d / 4 + diff,
        this.points[o][1] - diff / 2,
        this.points2[o][0] - d / 4,
        this.points2[o][1]
      );
      line(
        this.points[o][0] - d / 4 + diff,
        this.points[o][1] - diff / 2,
        this.points2[o + 1][0] - d / 4,
        this.points2[o + 1][1]
      );
      line(
        -this.points[o][0] + d / 4 - diff,
        this.points[o][1] - diff / 2,
        -this.points2[o][0] + d / 4,
        this.points2[o][1]
      );
      line(
        -this.points[o][0] + d / 4 - diff,
        this.points[o][1] - diff / 2,
        -this.points2[o + 1][0] + d / 4,
        this.points2[o + 1][1]
      );
    }
    line(0, -0.5, this.points[8][0] - d / 4 - 0.035, this.points[8][1] - 0.027);
    line(
      0,
      -0.5,
      -this.points[8][0] + d / 4 + 0.035,
      this.points[8][1] - 0.027
    );
    pop();
  }
  // The drawveins method draws the veins and stem of the leaf on top of the base leaf shape.
  drawveins() {
    var d = cos(290) - cos(250);
    push();
    strokeWeight(0.005);
    stroke(160, 80, 15);
    translate(200, 200);
    rotate(35);
    scale(200, 300);
    var xt, yt;
    var diff = 0.06;
    // Draws the leaf veins from data stored in the points array.
    for (var i = 0; i < this.points.length; i++) {
      push();
      xt = this.points[i][0] - d / 4;
      yt = this.points[i][1];
      while (xt > 0) {
        xt -= 0.01;
        yt += 0.005;
      }
      strokeWeight(0.0075);
      line(
        this.points[i][0] - d / 4 + diff,
        this.points[i][1] - diff / 2,
        xt,
        yt
      );
      line(
        -this.points[i][0] + d / 4 - diff,
        this.points[i][1] - diff / 2,
        xt,
        yt
      );
      pop();
    }
    // Draws the stem.
    scale(1, 10);
    stroke(130, 60, 10);
    strokeWeight(0.05);
    line(0, 0.04, 0, 0.025);
    strokeWeight(0.04);
    line(0, 0.025, 0, 0);
    strokeWeight(0.02);
    line(0, 0, 0, -0.025);
    strokeWeight(0.01);
    line(0, -0.025, 0, -0.05);
  }
}
