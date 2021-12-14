let pauseButton = document.querySelector('.icon-pause');
let playButton = document.querySelector('.icon-play');
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
            name: 'Bước qua mùa cô đơn',
            singer: 'Vũ',
            background: './background/buocquamuacodon.jpg',
            path: './music/BuocQuaMuaCoDon-Vu-6879419.mp3',
            length: '04:38'
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
            console.log(stringName);
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
            } else if(string === 'zingchart-week-2') {
                findMusicByIndex(this.musicWeek_2, this.currentIndex);
            }
            playMusic();
            this.switch = true;
            buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            if(item) {
                if(string === 'zingchart') {
                    item.classList.add('page__page-3__list-items--active')
                } else if(string === 'zingchart-week-1') {
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

            // solve when the music ended   
            if(currentTimeMusic === durationTimeMusic) {
                if(this.currentIndex === this.musicZingChart.length) {
                    document.querySelector('.progress').value = 0;
                    audio.currentTime  = 0;
                    this.switch = !this.switch;
                    buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
                    audio.pause();
                } else {
                    this.currentIndex ++;
                    musicRun();
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
                console.log(item)
                this.currentIndex = +(item.classList[1][item.classList[1].length - 1]);
                this.currentIndex -= 1;
                musicRun(item, 'zingchart-week-1');
            }
        })

         // Find current index by zing chart Week-2
        document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items--2').forEach(item => {
            item.onclick = (e) => {
                removeListItemActive(document.querySelectorAll('.page__page-3__rank-week__content-list-items__list-music-items--2'), 'zingchart-week-2');
                console.log(item)
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
