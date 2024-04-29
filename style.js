function drumCheck(key){
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
            break;
        case "s":
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
            break;
        case "d":
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
            break;
        case "j":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
            break;
        case "k":
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
            break;
        case "l":
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
            break;
    
    
        default:
            break;
    }
}
function addMusicOnClick() {
    var path=document.querySelectorAll(".drum");
for(var i=0;i<path.length;i++){
    path[i].addEventListener("click",function(){
        var buttonListener=this.innerHTML;
        drumCheck(buttonListener);
        buttonAnimation(buttonListener);


});
} 
}
function addMusicOnKey() {
    document.addEventListener("keydown",function(event){
        drumCheck(event.key);
        buttonAnimation(event.key);
    })
}

function buttonAnimation(key) {
    var animation=document.querySelector("."+key);
    animation.classList.add("pressed");
    setTimeout(function() {
        animation.classList.remove("pressed");
    }, 100);
}
addMusicOnClick();
addMusicOnKey();