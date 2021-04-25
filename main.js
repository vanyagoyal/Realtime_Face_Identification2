function preload(){

}

function setup(){
    canvas = createCanvas(300 ,  300);
    canvas.center();
    cam = createCapture(VIDEO);
    cam.hide();
}

function draw(){
    image(cam , 0 , 0 , 300 , 300);
}