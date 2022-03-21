function setup(){
video = createCapture(VIDEO);
video.size(500,500);
canvas = createCanvas(550,550);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}
function draw(){
    document.getElementById("Size").innerHTML="Width and height of the square will be = "+ difference +"px";
    background("#ff5050");
    fill('#585c57');
    stroke('#585c57');
    square(nosex,nosey,difference);
    }

function modelloaded(){
console.log("Posenet is loaded")
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+nosex+"nosey= "+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference = floor(leftwristx-rightwristx);
        console.log("leftwristx="+leftwristx+" rightwristx="+rightwristx+"difference="+difference);
    } 
}
