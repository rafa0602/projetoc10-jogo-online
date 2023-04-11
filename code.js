var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5ef8846d-0d10-412a-a519-15403005fc93","0ecf3f9d-ed42-4046-b204-73fb7b63af1c","fc9da228-af15-4e24-a0c7-b7fec01e743f","63fae4b4-582f-4d18-8557-b52f6277efa3","21f3b379-a186-468b-b0e8-b3d7e94ae6d0"],"propsByKey":{"5ef8846d-0d10-412a-a519-15403005fc93":{"name":"boy","sourceUrl":"assets/api/v1/animation-library/gamelab/chTNyK13Clmbq3LGcBghLAPfPh.hOoHQ/category_people/blue_shirt_hand_up4.png","frameSize":{"x":170,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"chTNyK13Clmbq3LGcBghLAPfPh.hOoHQ","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/chTNyK13Clmbq3LGcBghLAPfPh.hOoHQ/category_people/blue_shirt_hand_up4.png"},"0ecf3f9d-ed42-4046-b204-73fb7b63af1c":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png","frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":2,"version":"wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png"},"fc9da228-af15-4e24-a0c7-b7fec01e743f":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/qFxFzoEjKWB45_xRsxiMMCyq5ersP3RG/category_stickers/sticker_26.png","frameSize":{"x":286,"y":246},"frameCount":1,"looping":true,"frameDelay":2,"version":"qFxFzoEjKWB45_xRsxiMMCyq5ersP3RG","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":286,"y":246},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qFxFzoEjKWB45_xRsxiMMCyq5ersP3RG/category_stickers/sticker_26.png"},"63fae4b4-582f-4d18-8557-b52f6277efa3":{"name":"girl","sourceUrl":"assets/api/v1/animation-library/gamelab/6RErheXohDYDqsju4kZuQxK7OYey6QJn/category_germs/gameplaywacky_04.png","frameSize":{"x":391,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"6RErheXohDYDqsju4kZuQxK7OYey6QJn","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6RErheXohDYDqsju4kZuQxK7OYey6QJn/category_germs/gameplaywacky_04.png"},"21f3b379-a186-468b-b0e8-b3d7e94ae6d0":{"name":"virus","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"}}};
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

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car1.velocityY=+8;
  car3.velocityY=-8;
  car4.velocityY=-8;
  car2.velocityY=+8;
  
sam.setAnimation("boy");
 sam.scale=0.1 
car1.setAnimation("car");
car1.scale=0.1 
car2.setAnimation("car2");
 car2.scale=0.1 
car3.setAnimation("girl");
car3.scale=0.1
car4.setAnimation("virus");
car4.scale=0.1
//adicione velocidade para fazer o carro se mover.

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  if (keyDown("right")) {
   sam.x = sam.x+2  
   
  }
  if (keyDown("left")) {
   sam.x = sam.x-2  
   
  }
  
  if(sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4)){
       sam.x=20;
       sam.y=190;
  life=life+1
    
  }
// crie a função rebater, para fazer o carro rebater nos limites
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  
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
