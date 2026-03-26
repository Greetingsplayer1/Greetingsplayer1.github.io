let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

//fill in code for canvas1 here
for (let x = 25; x <=725; x+=100) {
    for (y=0; y<=700; y+=100){
        ctx.fillRect(x, y, 50, 20)
    }
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

//fill in code for canvas2 here
for (let x = 25; x <=725; x+=100) {
    for (y=100; y<x; y+=100){
        ctx.fillRect(y, x, 50, 20)
    }
}

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

//fill in code for canvas3 here
for (let x = 0; x <=725; x+=100) {
    for (y=100; y<x; y+=100){
        ctx.fillRect(y, x, 50, 20)
    }
}

for (let x = 0; x <=725; x+=100) {
    for (y=0; y<x; y+=100){
        ctx.fillRect(x, y, 50, 20)
    }
}

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here
for (let x = 0; x <=725; x+=200) {
    for (y=0; y<=700; y+=200){
        ctx.fillRect(x, y, 100, 100)
        ctx.fillRect(x-100, y-100, 100, 100)
    }
}