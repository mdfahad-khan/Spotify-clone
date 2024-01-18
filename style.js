console.log("welcome to spotify");
//initailize the variable

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBAr= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName :"Salam-e-Ishq", filepath :"songs/1.mp3", coverPath : "covers/1.jpg"},
    {songName :"song 2", filepath :"songs/2.mp3", coverPath : "covers/2.jpg"},
    {songName :"song 3", filepath :"songs/3.mp3", coverPath : "covers/3.jpg"},
    {songName :"Salam-e-", filepath :"songs/4.mp3", coverPath : "covers/4.jpg"},
    {songName :"Salam-e-I", filepath :"songs/5.mp3", coverPath : "covers/5.jpg"},
    {songName :"Salam", filepath :"songs/6.mp3", coverPath : "covers/6.jpg"},
]

songItem.forEach((element, i) =>{   
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =1;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', () =>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBAr.value =  progress;
})
myProgressBAr.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBAr.value*audioElement.duration/100;
})
// done 1:10
const makeAllPlay = ()=>{
  
    Array.from(document.getElementsByClassName("sonItemPlay")).forEach((element) =>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })

}
Array.from(document.getElementsByClassName("sonItemPlay")).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id); 
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=5){
        songIndex =0;
    }
    else{

        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
   
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex =0;
    }
    else{

        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
   
})