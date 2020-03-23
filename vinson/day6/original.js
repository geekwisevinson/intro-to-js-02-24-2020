// Target
// ul song list
const songListUl = document.querySelector('.left ul');
// main img
const mainImg = document.querySelector('.main img');
// main audio
const mainAudio = document.querySelector('.main audio');
// info paragraph
const infoP = document.querySelector('.info p');

// DATA
const songs = [
    {
        title: 'song 1',
        fileName: 'audio1.mp3',
        imgPath: 'img1.jpeg',
        info: 'this is the first song I ever made.'
    },
    {
        title: 'song 2',
        fileName: 'audio2.mp3',
        imgPath: 'img2.jpeg',
        info: 'this is the second song I ever made.'
    },
    {
        title: 'song 3',
        fileName: 'audio3.mp3',
        imgPath: 'img3.jpeg',
        info: 'this is the second song I ever made.'
    },
    {
        title: 'song 4',
        fileName: 'audio4.mp3',
        imgPath: 'img4.jpeg',
        info: 'this is the second song I ever made.'
    },
];

// Actions
function addSongToLi( song ) {
    const li = document.createElement('li');
    songListUl.appendChild(li);
    li.innerHTML = `<img width="80" height="80" src="${song.imgPath}" alt=""> <span>${song.title}</span>`;
    li.addEventListener('click', function () {
        loadSong(song);
    });
}

function loadSong(song) {
    mainImg.src = song.imgPath;
    mainAudio.src = song.fileName;
    infoP.innerHTML = song.info;
}

loadSong(songs[1]);
songs.forEach( function (song, index) {
    addSongToLi( songs[index] );
});

// for ( let i = 0; i < songs.length; i++) {
//     addSongToLi(songs[i]);
// }
