var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var deaths = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,122,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(160,255,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(220,122,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(290,255,10,10);
  car4.shapeColor = "red";
  
 
//add the velocity to make the car move.
car1.setVelocity(0,7);
car2.setVelocity(0,-7);
car3.setVelocity(0,7);
car4.setVelocity(0,-7);

function draw() {
   background("white");
   textSize(30);
   fill("black");
   textFont("elephant");
   stroke("red");
   strokeWeight(5);
  text("DEATHS : " + deaths,110,80);
  strokeWeight(3);
  stroke("black");
  fill("lightblue");
  rect(0,120,52,140);
  fill("lightgreen");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Add the condition to make the sam move left and right
if (keyDown("RIGHT_ARROW")) {
  sam.x = sam.x+2;
}
if (keyDown("LEFT_ARROW")) {
  sam.x = sam.x-2;
}
//Add the condition to reduce the life of sam if it touches the car.
if (sam.isTouching(car1)) {
  deaths = deaths + 1;
  sam.x = 20;
  sam.y = 190;
}
if (sam.isTouching(car2)) {
  deaths = deaths + 1;
  sam.x = 20;
  sam.y = 190;
}
if (sam.isTouching(car3)) {
  deaths = deaths + 1;
  sam.x = 20;
  sam.y = 190;
}
if (sam.isTouching(car4)) {
  deaths = deaths + 1;
  sam.x = 20;
  sam.y = 190;
}

if(sam.x > 330 )
{ textSize(40);
  text("YOU WON!",90,340);
}
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
