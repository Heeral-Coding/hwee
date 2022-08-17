prediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vj6dRzoOm/model.json',modelLoaded);

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function modelLoaded() {
    console.log('Model Loaded!');
  }
  
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "The prediction is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(Speak_data);
    synth.speak(utterThis);
}

function gotResult(error, gotResult) {
    if (error) {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label =="peace") {
            document.getElementById("update_emoji").innerHTML = "&#9995;";
        }
        if(results[0].label =="ok") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label =="heart") {
            document.getElementById("update_emoji").innerHTML = "&#10084;";
        }
        if(results[0].label =="good") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label =="fox") {
            document.getElementById("update_emoji").innerHTML = "&#129304;";
        }
    }
}