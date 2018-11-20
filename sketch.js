var value = 0;

var myImage1;
var myImage2;
var mainText = 'Hey, this is Charlie!'
var mainText2 = 'Turn your device around to discover his main moods!'

function preload() {
  myImage1 = loadImage("./assets/play.svg");
  myImage2 = loadImage("./assets/sleep.svg");
  myImage3 = loadImage("./assets/eat.svg");
  myImage4 = loadImage("./assets/sad.svg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  textFont('Roboto');
  imageMode(CENTER);

  setShakeThreshold(35);

 background("#00e6ac");

 image(myImage1, width/2, height/2, myImage1.width/2, myImage1.height/2);

}

function draw() {
fill(255);
textAlign(CENTER);
textSize(30);
text(mainText, width/2, height/6);
text(mainText2, width/2, height/6 + 40);
}

function deviceTurned() {
  if(turnAxis === 'X') {
    background('#4d79ff');
    image(myImage2, width/2, height/2 + 100, myImage2.width/2, myImage2.height/2);
  } else if(turnAxis === 'Z') {
    background('#ff9933');
    image(myImage3, width/2, height/2 + 100, myImage2.width/2, myImage2.height/2);
  } else if(turnAxis === 'Y') {
    background('#8585ad');
    image(myImage4, width/2, height/2 + 100, myImage2.width/2, myImage2.height/2);
  }
}
