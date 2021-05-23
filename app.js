var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json"

function getTranslateURL(input){
    return serverURL + "?" + "text= " + input
}


function errorHandler(){
    console.log("error occured ", error)
};

function clickHandler(){
    
    
    outputDiv.innerText = "aaajsss" + txtInput.value
    var inputText = txtInput.value
    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;

})
    .catch(errorHandler);
};
   



btnTranslate.addEventListener("click", clickHandler)