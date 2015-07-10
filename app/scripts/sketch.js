// sketch.js
/*jshint newcap: false */

'use strict';

const p5 = require('p5');
const $ = require('jquery');

let t = 0;
let bgColor = [206/360*255, 200, 60];
let color = [206/360*255, 200, 20];

function mySketch(s) {

  s.setup = function() {

    // create canvas and put in canvasWrapper
    let $canvasWrapper = $('.canvas-wrapper');

    s.createCanvas(
      $canvasWrapper.innerWidth(),
      $canvasWrapper.innerHeight()
    ).parent($canvasWrapper[0]);

    s.ellipseMode(s.RADIUS);
    s.colorMode(s.HSB);

  };

  s.draw = function() {
    s.background(bgColor);


    for (let i=0; i < s.width; i+= 50) {
      for (let j=0; j < s.height; j += 50) {

        // color
        color[2] = 157 + 50 * Math.sin(19*t + j);
        s.stroke(color);
        s.fill(color);

        let x = i + 10 * Math.sin(13*t + i);
        let y = j + 5 * Math.sin(19*t + j);

        let corner = { 
          x: i + 5 * Math.sin(13*t), 
          y: j + 5 * Math.sin(7*t)
        };

        s.triangle(i,j,x,y,corner.x, corner.y);
      }
    }

    // increment time
    t += 0.01;
  };

  s.windowResized = function() {
    let $canvasWrapper = $('.canvas-wrapper');

    let w = $canvasWrapper.innerWidth();
    let h = $canvasWrapper.height();

    // put in canvasWrapper
    s.resizeCanvas(w,h-3);
  };

}

function init() {
  return new p5(mySketch);
}

module.exports = {
  init
};