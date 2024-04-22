let songLength= document.getElementById("length")
let song= document.getElementById("song")
let controlIcon= document.getElementById("controlIcon")

song.onloadedmetadata= function(){
    songLength.max= song.duration;
    songLength.value= song.currentTime;
   
}
 function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause")
        controlIcon.classList.add("fa-play")
    }else{
        song.play();
        controlIcon.classList.remove("fa-play")
        controlIcon.classList.add("fa-pause")
    }
 }

 if(song.play()){
    setInterval(()=>{
        songLength.value= song.currentTime;
    },500)
 }

 songLength.onchange= function(){
    song.play();
    song.currentTime= songLength.value;
    controlIcon.classList.remove("fa-play")
    controlIcon.classList.add("fa-pause")
 }

