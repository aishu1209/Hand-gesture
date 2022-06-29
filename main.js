Webcam.set({

    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){

        document.getElementById("result_image").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PEJTlOURu/model.json');