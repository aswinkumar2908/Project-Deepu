const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Aval mugam <br>
        <div class="subttile">Dilli Pinni</div>`,
        poster: "img/deepu/1.jpg"
    },
    {
        id: 2,
        songName: `Deva Deva <br>
        <div class="subttile">Deepoda</div>`,
        poster: "img/deepu/2.jpg"
    },
    {
        id: 3,
        songName: `Evo Evo Kalale <br>
        <div class="subttile">LoveStory-deepu</div>`,
        poster: "img/deepu/3.jpg"
    },
    {
        id: 4,
        songName: `Gunjukunna <br>
        <div class="subttile">Kadali-deepu</div>`,
        poster: "img/deepu/4.jpg"
    },
    {
        id: 5,
        songName: `Manasa Manasa<br>
        <div class="subttile">Deepika</div>`,
        poster: "img/deepu/5.jpg"
    },
    {
        id: 6,
        songName: `Nuvvunte nijame ga <br>
        <div class="subttile">Arya-dpka</div>`,
        poster: "img/deepu/6.jpg"
    },
    {
        id: 7,
        songName: `Poolane Kunukeyamantaa <br>
        <div class="subttile">I_deepu</div>`,
        poster: "img/deepu/7.jpg"
    },
    {
        id: 8,
        songName: `Rara Na Veera<br>
        <div class="subttile">Deepu</div>`,
        poster: "img/deepu/8.jpg"
    },
    {
        id: 9,
        songName: `Goud Gari Ammayi<br>
        <div class="subttile">Deepika-Goud</div>`,
        poster: "img/deepu/9.jpg"
    },
    {
        id: 10,
        songName: `Taanu Nenu <br>
        <div class="subttile">Naa-DEEPU</div>`,
        poster: "img/deepu/10.jpg"
    },
    {
        id: 11,
        songName: `Urike Urike<br>
        <div class="subttile">For-Deepu</div>`,
        poster: "img/deepu/11.jpg"
    },
    {
        id: 12,
        songName: `Uriye <br>
        <div class="subttile">Deepulu</div>`,
        poster: "img/deepu/12.jpg"
    },
    {
        id: 13,
        songName: `Vaa Senthaazhini <br>
        <div class="subttile">Deepu</div>`,
        poster: "img/deepu/13.jpg"
    },
    {
        id: 14,
        songName: `Ayy Pilla<br>
        <div class="subttile">Deepulu</div>`,
        poster: "img/deepu/14.jpg"
    },
    {
        id: 15,
        songName: ` Chiru Chiru Chiru<br>
        <div class="subttile">deepika-Aawara</div>`,
        poster: "img/deepu/15.jpg"
    },
    {
        id: 16,
        songName: `Choosi Choodangaane <br>
        <div class="subttile">Deepthi</div>`,
        poster: "img/deepu/16.jpg"
    },
    {
        id: 17,
        songName: `EE Rathaleyy <br>
        <div class="subttile">Radha-Shaym-Dpka</div>`,
        poster: "img/deepu/17.jpg"
    },
    {
        id: 18,
        songName: `Bommani Geesthe<br>
        <div class="subttile">Deepika la untundhi</div>`,
        poster: "img/deepu/18.jpg"
    },
    {
        id: 19,
        songName: `Edo Jarguthundhi <br>
        <div class="subttile">Deepu-Fidaa</div>`,
        poster: "img/deepu/19.jpg"
    },
    {
        id: 20,
        songName: `I Wanna Fly<br>
        <div class="subttile">With you-Deepulu</div>`,
        poster: "img/deepu/20.jpg"
    },
    {
        id: 21,
        songName: `Naa Kosam Puttavaa Nuvvu<br>
        <div class="subttile">Deepika</div>`,
        poster: "img/deepu/21.jpg"
    },
    {
        id: 22,
        songName: `Nee Choopule Naa Oopiri <br>
        <div class="subttile">Chikkimaa</div>`,
        poster: "img/deepu/22.jpg"
    },
    {
        id: 23,
        songName: `Ninnevarika Premisthaaru <br>
        <div class="subttile">Deepulu</div>`,
        poster: "img/deepu/23.jpg"
    },
    {
        id: 24,
        songName: `Potti Pilla <br>
        <div class="subttile">Rey-Pottoda</div>`,
        poster: "img/deepu/24.jpg"
    },
    {
        id: 25,
        songName: `Undipoya nuv ila <br>
        <div class="subttile">Deepulu</div>`,
        poster: "img/deepu/25.jpg"
    },
    {
        id: 26,
        songName: `Uppenantha ee prema ki <br>
        <div class="subttile">Deepu-2</div>`,
        poster: "img/deepu/26.jpg"
    },
    {
        id: 27,
        songName: `Yenno Yenno Varnala<br>
        <div class="subttile">Chikkimaa</div>`,
        poster: "img/deepu/27.jpg"
    },
    {
        id: 28,
        songName: `Yedurangula Vaana <br>
        <div class="subttile">Deepulu-2908</div>`,
        poster: "img/deepu/28.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');

let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/deepu/${index}.mp3`;
        poster_master_play.src = `img/deepu/${index}.jpg`;

        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.herf = `audio/deepu/${index}.mp3`;
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName.split('<br>')[0]);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];




music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
   

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).lenght;
        
    }
    music.src = `audio/deepu/${index}.mp3`;
        poster_master_play.src = `img/deepu/${index}.jpg`;

        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', ()=> {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).lenght) {
        index = 1;
    }
    music.src = `audio/deepu/${index}.mp3`;
        poster_master_play.src = `img/deepu/${index}.jpg`;

        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;            
    }
});


const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;

        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.herf = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName.split('<br>')[0]);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

const repeat_music = () => {
        index;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;

        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.herf = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName.split('<br>')[0]);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) +1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;

    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.herf = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName.split('<br>')[0]);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();           
            break;
        case 'next':
                next_music();          
                break;  
        case 'random':
            random_music();      
            break;              
            
    }

})

