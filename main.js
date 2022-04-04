prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
   png_quality:90
});


camera = document.getElementById("camera");
Webcam.attach('#camera')

function takesnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cHjVSmAqb/model.json',modelloded);

function modelloded(){
    console.log|('model.loaded');
}
function speech(){
var Synth = window.speechSynthesis;
speak_data_1 = "the first prediction is" + prediction1;
speak_data_2 = "and the second prediction is" + prediction2;
 var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_dat_2);
 Synth.speak(utterThis);
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);

}

function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("rse").innerHTML=result[0].label;
        document.getElementById("rse2").innerhtml=result[1].label;
        prediction1=result[0].label;
        prediction2=result[1].label;

        speak();
        if(result[0].label=="victory"){
            document.getElementById("update_emoji").innerHTML="<img src='victory.jpg'>";

        }
        if(result[0].label=="success"){
            document.getElementById("update_emoji").innerHTML="<img src='succsess.jpg'>";
            
        }
        if(result[0].label=="super"){
            document.getElementById("update_emoji").innerHTML="<img src='123.jpeg'>";
            
        }

        if(result[1].label=="victory"){
            document.getElementById("update_emoji2").innerHTML="<img src='victory.jpg'>";

        }
        if(result[1].label=="success"){
            document.getElementById("update_emoji2").innerHTML="<img src='succsess.jpg'>";
            
        }
        if(result[1].label=="super"){
            document.getElementById("update_emoji2").innerHTML="<img src='123.jpeg'>";
            
        }

    }

    }

