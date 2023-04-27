var div= document.getElementById("loadingText");
var animationStopped = false;

function setTime(){
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var time = hours + ":" + minutes;

    div.innerHTML = time;
}

function animationText() {
    // text where loading text goes to loading. and then loading.. and then loading... and then loading again.
    var text = ["LOADING", "LOADING.", "LOADING..", "LOADING..."];
    var i = 0;
    var div = document.getElementById("loadingText"); // assuming you have an element with ID "loadingText"
    var counter = 0;
    var intervalId = setInterval(function() {
      div.innerHTML = text[i];
      i = (i + 1) % text.length; // use modulus operator to cycle through array
      counter++;
      if (counter === 9) {
        clearInterval(intervalId);
        startTime();
      }
    }, 700);
}

function startTime() {
    if (div !== null && div.hasAttribute("id")) {
        div.removeAttribute("id");
        div.classList.add("timeText");
        setTime();
    }
    var intervalId = setInterval(function() {
        setTime();
    }, 1000);
}


window.onload = function(){
    animationText();
}
