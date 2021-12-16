let pauseButton = document.querySelector('.icon-pause');
let playButton = document.querySelector('.icon-play');
let nextButton = document.querySelector('.dashboards__center-button__next');
let prevButton = document.querySelector('.dashboards__center-button__prev');
let buttonDashboard = document.querySelector('.dashboards__center-button__play')

////////////////
let audio = document.querySelector('#audio');

const app = {
    currentIndex: 0,
    currentVolume: 1,
    count: 0,
    switch: false,
    musicZingChart: [
        {
            name: 'Chúng ta của hiện tại',
            singer: 'Sơn Tùng MTP',
            background: './background/chungtacuahientai.jfif',
            path: './music/chungtacuahientai.mp3',
            length: '05:01'
        }
        ,
        {
            name: 'Bước qua mùa cô đơn',
            singer: 'Vũ',
            background: './background/buocquanhau.jpg',
            path: './music/buocquanhau.mp3',
            length: '04:38'
        }
        ,
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng MTP',
            background: './background/muonroimasaocon.jfif',
            path: './music/muonroimasaocon.mp3',
            length: '04:35'
        }
        ,
        {
            name: 'Đừng như thói quen',
            singer: 'JayKii, Sara Lưu',
            background: './background/dungnhuthoiquen.jpg',
            path: './music/dungnhuthoiquen.mp3',
            length: '04:26'
        }
        ,
        {
            name: 'Hẹn một mai',
            singer: 'Bùi Anh Tuấn',
            background: './background/henmotmai.jfif',
            path: './music/henmotmai.mp3',
            length: '04:43'
        }
        ,
        {
            name: 'Bước qua mùa cô đơn',
            singer: 'Vũ',
            background: './background/buocquamuacodon.jpg',
            path: './music/BuocQuaMuaCoDon-Vu-6879419.mp3',
            length: '04:38'
        }
        ,
        {
            name: 'Khó vẽ nụ cười',
            singer: 'Đạt G, Du Uyên',
            background: './background/khovenucuoi.jpg',
            path: './music/khovenucuoi.mp3',
            length: '05:32'
        }
    ],
    musicWeek_1: [
        {
            name: 'Chúng ta của hiện tại',
            singer: 'Sơn Tùng MTP',
            background: './background/chungtacuahientai.jfif',
            path: './music/chungtacuahientai.mp3',
            length: '05:01'
        }
        ,
        {
            name: 'Bước qua mùa cô đơn',
            singer: 'Vũ',
            background: './background/buocquanhau.jpg',
            path: './music/buocquanhau.mp3',
            length: '04:38'
        }
        ,
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng MTP',
            background: './background/muonroimasaocon.jfif',
            path: './music/muonroimasaocon.mp3',
            length: '04:35'
        }
        ,
        {
            name: 'Đừng như thói quen',
            singer: 'JayKii, Sara Lưu',
            background: './background/dungnhuthoiquen.jpg',
            path: './music/dungnhuthoiquen.mp3',
            length: '04:26'
        }
        ,
        {
            name: 'Hẹn một mai',
            singer: 'Bùi Anh Tuấn',
            background: './background/henmotmai.jfif',
            path: './music/henmotmai.mp3',
            length: '04:43'
        }
    ],
    musicWeek_2: [
        {
            name: 'See you again',
            singer: 'Wiz Khalifa ft. Charlie Puth',
            background: './background/seeyouagain.jpg',
            path: './music/seeyouagain.mp3',
            length: '03:49'
        }
        ,
        {
            name: 'Love me like you do',
            singer: 'Ellie Goulding',
            background: './background/lovemelikeyoudo.png',
            path: './music/lovemelikeyoudo.mp3',
            length: '04:13'
        }
        ,
        {
            name: 'Monsters',
            singer: 'Katie Sky',
            background: './background/monster.jpg',
            path: './music/monster.mp3',
            length: '03:36'
        }
        ,
        {
            name: 'On my way',
            singer: 'Alan Walker, Sabrina Carpenter, Farruko',
            background: './background/onmyway.jpg',
            path: './music/onmyway.mp3',
            length: '03:13'
        }
        ,
        {
            name: 'Dancing with ghost',
            singer: 'Sasha Alex Sloan',
            background: './background/dancingwithghost.jpg',
            path: './music/dancingwithghost.mp3',
            length: '03:18'
        }
    ],
    render: function() {
        // ZING CHART MUSIC
        let indexZingChart = 0;
        let databaseZingChart = this.musicZingChart.map(music => {
            indexZingChart ++;
            let rankHTML = '<div class="page__page-3__list-items__left-rank">';
            if(indexZingChart === 1) {
                rankHTML = '<div class="page__page-3__list-items__left-rank page__page-3__list-items__left-rank--1">'
            } else if(indexZingChart === 2) {
                rankHTML = '<div class="page__page-3__list-items__left-rank page__page-3__list-items__left-rank--2">'
            } else if(indexZingChart === 3) {
                rankHTML = '<div class="page__page-3__list-items__left-rank page__page-3__list-items__left-rank--3">'
            }

            let isCurrent = `<li class="page__page-3__list-items page__page-3__list-items${indexZingChart}">`;
            if(indexZingChart-1 === this.currentIndex) {
                isCurrent = `<li class="page__page-3__list-items page__page-3__list-items${indexZingChart} page__page-3__list-items--active">`;
            }
            return  `
                ${isCurrent}
                <div class="page__page-3__list-items__left">
                    ${rankHTML}
                        ${indexZingChart}
                    </div>
                    <div class="page__page-3__list-items__left-line">
                        <i class="icofont-minus"></i>
                    </div>
                    <div class="page__page-3__list-items__left-background">
                        <img src="${music.background}" alt="" class="page__page-3__list-items__left-background-img">
                        <div class="page__page-3__list-items__left-background-play">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="page__page-3__list-items__left-des">
                        <div class="page__page-3__list-items__left-des-name">
                            ${music.name}
                        </div>
                        <div class="page__page-3__list-items__left-des-singer">
                            ${music.singer}
                        </div>
                    </div>
                </div>
                <div class="page__page-3__list-items__center">
                    <a href="/" class="page__page-3__list-items__center-name">
                        ${music.name} (Single)
                    </a>
                </div>
                <div class="page__page-3__list-items__right">
                    <div class="page__page-3__list-items__right-time">
                    ${music.length}
                    </div>
                </div>
            </li>
        `
        })
        $('.page__page-3__list').html(databaseZingChart.join(''));

        // ZING CHART WEEK-1 MUSIC
        let indexWeek_1 = 0;
        let databaseWeek_1 = this.musicWeek_1.map(music => {
            indexWeek_1++;
            let isCurrent = `<li class="page__page-3__rank-week__content-list-items__list-music-items page__page-3__rank-week__content-list-items__list-music-items${indexWeek_1} page__page-3__rank-week__content-list-items__list-music-items--1">`;
            if(indexZingChart-1 === this.currentIndex) {
                isCurrent = `<li class="page__page-3__rank-week__content-list-items__list-music-items page__page-3__rank-week__content-list-items__list-music-items${indexWeek_1} page__page-3__rank-week__content-list-items__list-music-items--1 page__page-3__rank-week__content-list-items__list-music-items--active">`;
            }

            let stringName = music.name.slice(0,16);
            if(music.name.length >= 16) {
                stringName += "...";
            }
            return `
                ${isCurrent}
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-rank">
                        ${indexWeek_1}    
                    </div>
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-icon">
                        <i class="icofont-minus"></i>
                    </div>
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-background">
                        <img src="${music.background}" alt="" class="page__page-3__rank-week__content-list-items__list-music-items-background-img">
                        <div class="page__page-3__rank-week__content-list-items__list-music-items-background-icon">
                            <i class="fas fa-play"></i>    
                        </div>
                    </div>
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-des">
                        <div class="page__page-3__rank-week__content-list-items__list-music-items-des-name">
                            ${stringName}
                        </div>
                        <div class="page__page-3__rank-week__content-list-items__list-music-items-des-singer">
                            ${music.singer}
                        </div>
                    </div>
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-time">
                        ${music.length}
                    </div>
                </li>
            `
        })
        $('.page__page-3__rank-week__content-list-items__list-music--vietnam').html(databaseWeek_1.join(''));

        // ZING CHART WEEK-2 MUSIC
        let indexWeek_2 = 0;
        let databaseWeek_2 = this.musicWeek_2.map(music => {
            indexWeek_2++;
            let isCurrent = `<li class="page__page-3__rank-week__content-list-items__list-music-items page__page-3__rank-week__content-list-items__list-music-items${indexWeek_2} page__page-3__rank-week__content-list-items__list-music-items--2">`;
            if(indexZingChart-1 === this.currentIndex) {
                isCurrent = `<li class="page__page-3__rank-week__content-list-items__list-music-items page__page-3__rank-week__content-list-items__list-music-items${indexWeek_2} page__page-3__rank-week__content-list-items__list-music-items--2 page__page-3__rank-week__content-list-items__list-music-items--active">`;
            }

            let stringName = music.name.slice(0,16);
            if(music.name.length >= 16) {
                stringName += "...";
            }
            let stringSinger = music.singer.slice(0,16);
            if(music.singer.length >= 16) {
                stringSinger += "...";
            }
            
            return `
                ${isCurrent}
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-rank">
                        ${indexWeek_2}    
                    </div>
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-icon">
                        <i class="icofont-minus"></i>
                    </div>
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-background">
                        <img src="${music.background}" alt="" class="page__page-3__rank-week__content-list-items__list-music-items-background-img">
                        <div class="page__page-3__rank-week__content-list-items__list-music-items-background-icon">
                            <i class="fas fa-play"></i>    
                        </div>
                    </div>
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-des">
                        <div class="page__page-3__rank-week__content-list-items__list-music-items-des-name">
                            ${stringName}
                        </div>
                        <div class="page__page-3__rank-week__content-list-items__list-music-items-des-singer">
                            ${stringSinger}
                        </div>
                    </div>
                    <div class="page__page-3__rank-week__content-list-items__list-music-items-time">
                        ${music.length}
                    </div>
                </li>
            `
        })
        $('.page__page-3__rank-week__content-list-items__list-music--usuk').html(databaseWeek_2.join(''));



    },
    run: function() {
        this.render();
        let minutes = 0;
        let seconds = 0;

        /* =============================== FUNCTIONS ============================== */

        let playMusic =() => {
            this.switch = !this.switch;
            buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            audio.play();
        }

        let pauseMusic =() => {
            this.switch = !this.switch;
            buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            audio.pause();
        }

        let findMusicByIndex = (kindMusic, index) => {
            audio.src = kindMusic[index].path;
            document.querySelector('.dashboards__left-left-img').src = kindMusic[index].background;
            document.querySelector('.dashboards__left-center-name-music').innerHTML = kindMusic[index].name;
            document.querySelector('.dashboards__left-center-name-singer').innerHTML = kindMusic[index].singer;
        }

        let solveTheTimeLessThan10 = (element) => {
            if(element < 10) {
                let string = ""; string += "0";
                string += element.toString();
                element = string;
            }
            return element;
        }

        // remove class 
        let removeListItemActive = (list, string) => {
            if(string === 'zingchart') {
                list.forEach(item => {
                    item.classList.remove('page__page-3__list-items--active');
                })
            } else if(string === 'zingchart-week-1') {
                list.forEach(item => {
                    item.classList.remove('page__page-3__rank-week__content-list-items__list-music-items--active');
                })
            } else if(string === 'zingchart-week-2') {
                list.forEach(item => {
                    item.classList.remove('page__page-3__rank-week__content-list-items__list-music-items--active');
                })
            } 
        }

        let musicRun = (item, string) => {
            if(string === 'zingchart') {
                findMusicByIndex(this.musicZingChart, this.currentIndex);
            } else if(string === 'zingchart-week-1') {
                findMusicByIndex(this.musicWeek_1, this.currentIndex);
                console.log(this.currentIndex);
            } else if(string === 'zingchart-week-2') {
                findMusicByIndex(this.musicWeek_2, this.currentIndex);
            }

            playMusic();
            this.switch = true;
            buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            if(item) {
                if(string === 'zingchart') {
                    item.classList.add('page__page-3__list-items--active');

                    // zing-chart-week-1
                    removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items'), 'zingchart-week-1');
                    itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat(this.currentIndex + 1);
                    let item2 = document.querySelector(itemString);
                    if(item2) {
                        item2.classList.add('page__page-3__rank-week__content-list-items__list-music-items--active');
                    }
                } else if(string === 'zingchart-week-1') {
                    item.classList.add('page__page-3__list-items--active');
                    item.classList.add('page__page-3__rank-week__content-list-items__list-music-items--active');
                } else if(string === 'zingchart-week-2') {
                    item.classList.add('page__page-3__rank-week__content-list-items__list-music-items--active');
                }
            }
        }

        // Default
        findMusicByIndex(this.musicZingChart, 0);

        /* =============================== EVENT ============================== */

        audio.ontimeupdate = (e) => {
            // solve current volume
            audio.volume = this.currentVolume;
            if(audio.volume === 0) {
                document.querySelector('.dashboards__left__volume').classList.add('dashboards__left__volume--active');
            } else {
                document.querySelector('.dashboards__left__volume').classList.remove('dashboards__left__volume--active');
            }

            // solve current time
            let restore = audio.duration;
            let currentTimeMusic = Math.floor(audio.currentTime);
            seconds = currentTimeMusic%60;
            minutes = Math.floor(currentTimeMusic/60);
            seconds = solveTheTimeLessThan10(seconds);
            minutes = solveTheTimeLessThan10(minutes);
            document.querySelector('.dashboards__center-bottom__time-current').innerHTML = `${minutes}:${seconds}`;
            
            // solve duration time 
            let durationTimeMusic = Math.floor(audio.duration);
            let durationSeconds = durationTimeMusic ? durationTimeMusic % 60 : 0;
            let durationMinutes = durationTimeMusic? Math.floor(durationTimeMusic / 60) : 4;
            durationSeconds = solveTheTimeLessThan10(durationSeconds);
            durationMinutes = solveTheTimeLessThan10(durationMinutes);
            document.querySelector('.dashboards__center-bottom__time-end').innerHTML = `${durationMinutes}:${durationSeconds}`;

            // solve progress music
            let currentProgress = durationTimeMusic ? Math.floor(currentTimeMusic/durationTimeMusic * 300) : 0;
            document.querySelector('.progress').value = currentProgress;

            // solve when the music zingchart ended   
            const solveWhenMusicEnded = (kindMusic, string) => {
                if(currentTimeMusic === durationTimeMusic) {
                    if(this.currentIndex === kindMusic.length - 1) {
                        if(string === 'zingchart') {
                            removeListItemActive(document.querySelectorAll('.page__page-3__list-items'), string);
                            itemString = '.page__page-3__list-items'.concat('1');
                            let item = document.querySelector(itemString);
                            item.classList.add('page__page-3__list-items--active');
                            findMusicByIndex(this.musicZingChart, 0);
                        } else if(string === 'zingchart-week-1') {

                        } else if(string === 'zingchart-week-2') {
                            removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items.page__page-3__rank-week__content-list-items__list-music-items--2'), string);
                            itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat('1').concat('.page__page-3__rank-week__content-list-items__list-music-items--2');
                            let item = document.querySelector(itemString);
                            item.classList.add('page__page-3__rank-week__content-list-items__list-music-items--active');
                            findMusicByIndex(this.musicWeek_2, 0);
                        }
                        this.currentIndex = 0;
                        document.querySelector('.progress').value = 0;
                        audio.currentTime  = 0;
                        this.switch = !this.switch;
                        buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
                        audio.pause();
                    } else {
                        this.currentIndex ++;
                        let itemString = "";
                        if(string === 'zingchart') {
                            removeListItemActive(document.querySelectorAll('.page__page-3__list-items'), 'zingchart');
                            itemString = '.page__page-3__list-items'.concat(this.currentIndex + 1);
                        } else if(string === 'zingchart-week-1') {
                            itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat(this.currentIndex + 1);
                        } else if(string === 'zingchart-week-2') {
                            removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items'), 'zingchart-week-2');
                            itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat(this.currentIndex + 1).concat('.page__page-3__rank-week__content-list-items__list-music-items--2');
                        }
                        let item = document.querySelector(itemString);
                        console.log(item);
                        musicRun(item, string);
                    }
                }
            }

            // solve when the music zingchart next   
            const solveWhenMusicNext = (kindMusic, string) => {
                if(this.currentIndex === kindMusic.length - 1) {
                    if(string === 'zingchart') {
                        removeListItemActive(document.querySelectorAll('.page__page-3__list-items'), string);
                        itemString = '.page__page-3__list-items'.concat('1');
                        let item = document.querySelector(itemString);
                        item.classList.add('page__page-3__list-items--active');
                        findMusicByIndex(this.musicZingChart, 0);
                    } else if(string === 'zingchart-week-1') {

                    } else if(string === 'zingchart-week-2') {
                        removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items.page__page-3__rank-week__content-list-items__list-music-items--2'), string);
                        itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat('1').concat('.page__page-3__rank-week__content-list-items__list-music-items--2');
                        let item = document.querySelector(itemString);
                        item.classList.add('page__page-3__rank-week__content-list-items__list-music-items--active');
                        findMusicByIndex(this.musicWeek_2, 0);
                    }
                    this.currentIndex = 0;
                    document.querySelector('.progress').value = 0;
                    audio.currentTime  = 0;
                    this.switch = !this.switch;
                    buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
                    audio.pause();
                } else {
                    this.currentIndex ++;
                        let itemString = "";
                        if(string === 'zingchart') {
                            removeListItemActive(document.querySelectorAll('.page__page-3__list-items'), 'zingchart');
                            itemString = '.page__page-3__list-items'.concat(this.currentIndex + 1);
                        } else if(string === 'zingchart-week-1') {
                            itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat(this.currentIndex + 1);
                        } else if(string === 'zingchart-week-2') {
                            removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items'), 'zingchart-week-2');
                            itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat(this.currentIndex + 1).concat('.page__page-3__rank-week__content-list-items__list-music-items--2');
                        }
                        let item = document.querySelector(itemString);
                        console.log(item);
                        musicRun(item, string);
                }
            }

            // solve when the music zingchart p ev   
            const solveWhenMusicPrevious = (kindMusic, string) => {
                if(this.currentIndex !== 0) {
                    this.currentIndex --;
                    let itemString = "";
                    if(string === 'zingchart') {
                        removeListItemActive(document.querySelectorAll('.page__page-3__list-items'), 'zingchart');
                        itemString = '.page__page-3__list-items'.concat(this.currentIndex + 1);
                    } else if(string === 'zingchart-week-1') {
                        itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat(this.currentIndex + 1);
                    } else if(string === 'zingchart-week-2') {
                        removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items'), 'zingchart-week-2');
                        itemString = '.page__page-3__rank-week__content-list-items__list-music-items'.concat(this.currentIndex + 1).concat('.page__page-3__rank-week__content-list-items__list-music-items--2');
                    }
                    let item = document.querySelector(itemString);
                    console.log(item);
                    musicRun(item, string);
                }
            }


            // solve find kind music now !! 
            const solveFindKindMusicNow = () => {
                let music = audio.src.split('/')[4];
                for(let item of this.musicZingChart) {
                    let path = item.path.split('/')[2];
                    if(path === music) {
                        return 1;
                    }
                }
        
                for(let item of this.musicWeek_1) {
                    let path = item.path.split('/')[2];
                    if(path === music) {
                        console.log(path, music);
                        return 2;
                    }
                }
        
                for(let item of this.musicWeek_2) {
                    let path = item.path.split('/')[2];
                    if(path === music) {
                        return 3;
                    }
                }
            }
            if(+solveFindKindMusicNow() === 1) {
                solveWhenMusicEnded(this.musicZingChart, 'zingchart');
            } else if(+solveFindKindMusicNow() === 2) {
                solveWhenMusicEnded(this.musicWeek_1, 'zingchart-week-1');
            } else if(+solveFindKindMusicNow() === 3) {
                solveWhenMusicEnded(this.musicWeek_2, 'zingchart-week-2');
            }

            // if(currentTimeMusic === durationTimeMusic) {
            //     if(this.currentIndex === this.musicZingChart.length - 1) {
            //         removeListItemActive(document.querySelectorAll('.page__page-3__list-items'), 'zingchart');
            //         document.querySelector('.progress').value = 0;
            //         audio.currentTime  = 0;
            //         this.switch = !this.switch;
            //         buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            //         audio.pause();
            //     } else {
            //         removeListItemActive(document.querySelectorAll('.page__page-3__list-items'), 'zingchart');
            //         this.currentIndex ++;
            //         let itemString = '.page__page-3__list-items'.concat(this.currentIndex + 1);
            //         let item = document.querySelector(itemString);
            //         musicRun(item, 'zingchart');
            //     }
            // }

                // Click Next Button 
            nextButton.onclick = (e) => {
                if(+solveFindKindMusicNow() === 1) {
                    solveWhenMusicNext(this.musicZingChart, 'zingchart');
                } else if(+solveFindKindMusicNow() === 2) {
                    solveWhenMusicNext(this.musicWeek_1, 'zingchart-week-1');
                } else if(+solveFindKindMusicNow() === 3) {
                    solveWhenMusicNext(this.musicWeek_2, 'zingchart-week-2');
                }
            }

            prevButton.onclick = (e) => {
                if(+solveFindKindMusicNow() === 1) {
                    solveWhenMusicPrevious(this.musicZingChart, 'zingchart');
                } else if(+solveFindKindMusicNow() === 2) {
                    solveWhenMusicPrevious(this.musicWeek_1, 'zingchart-week-1');
                } else if(+solveFindKindMusicNow() === 3) {
                    solveWhenMusicPrevious(this.musicWeek_2, 'zingchart-week-2');
                }
            }






        }
        
         // Find current index by zing chart
        document.querySelectorAll('.page__page-3__list-items').forEach(item => {
            item.onclick = (e) => {
                removeListItemActive(document.querySelectorAll('.page__page-3__list-items'), 'zingchart');
                this.currentIndex = +(item.classList[1][item.classList[1].length - 1]);
                this.currentIndex -= 1;
                musicRun(item, 'zingchart');
            }
        })

         // Find current index by zing chart Week-1
        document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items--1').forEach(item => {
            item.onclick = (e) => {
                removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items--1'), 'zingchart-week-1');
                this.currentIndex = +(item.classList[1][item.classList[1].length - 1]);
                this.currentIndex -= 1;
                musicRun(item, 'zingchart-week-1');
            }
        })

         // Find current index by zing chart Week-2
        document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items--2').forEach(item => {
            item.onclick = (e) => {
                removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items--2'), 'zingchart-week-2');
                this.currentIndex = +(item.classList[1][item.classList[1].length - 1]);
                this.currentIndex -= 1;
                musicRun(item, 'zingchart-week-2');
            }
        })
   
        // set current time
        document.querySelector('.progress').onchange = (e) => {
            let currentTimeMusic = Math.floor(document.querySelector('.progress').value / 300 * audio.duration);
            audio.currentTime = currentTimeMusic;
        }

        // Click PLay or Pause Button
        playButton.onclick = (e) => {
            playMusic();
        }   
        pauseButton.onclick = (e) => {
            pauseMusic();
        }
        
     

        

        // set current volume
        document.querySelector('.progress-volume').onchange = (e) => {
            this.currentVolume = document.querySelector('.progress-volume').value / 200;  
            // Turn off
            if(this.currentVolume === 0) {
                document.querySelector('.dashboards__left__volume').classList.add('dashboards__left__volume--active');
                document.querySelector('.progress-volume').value = 0;
            } 
            // Turn on
            else {
                document.querySelector('.dashboards__left__volume').classList.remove('dashboards__left__volume--active');
                document.querySelector('.progress-volume').value = document.querySelector('.progress-volume').value;
            }         
        }
    

        // Click Volume Button 
        document.querySelector('.dashboards__left__volume').onclick =(e) => {
            // Turning off
            if(document.querySelector('.dashboards__left__volume').classList.contains('dashboards__left__volume--active')) {
                this.currentVolume = 1;
                document.querySelector('.progress-volume').value = 200;
                document.querySelector('.dashboards__left__volume').classList.remove('dashboards__left__volume--active');
            }
            // Turning on 
            else {
                this.currentVolume = 0;
                document.querySelector('.progress-volume').value = 0;
                document.querySelector('.dashboards__left__volume').classList.add('dashboards__left__volume--active');
            }
        }

    }
}


