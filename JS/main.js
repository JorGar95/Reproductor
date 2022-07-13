class Song {
    constructor(songName, author, Link) {
        this.author = author
        this.songName = songName
        this.link = link
    }
}

class MusicPlayer {
    constructor(songs = [], querySelector, songsFolder) {
        this.songs = songs
        this.querySelector = querySelector
        this.indexSong = 0
        this.playingStatus = "paused"
        this.songsFolder = songsFolder
        this.audioPlayer = new Audio(songsFolder + this.songs[this.indexSong].link)
    }

    updateSongText() {
        const elements = document.querySelectorAll(this.querySelector)
        elements.forEach(element => {
            element.innerHTML = this.songs[this.indexSong].songName
        })
    }
    nextSong() {
        this.indexSong = this.indexSong + 1
        if (this.indexSong >= this.songs.length) {
            this.indexSong.song = 0;
        }
        this.updateSongText()
        this.pause()
        this.audioPlayer = new Audio(this.songsFolder + this.songs[this.indexSong].link)
        this.play()
    }
    prevSong() {
        this.indexSong = this.indexSong - 1
        if (this.indexSong < 0) {
            this.indexSong = this.songs.length - 1;
        }
        this.updateSongText()
        this.pause()
        this.audioPlayer = new Audio(this.songsFolder + this.songs[this.indexSong].link)
        this.play()
    }
    pause() {
        this.audioPlayer.pause()
    }
    play() {
        this.audioPlayer.play()
    }
}
const mySongs = [
    new Song(
        'Fever',
        'Dua Lipa',
        'Dua-Lipa-Angèle-Fever.mp3',
    ),
    new Song(
        'One Kiss',
        'Dua Lipa',
        'Calvin-Harris, Dua-Lipa-One-Kiss.mp3',
    ),
    new Song(
        'New Rules',
        'Dua Lipa',
        'Dua-Lipa - New-Rules.mp3',
    ),
    new Song(
        'Cold Heart',
        'Dua Lipa',
        'Elton-John, Dua-Lipa-Cold-Heart.mp3',
    ),
]
const myMusicPlayer = new MusicPlayer(mySongs, '.texto-cancion', './Assets/music/')