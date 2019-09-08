window.onload = function () {
    document.getElementById("decoretext").placeholder = "Sample Item 1 \nSample Item 2";
    document.getElementById("button").onclick = changeFont;
    document.getElementById("checkboxevent").onchange = decoretTextarea;

};

function changeFont() {
    document.getElementById("decoretext").style.fontSize = "24pt";
}

function decoretTextarea() {
    alert("Bling is altered!");
    if(document.getElementById("checkboxevent").checked === true){
        document.getElementById("decoretext").style.fontWeight = "bold";
        document.getElementById("decoretext").style.color = "green";
        document.getElementById("decoretext").style.textDecoration = "underline";
    }
    else{
        document.getElementById("decoretext").style.fontWeight = "normal";
        document.getElementById("decoretext").style.color = onreset;
        document.getElementById("decoretext").style.textDecoration =onreset;
    }

}