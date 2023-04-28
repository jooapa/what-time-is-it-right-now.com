document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
        } else {
            /* left swipe */
        }                       
    } else {
        var div = document.getElementById("menu");
        if ( yDiff > 1 ) {
            /* down swipe */ 
            console.log("Swipe")
            div.classList.remove("menuContainClosed");
            div.classList.remove("menuContainClose");
            div.classList.add("menuContainOpen");
        } else { 
            /* up swipe */
            div.classList.remove("menuContainClosed");
            div.classList.remove("menuContainOpen");
            div.classList.add("menuContainClose");
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};