app.run();


// THE CHART
var xValues = ["17:00","19:00","21:00","23:00","01:00","03:00","05:00","7:00","09:00","11:00","13:00","15:00"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478,4343,5452],
      backgroundColor: "rgb(227, 80, 80)",
      borderColor: "rgba(227, 80, 80, 0.7)",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000,6754,6894],
      backgroundColor: "rgba(87, 149, 222)",
      borderColor: "rgba(87, 149, 222, 0.7)",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,4570,5640,6650,6549,5465,5998],
      backgroundColor: "rgb(58, 195, 165)",
      borderColor: "rgba(58, 195, 165, 0.7)",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})


// SETTINGS
let checkSettings = true;

document.querySelector('.page__header__right-items--setting').onclick = (e) => {
    checkSettings? document.querySelector('.page__header__right-items--setting-absolute').style.display = 'block' : document.querySelector('.page__header__right-items--setting-absolute').style.display = 'none';
    checkSettings = !checkSettings;
}


// THEME

document.querySelector('.page__header__right-items--theme').onclick = (e) => {
    document.querySelector('.page__header__right-items--theme-Absolute').style.display = 'block';
    document.querySelector('.app-overlay').style.display = 'block';
}

document.querySelector('.page__header__right-items--theme-Absolute-close').onclick = (e) => {
    document.querySelector('.page__header__right-items--theme-Absolute').style.display = 'none';
    document.querySelector('.app-overlay').style.display = 'none';
}

