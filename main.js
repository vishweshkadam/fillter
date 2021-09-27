 
 function perload(){

}
function setup(){
    
   canvas=createCanvas(300,300)
   canvas.center()
   video=createCapture(VIDEO);
  video.size(300,300)
  video.hide()

   posenet=ml5.poseNet(video,modelLoad)
posenet.on("pose",gotpose)

}


function modelLoad(){
    console.log("my name is vishwesh")

}
function gotpose(result){
    console.log(result);

}
 function draw(){
     image(video,0,0,300,300)
     
 }