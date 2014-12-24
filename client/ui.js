//Create a stage by getting a reference to the canvas
stage = new createjs.Stage("game");
//Create a Shape DisplayObject.
circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 20);
//Set position of Shape instance.
circle.x = circle.y = 50;
//Add Shape instance to stage display list.
stage.addChild(circle);
//Update stage will render next frame
stage.update();


circle.addEventListener("click", function (event) {
    console.log("clicked");
    circle.x++;
    stage.update();
});