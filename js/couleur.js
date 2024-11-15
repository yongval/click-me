// ** DOM READY
document.addEventListener('DOMContentLoaded', function() {
  console.log('dom ready');

  // CLICK  
    document.addEventListener("click", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    //  
    document.getElementById("stop").style.visibility = "visible";
    document.getElementById("click-it").style.visibility = "hidden";
    //  
    const animation = document.createElement("div");
    animation.classList.add("ripple");
    //
    let nbr =  Math.round( (Math.random() * 6) + 1 );
    animation.classList.add("r"+nbr);
    
    animation.style.top = y + "px";
    animation.style.left = x + "px";
    document.body.appendChild(animation);
  });

    // STOP 
    const stop = document.getElementById('stop');
    stop.addEventListener('click', (e) => {
      e.stopPropagation();
      //
      let state = stop.dataset.state;
      //
      playPauseAnims(stop, state);
    });

    document.addEventListener("keydown", (e) => {
      if (e.isComposing || e.key === " ") {
        e.preventDefault(); 
        let state = stop.dataset.state;
        //
        playPauseAnims(stop, state);
      }
    });
    
});


// functions
function playPauseAnims(stop, state){
    //
    let addedRipples = document.querySelectorAll('.ripple');
    addedRipples.forEach(ripple => {
      if(state == 'running'){
        ripple.style.animationPlayState = 'paused';
      } else {
        ripple.style.animationPlayState = 'running';
      }
    });
    //
    if(state == 'running'){
      stop.dataset.state = 'paused';
    } else {
      stop.dataset.state = 'running';
    }
    //
    if (stop.textContent == "PLAY") {
      stop.textContent = "STOP";
    } else {
      stop.textContent = "PLAY";
    }
}



