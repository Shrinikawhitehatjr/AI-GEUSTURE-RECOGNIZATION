function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    posenet = ml5.posenet(video, modeLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    background('#969A97;')

    document.getElementById("square_side").innerHTML = "Width And Height of a square will be = "+ difference +"px";
    Fill('#F90093;')
    stroke('#F90093;')
    square(noseX, noseY, difference);
}

function modeLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
     if(results.length > 0);
     {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX + "Nose y = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        difference = leftWristX - leftWrist;
        difference = floor(leftWristX - leftWristX);
        console.log("LeftWristX = " + leftWristX + "rightWristX = "+ rightWristX + " difference = "+ difference);

     }
}
noseX = 0;
noseY = 0;
different = 0;
rightWristX = 0;
leftWristY = 0;