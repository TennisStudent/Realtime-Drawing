noseX = 0;
noseY = 0;
difference = 0;
LeftWristX = 0;
RightWristX = 0;

function setup(){
    canvas = createCanvas(550, 450);
    canvas.position(610, 150);
    video = createCapture(VIDEO);
    video.size(400, 300);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw()
{
    background("#68cbfe");
    fill("#02C39A");
    stroke("#02C39A");
    square(noseX, noseY, difference);
    document.getElementById("width_or_height").innerHTML = "The width and height of the square is = " + difference;
}
function modelLoaded()
{
    console.log("Posenet is initialized!")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("NoseX " + noseX + "NoseY " + noseY);
    }
}
