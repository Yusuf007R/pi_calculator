var getcanvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
getcanvas.width = 1000
getcanvas.height = 1000
var v1
var v2
var digit = 5
var col = 0
const timestep =10000
class cuadrado {
    constructor(x, y, w, h, s, c, m) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.s = s
        this.c = c
        this.m = m

    }
    drawhimself() {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);

    }

    wall() {
        if (this.x > canvas.width) {
            
            this.s = -this.s
            col++
        }
    }

    bounce(other) {
        let sumM = this.m + other.m;
        let newV = (this.m - other.m) / sumM * this.s;
        newV += (2 * other.m / sumM) * other.s;
        return newV

    }


    collide(other) {
        if (this.x + this.w < other.x || this.x > other.x + other.w) {

        } else {
            const v1 = box1.bounce(box2)
            const v2 = box2.bounce(box1)
            box1.s = v1
            box2.s = v2
            console.log(box2.s)
            col++
            

        }

    }
    animated() {
        this.x = this.x + this.s

    }
}








//new box
const m1 = Math.pow(10000, digit - 1)
const box1 = new cuadrado(200, 0, 50, 50, 5/timestep, 'black', m1);
const box2 = new cuadrado(900, 0, 50, 50, 0, 'purple', 1);







function update() {
    for (let i = 0; i < timestep; i++) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        box1.wall();
        box2.wall();
        box1.collide(box2)   
        box1.animated();
        box2.animated();
    }
    box1.drawhimself();
    box2.drawhimself();
    requestAnimationFrame(update);
    document.getElementById("col").innerText = col;
}
update();
