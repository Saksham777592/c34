class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 1,
            'friction': 1,
            'density': 0.07
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        fill("white")
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}