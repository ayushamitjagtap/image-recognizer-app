//JS CODE for setting webcam, triggering the webcam
Webcam.set(
    {
        width:350,
        height:300,
        image_format:'png',
     png_quality:90
    }
);

camera=document.getElementById("camera");
 
Webcam.attach( '#camera');
//JS code for taking snapshot
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    }
    
    );
}
// JS code for checking the ml5 version
console.log('ml5 version',ml5.version);

//JS code importing model
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jztaaTfrK/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');

}
//code for check function
function check()
{
    imgg = document.getElementById('capture_image');
    classifier.classify(imgg, gotResult);
}
//code for got rusult
function gotResult (error, results) {
if (error) {
    console.error(error);

}else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML= results[0].label;
    document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(3);
}
}

