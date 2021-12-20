
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
color="black";
width_of_line=1;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
console.log("my_touchmove");
current_position_of_touchx=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_touchy=e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_touchx,current_position_of_touchy);
ctx.stroke();

last_position_of_x=current_position_of_touchx;
last_position_of_y=current_position_of_touchy;
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseLeave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}