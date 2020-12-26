class Ball {
    constructor(x, y, r) {
        var options = {
            'density': 1,
            'frictionAir': 0.007,
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;

        World.add(world, this.body);
    } 
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        ellipseMode(CENTER);
        fill(155, 191, 191);
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}