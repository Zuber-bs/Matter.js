const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ball, ground;

function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    var groundOptions = {isStatic: true};
    ground = Bodies.rectangle(0, 380, 400, 20, groundOptions);
    World.add(world, ground);
    console.log(ground);

    ball = Bodies.circle(200, 100, 50);
    World.add(world, ball);
}

function draw() {
    background(100, 200, 255);
    Engine.update(engine);
    rect(ground.position.x, ground.position.y, 400, 20);

    ellipse(ball.position.x, ball.position.y, 50, 50);
}