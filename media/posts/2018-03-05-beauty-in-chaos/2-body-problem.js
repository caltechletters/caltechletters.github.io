var canvas = document.getElementById('2-body-problem');
var ctx = canvas.getContext('2d');
canvas.width = document.getElementsByClassName('c-content')[0].clientWidth;
canvas.height = 400;

var x = 0;
var y = 0;

ctx.beginPath();

step()

function step() {
    window.requestAnimationFrame(step)
    old_width = canvas.width
    canvas.width = document.getElementsByClassName('c-content')[0].clientWidth;
    if(canvas.width != old_width) { reset() }
    
    x+=1;
    y+=1;
    render();
}

function render() {
    
    ctx.moveTo(x, y);
    ctx.lineTo(x+2, y+2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

