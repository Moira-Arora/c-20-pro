var sun
var mer
var venus 
var mars
var earth
var jup
var sat
var ura
var nep

function setup() {
  createCanvas(1200,2000);

 
  sun = createSprite(200, 600, 50, 50);
  mer =  createSprite (300,600,30,40);
  venus = createSprite (400,600,30,40);
  mars = createSprite (500,600,30,40);
  earth = createSprite (600,600,30,40);
  jup = createSprite (700,600,30,40);
  sat = createSprite (800,600,30,40);
  ura = createSprite (900,600,30,40);
 nep = createSprite (1000,600,30,40);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}