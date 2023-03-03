function preload(){

}

function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
pose_net=ml5.poseNet(video,modelLoaded);
pose_net.on("pose",gotPoses);
}

function draw(){
background("white");
}

function modelLoaded(){
console.log("Model is Loaded");
}

function gotPoses(error,results){
if(error){
console.log(error);
}
else{
if(results.length>0){
console.log(results);
}
}
}