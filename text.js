var text = [];
var textBuilder;
var cssTextarea = document.querySelector(".text")

function addText(message) {
    if (text.length < 50) {
        text.unshift(message);
    }
    else {
        text.unshift(message);
        text.pop();
    }
    textBuilder = "";
    for (i = 0; i < text.length; i++){
        textBuilder += text[i] + "<br/>";
    }
    cssTextarea.innerHTML = textBuilder;
}

function debugText() {
    for (i = 0; i <= 20; i++){
        addText("Hejka " + i);
    }
}