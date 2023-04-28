var div= document.getElementById("loadingText");
var animationStopped = false;
//set variables
var  crnResponse = localStorage.getItem('crnResponse');
var  timesAnimationRuns = localStorage.getItem('timesAnimationRuns');
if (crnResponse === null){
    crnResponse = 0;
    localStorage.setItem('crnResponse', crnResponse);
}
if (timesAnimationRuns === null){
    timesAnimationRuns = 10;
    localStorage.setItem('timesAnimationRuns', timesAnimationRuns);
}
//
var crnResponse = localStorage.getItem('crnResponse');
var timesAnimationRuns = localStorage.getItem('timesAnimationRuns');
crnResponse = parseInt(crnResponse);
timesAnimationRuns = parseInt(timesAnimationRuns);

var responseDiv = document.getElementById("currentResponseText");
responseDiv.innerHTML = "Current response time: " + crnResponse + "x";
checkMax();

document.getElementById("menubtn").addEventListener("click", function(){
    if (crnResponse <= 8){
        crnResponse = 11 - timesAnimationRuns;
        timesAnimationRuns--
        localStorage.setItem('timesAnimationRuns', timesAnimationRuns);
        localStorage.setItem('crnResponse', crnResponse);

        responseDiv.innerHTML = "Current response time: " + crnResponse + "x";
    }
    else{
        checkMax();
    }

});

function checkMax() {
    if(crnResponse >= 9){
        var div = document.getElementById("currentResponseText");
        div.innerHTML = "Current response time: <span style='color: #ff5e12;'>max</span>";
        btn = document.getElementById("menubtn");
        btn.innerHTML = "Cannot by more Time";
        //set different active color
        btn.style.setProperty('--btnActivebg', '#ff000099');
    }
}

function setTime(){
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes().toString().padStart(2, '0');
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
      if (counter === timesAnimationRuns) {
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
