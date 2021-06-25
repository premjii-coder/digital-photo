function preload(){

}
 
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}

function draw(){
    image(video,50,50,300,300);

fill(255,0,0);
stroke(225,0,0);
circle(50,50,75);  

fill(0,255,0);
stroke(0,255,0);
circle(50,350,75);

fill(0,0,255);
stroke(0,0,255);
circle(350,350,75);

fill(255,255,0);
stroke(255,255,0);
circle(350,50,75);

fill(255,0,0);
stroke(255,0,0);
rect(40,50,20,262)

fill(0,255,0);
stroke(0,255,0);
rect(55,336,260,25);

fill(0,0,255);
stroke(0,0,255);
rect(337,85,25,245);

fill(255,255,0);
stroke(255,255,0);
rect(85,33,260,25);
}
function snap(){
    save("digital_photo")
}