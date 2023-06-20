status="";

function setup(){
    canvas=createCanvas(640,420)
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status : Detecting Objects";
}

function draw(){
    if (status != "") {
        objectdetector.detect(img, gotresult);
        for(i=0; i < objects.length;i++){
            document.getElementById("status").innerHTML="status : object detected";
            document.getElementById("number").innerHTML=objects.length;
            fill("red");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+ " " +percent+ "%" ,objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectdetector.detect(img, gotresult);
}


function gotresult(error,result){
    if (error) {
        console.log(error);
    }
    console.log(result)
}