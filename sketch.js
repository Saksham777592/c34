const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5;
var ball;
var rope;

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 500, 1200, 20);

    box1 = new Box(600, 50, 50, 50);
    box2 = new Box(600, 100, 50, 50);
    box3 = new Box(600, 150, 50, 50);
    box4 = new Box(600, 200, 50, 50);
    box5 = new Box(600, 250, 50, 50);

    ball = new Ball(800, 50, 40);

    rope = new Rope(ball.body, {x: 700, y: 150});
}

function draw() {
    background("black");
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ball.display();

    rope.display();
}