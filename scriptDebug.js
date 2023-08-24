console.log("Welcome to spotify");

// Intializing the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songName = document.getElementsByClassName("songName");

let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song 2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Song 3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song 4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song 5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song 6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Song 7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Song 8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song 9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song 10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},

]

songItems.forEach((elmnts, i)=>{
      elmnts.getElementsByTagName("img")[0].src = songs[i].coverPath;
      elmnts.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

        gif.style = "opacity: 1";

        Array.from(songName).forEach((ele)=>{
            if(ele.innerText == songs[songIndex].songName){
                let smallBtn = ele.nextElementSibling.children[1];
                 if(smallBtn.classList.contains("fa-play-circle")){
                    smallBtn.classList.remove("fa-play-circle");
                    smallBtn.classList.add("fa-pause-circle");
                 }
                 else{
                    smallBtn.classList.remove("fa-pause-circle");
                    smallBtn.classList.add("fa-play-circle");
                 }
            }
        })

    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style = "opacity: 0";

        pauseAudio();
    }
})


// Listen to Events
audioElement.addEventListener("timeupdate", ()=>{
    const currTime = audioElement.currentTime;
    const dur = audioElement.duration;

    const myProgressBarPercentage = parseInt((currTime/dur)*100);
    myProgressBar.value = myProgressBarPercentage;    
})

myProgressBar.addEventListener("input",()=>{
    audioElement.currentTime = ((myProgressBar.value)*(audioElement.duration)/100);

} )


let songItemPlay = document.getElementsByClassName("songItemPlay");

const makeAllPlay = ()=>{
    Array.from(songItemPlay).forEach((elements)=>{
    elements.classList.remove("fa-pause-circle");
    elements.classList.add("fa-play-circle");
    })
}

const pauseAudio = ()=>{
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style = "opacity: 0";
    makeAllPlay();
}


Array.from(songItemPlay).forEach((elements)=>{
    elements.addEventListener("click", (e)=>{
        if(e.target.classList.contains("fa-pause-circle")){
            pauseAudio();
        }
        else{
            makeAllPlay();
            if(e.target.classList.contains("fa-play-circle")){
                songIndex = parseInt(e.target.id);
                e.target.classList.remove("fa-play-circle");
                e.target.classList.add("fa-pause-circle");
                audioElement.src = `songs/${songIndex+1}.mp3`;
                masterSongName.innerText = songs[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.play();
                gif.style = "opacity: 1";
        
                masterPlay.classList.remove("fa-play-circle");
                masterPlay.classList.add("fa-pause-circle");
            }  
        }
    })
})



document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>=9){
        songIndex = 9;
    }

    else{
        songIndex +=1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

        gif.style = "opacity: 1";



        Array.from(songName).forEach((ele)=>{
            if(ele.innerText == songs[songIndex].songName){
                let smallBtn = ele.nextElementSibling.children[1];
                    smallBtn.classList.remove("fa-play-circle");
                    smallBtn.classList.add("fa-pause-circle");
            }
            else{
                let smallBtn2 = ele.nextElementSibling.children[1];
                    smallBtn2.classList.add("fa-play-circle");
                    smallBtn2.classList.remove("fa-pause-circle");
            }
        })

})

document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

        gif.style = "opacity: 1";

        Array.from(songName).forEach((ele)=>{
            if(ele.innerText == songs[songIndex].songName){
                let smallBtn = ele.nextElementSibling.children[1];
                    smallBtn.classList.remove("fa-play-circle");
                    smallBtn.classList.add("fa-pause-circle");
            }
            else{
                let smallBtn2 = ele.nextElementSibling.children[1];
                    smallBtn2.classList.add("fa-play-circle");
                    smallBtn2.classList.remove("fa-pause-circle");
            }
        })
})