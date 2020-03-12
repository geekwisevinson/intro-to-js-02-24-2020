// Target
// song list
const songListUl = document.querySelector(".left ul");
// main img
const mainImg = document.querySelector(".main img");
// main audio
const mainAudio = document.querySelector(".main audio");
// info p
const infoP = document.querySelector(".info p");

const songs = [
    {
        songFile: "audio1.mp3",
        imgFile: "image1.jpg",
        title: "Song 1",
        info: "This is the first song in the list of songs"
    },
    {
        songFile: "audio2.mp3",
        imgFile: "image2.jpg",
        title: "Song 2: Electric Boogaloo",
        info: "You have never heard a song like this before."
    },
    {
        songFile: "audio3.mp3",
        imgFile: "image3.jpg",
        title: "Die Hard 3",
        info: "We hold these truths to be"
    },
    {
        songFile: "audio4.mp3",
        imgFile: "image4.jpg",
        title: "Song the Fourth",
        info: "This is the song that never ends, it goes on and on my friend"
    }
];

loadSong(songs[0]);
songs.forEach(function(song){
    addSongToLi(song);
})

function addSongToLi(song) {
    const li = document.createElement("li");
    songListUl.appendChild(li);
    const span = document.createElement("span");
    const img = document.createElement("img");
    span.appendChild(document.createTextNode(song.title));
    img.src = song.imgFile;

    li.appendChild(img);
    li.appendChild(span);
    li.addEventListener("click", function() {
        // Clear Selected from lis
        document.querySelectorAll(".left li").forEach(li => {
            li.classList.remove('selected');
        });
        loadSong(song);
        // Add selected class to clicked li
        li.classList.add("selected");
    });
}

function loadSong(song) {
    mainAudio.src = song.songFile;
    mainImg.src = song.imgFile;
    infoP.innerHTML = song.info;
}