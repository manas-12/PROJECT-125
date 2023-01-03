left_wrist_x = 0;
right_wrist_x = 0;
left_wrist_y = 0;
right_wrist_y = 0;
difference = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)



    function modelLoaded() {
        console.log('PoseNet Is Initialized!');
    }
}
function draw() {
    background('#6C91C2');
    textSize(10);
    fill('#FFE787');
    text('Manas', 50, 400);
    document.getElementById("square_side").innerHTML = "Font Size of the text will be = " + difference +"px";
}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }

   if(results.length > 0)
   {
    console.log(results);

    left_wrist_x = results[0].pose.leftWrist.x;
    right_wrist_x = results[0].pose.rightWrist.x;
    difference = floor(left_wrist_x - right_wrist_x);

    console.log("rightwrist_x = " +results[0].pose.rightWrist.x+ "rightwrist_y = " +results[0].pose.rightWrist.y);
    console.log("leftwrist_x = " +results[0].pose.rightWrist.x+ "leftwrist_y = " +results[0].pose.rightWrist.y);

    console.log("leftWristX  = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
   }
}