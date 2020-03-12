 // Target
        // ul songlist
        const songListuL = document.querySelector(".left ul");
        // main img
        const mainImg = document.querySelector(".main img");
        // main audio
        const mainAudio = document.querySelector(".main audio");
        // info paragraph
        const infoP = document.querySelector(".info p");

        const songs = [
            {
                fileName: 'audio1.mp3',
                title: "Song 1",
                imgPath: "image1.jpg",
                info: "This is the the first song ever made in the history of mankind."
            },
            {
                fileName: 'audio2.mp3',
                title: "Song 2",
                imgPath: "image2.jpg",
                info: "Music has never been made like this"
            },
            {
                fileName: 'audio3.mp3',
                title: "Song 3",
                imgPath: "image3.jpg",
                info: "This is the song that never ends"
            },
            {
                fileName: "audio4.mp3",
                title: "Song the fourth",
                imgPath: "image4.jpg",
                info: "Random info about a random song"
            }
        ];

        function addSongToLi(song) {
            const li = document.createElement("li");
            songListuL.appendChild(li);
            const span = document.createElement("span");
            span.appendChild(document.createTextNode(song.title))
            const img = document.createElement("img");
            img.setAttribute("src", song.imgPath);

            li.appendChild(img);
            li.appendChild(span);
            li.addEventListener('click', function() {
                loadSong(song);
            });
        }

        function loadSong(song) {
            mainImg.src = song.imgPath;
            mainAudio.src = song.fileName;
            infoP.innerHTML = song.info;
        }

        songs.forEach(function (song) {
            addSongToLi(song);
        });