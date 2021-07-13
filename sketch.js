//Create variables here
var database,firebase;
var dog;
var foodS;
var foodStock;
function preload()
{
	//load images here
  
}

function setup() {
	createCanvas(500, 500);
 
  dog = createSprite(120,120,20,20);

foodStock=database.Ref('Food');
foodStock.on("value",readstock);
 


}


function draw() {  
  text(mouseX+','+mouseY,30,45);
  background(46,139,87);

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogHappy);
}
 text(foodStock);
 textSize(100);
 text(pressUP_ARROWkeyToFoodDragoMilk);
  drawSprites();
  //add styles here
 
}

 function readstock(data){
   foodS = data.val();
 }

 function writeStock(x){
   database.ref('/').update({
     food:x
   })
 }