let index 

const themeActive = (color) => {
    let index = 0;
    let listTheme = document.querySelectorAll('.page__header__right-items--theme-Absolute-list-items-list-items-image-absolute-execute');
    for(let i in listTheme) {
        listTheme[i].onclick = (e) => {    
            if(+i === 0) {
                color = '#ffffffe6';
                document.querySelector('.dashboards__left-center-name-music').style.color = 'black';
                document.querySelector('.dashboards__left-center-name-singer').style.color = 'black';
                document.querySelector('.dashboards__center-button').style.color = 'black';
                // document.querySelector('.fas.fa-play.icon-play').style.color = 'black !important';
                // document.querySelector('.fas.fa-pause').style.color = 'black';
                document.querySelector('.dashboards__center-button__play').style.border = '1px solid black';
                document.querySelector('.dashboards').style.backgroundColor = '#FFFFFF';
                document.querySelectorAll('.menu__list-item__des').forEach(item => {
                    item.style.color = 'black';
                })
                document.querySelectorAll('.menu__list-item__icon').forEach(item => {
                    item.style.color = 'black';
                })
                document.querySelectorAll('.page__page-3__list-items__left-des-name').forEach(item => {
                    item.style.color = 'black';
                })
                document.querySelectorAll('.page__page-3__list-items__left-des-singer').forEach(item => {
                    item.style.color = 'black';
                })
                document.querySelectorAll('.page__page-3__list-items__left-rank').forEach(item => {
                    item.style.color = 'black';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items').forEach(item => {
                    item.style.backgroundColor = '#F7F7F7';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items-des-name').forEach(item => {
                    item.style.color = 'black';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items-des-singer').forEach(item => {
                    item.style.color = 'black';
                })
                document.querySelectorAll('.page__page-3__list-items').forEach(item => {
                    item.style.border = '1px solid #888';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items-rank').forEach(item => {
                    item.style.color = 'black';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items-see-more-btn').forEach(item => {
                    item.style.border = '1px solid violet';
                    item.style.color = 'violet';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items-titles-where').forEach(item => {
                    item.style.color = 'violet';
                })

                document.querySelector('.dashboards__center-bottom__time-current').style.color = 'black';
                document.querySelector('.dashboards__center-bottom__time-end').style.color = 'black';

            } else if(+i === 1) {
                
            } else if(+i === 2) {
                color = '#101f3f'
                document.querySelector('.dashboards').style.backgroundColor = '#172C48';
                document.querySelector('.page__header__right-items--setting-absolute').style.backgroundColor = '#1B3161';
                document.querySelector('.dashboards__left-center-name-music').style.color = 'white';
                document.querySelector('.dashboards__left-center-name-singer').style.color = 'white';
                document.querySelector('.dashboards__center-button').style.color = 'white';
                // document.querySelector('.fas.fa-play.icon-play').style.color = 'white !important';
                // document.querySelector('.fas.fa-pause').style.color = 'white';
                document.querySelector('.dashboards__center-button__play').style.border = '1px solid white';
                document.querySelectorAll('.menu__list-item__des').forEach(item => {
                    item.style.color = 'white';
                })
                document.querySelectorAll('.menu__list-item__icon').forEach(item => {
                    item.style.color = 'white';
                })
                document.querySelectorAll('.page__page-3__list-items__left-des-name').forEach(item => {
                    item.style.color = 'white';
                })
                document.querySelectorAll('.page__page-3__list-items__left-des-singer').forEach(item => {
                    item.style.color = 'white';
                })
                document.querySelectorAll('.page__page-3__list-items__left-rank').forEach(item => {
                    item.style.color = 'white';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items').forEach(item => {
                    item.style.backgroundColor = '#314865';
                })
                document.querySelectorAll('.page__page-4-channels__right-top-items').forEach(item => {
                    item.style.backgroundColor = '#314865';
                })
                document.querySelector('.page__page-4-channels__left-list').style.backgroundColor = '#314865';
                document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items-des-name').forEach(item => {
                    item.style.color = 'white';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items-des-singer').forEach(item => {
                    item.style.color = 'white';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items-rank').forEach(item => {
                    item.style.color = 'white';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items-see-more-btn').forEach(item => {
                    item.style.border = '1px solid white';
                    item.style.color = 'white';
                })
                document.querySelectorAll('.page__page-3__rank-week__content-list-items-titles-where').forEach(item => {
                    item.style.color = 'white';
                })

                document.querySelector('.dashboards__center-bottom__time-current').style.color = 'white';
                document.querySelector('.dashboards__center-bottom__time-end').style.color = 'white';
            } else if(+i === 3) {
                color = '#800064'
                document.querySelectorAll('.page__page-4-channels__right-top-items').forEach(item => {
                    item.style.backgroundColor = '#871B6F';
                })
                document.querySelector('.page__page-4-channels__left-list').style.backgroundColor = '#871B6F';
                document.querySelector('.dashboards').style.backgroundColor = '#660150';

            } else if(+i === 4) {
                color = '#57403b'
            } else if(+i === 5) {
                alert('Lazyy :(((')
            } else if(+i === 6) {
                color = '#1e1e1e'
            } else if(+i === 7) {
                color = '#170f23'
            } else if(+i === 8) {
                color = '#101f3f'
            }
            if(i === 0) {
                document.querySelector('.menu').style.backgroundColor = 'rgba(0,0,0,0.05)';
                
            } else {
                document.querySelector('.menu').style.backgroundColor = color;
            }
            document.querySelectorAll('.page__header__right-items').forEach(item => {
                item.style.backgroundColor = 'rgb(117 135 175 / 20%)';
            })
            document.querySelector('.page__header__left-search').style.backgroundColor = color;
            document.querySelector('.page__header__left-search__input').style.backgroundColor = color;
            document.querySelector('.page').style.backgroundColor = color;
            document.querySelector('.page__page-3__alpha').style.backgroundImage = `linear-gradient(180deg,hsla(0,0%,100%,0) 37%, ${color})`;
            document.querySelector('.page__page-6__alpha').style.backgroundImage = `linear-gradient(180deg,hsla(0,0%,100%,0) 37%, ${color})`;
            document.querySelector('.page__page-3__alpha2').style.backgroundImage = `linear-gradient(180deg, ${color}, ${color})`;
            document.querySelector('.page__page-6__alpha2').style.backgroundImage = `linear-gradient(180deg, ${color}, ${color})`;
            document.querySelector('.page__page-3__rank-week__alpha').style.backgroundColor = color;
            document.querySelector('.page__page-3__see-more__button').style.backgroundColor = color;
            document.querySelector('.page__page-3__rank-week__content-list-items-see-more-btn').style.backgroundColor = color;
            document.querySelectorAll('.page__page-3__rank-week__content-list-items-see-more-btn').forEach(item => {
                item.style.backgroundColor = color;
            })
            document.querySelector('.page__header__right-items--theme-Absolute').style.backgroundColor = color;

            
            
          
        }

    }


}
themeActive();


// page - 2
$(document).ready(function(){
    $('.page__page-2__group').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        Infinity: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });
  $(document).ready(function(){
    $('.page__page-2_list_radio_group').slick({
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        Infinity: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });
  var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
