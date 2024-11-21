const lovelikeoxygen = document.querySelectorAll('.lovelikeoxygen')
const view = document.querySelector('.view')
const standbyme = document.querySelectorAll('.standbyme')
const mindwarning = document.querySelector('.mindwarning')
const starrynight = document.querySelectorAll('.starrynight')
const yourscent = document.querySelector('.yourscent')
const underthestarlight = document.querySelector('.underthestarlight')
const sign = document.querySelectorAll('.sign')
const illusion = document.querySelector('.illusion')
const shineonyou = document.querySelectorAll('.shineonyou')
const timepiece = document.querySelector('.timepiece')
const dice = document.querySelectorAll('.dice')
const sunshine = document.querySelectorAll('.sunshine')
const ontheway = document.querySelectorAll('.ontheway')
const lovephobia = document.querySelector('.lovephobia')
const yeowoobi = document.querySelector('.yeowoobi')
const inthewhale = document.querySelectorAll('.inthewhale')
const circle = document.querySelectorAll('.circle')
const cough = document.querySelectorAll('.cough')
const rainonme = document.querySelector('.rainonme')
const caramel = document.querySelectorAll('.caramel')
const anywhere = document.querySelectorAll('.anywhere')
const paradise = document.querySelectorAll('.paradise')
const expectations = document.querySelectorAll('.expectations')
const noparachute = document.querySelectorAll('.noparachute')
const always = document.querySelectorAll('.always')
const uroco = document.querySelector('.uroco')
const beauty = document.querySelector('.beauty')
const beatdrum = document.querySelectorAll('.beatdrum')
const hola = document.querySelectorAll('.hola')
const maestro = document.querySelectorAll('.maestro')
const shapeofmyheart = document.querySelector('.shapeofmyheart')
const focus = document.querySelector('.focus')
const allday = document.querySelectorAll('.allday')
const asitwas = document.querySelectorAll('.asitwas')
const sung = document.querySelector('.sung')
const rainyblue = document.querySelector('.rainyblue')
const lielielie = document.querySelector('.lielielie')
const bibi = document.querySelector('.bibi')
const iu = document.querySelector('.iu')

// home
// const mv_slide = new Swiper('#mv_slide',{
//     slidesPerView: 1,
//     centeredSlides:true,
//     direction: 'horizontal',
//     loop:true,
//     spaceBetween: 10,
//     scrollbar:{el:'#mv_slide .swiper-scrollbar'},
// })

// album
const album_slide = new Swiper('#album_slide',{
    init: true,
    initialSlide: 0,
    loopedSlides: 3,
    slidesPerView: 'auto',
    direction: 'horizontal',
    loop:true,
    spaceBetween: 10,
    breakpoints:{
        400:{slidesPerView:2},
        500:{slidesPerView:2.5},
        600:{slidesPerView:3},
        650:{slidesPerView:3.5},
        770:{slidesPerView:4},
    }
})

// official_slide
const official_slide = new Swiper('#video_slide',{
    slidesPerView: 1,
    direction: 'horizontal',
    loop:true,
    spaceBetween: 0,
    pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
})

// shorts_slide
const shorts_slide = new Swiper('#shorts_slide',{
    slidesPerView: 'auto',
    centeredSlides:true,
    direction: 'horizontal',
    loop:true,
    loopedSlides: 2,
    spaceBetween: 10,
    slidesOffsetAfter: 10,
    breakpoints:{
        345:{centeredSlides:false,},
        450:{centeredSlides:true,},
        590:{centeredSlides:false,},
        700:{centeredSlides:true,},
        750:{centeredSlides:false,},
    }
})

// play_slide
const play_tab = new Swiper('#play_tab',{
    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 10,
    slidesOffsetAfter: 20,
    freeMode : false,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
})
const tab_title = document.querySelectorAll('.tab_title div > a')
const tab_contents = document.querySelectorAll('.list')
const moreBtn = document.querySelectorAll('.more')
const contents = document.querySelectorAll('.list > ul')
const play_slide = new Swiper('#play_slide',{
    slidesPerView: 1,
    // slidesPerView: 'auto',
    direction: 'horizontal',
    loop:true,
    spaceBetween: 10,
    slidesOffsetBefore: 20,
    // slidesOffsetAfter: 10,
    // centeredSlides:true,
    // breakpoints:{
    //     320:{slidesPerView:1},
    //     370:{slidesPerView:1.5},
    // },
    allowTouchMove: false,
    thumbs: {
        swiper: play_tab
    },
    on:{
        init:function(){
            // 슬라이드가 변경되기 전 초기 실행함수
            // this = #play_slide
            // this.slides = .swiper-slide
            // this.activeIndex = 현재 활성화된 slide
            
            // this.slides[this.activeIndex].querySelector('.slide_txt').style.opacity = '1';
            tab_title.forEach(function(t,i){
                t.addEventListener('click', function(e){
                    e.preventDefault()
                    for(let i of tab_title){i.classList.remove('active')}
                    t.classList.add('active')
                    // tab_contents[i].
                })
            })
            moreBtn.forEach(function(target){
                target.addEventListener('click',function(e){
                    e.preventDefault()
                    for(let j of moreBtn){j.style.display = 'none'}
                    for(let j of contents){j.style.height = '378px'}
                    for(let j of contents){j.style.overflow = 'auto'}
                })
            })
        },
    },
})



// shinee 앨범
// $(function() {
//     var audio1 = new Audio('./audio/shinee_lovelikeoxygen.mp3');
//     var audio_state = 0;
//     lovelikeoxygen[0].addEventListener("click",function(e){
//         e.preventDefault()
//         if(audio_state == 0){
//             audio1.loop = true;//반복재생
//             audio1.volume = 0.5;// 음량 설정
//             audio1.currentTime=0;//처음부터 재생
//             audio1.play();// mp3 재생
//             audio_state = 1;
//         }else if(audio_state == 1){
//             audio1.pause();
//             audio_state = 0;
//         }
//     });
//     lovelikeoxygen[1].addEventListener("click",function(e){
//         e.preventDefault()
//         if(audio_state == 0){
//             audio1.loop = true;//반복재생
//             audio1.volume = 0.5;// 음량 설정
//             audio1.currentTime=0;//처음부터 재생
//             audio1.play();// mp3 재생
//             audio_state = 1;
//         }else if(audio_state == 1){
//             audio1.pause();
//             audio_state = 0;
//         }
//     });
//     lovelikeoxygen[2].addEventListener("click",function(e){
//         e.preventDefault()
//         if(audio_state == 0){
//             audio1.loop = true;//반복재생
//             audio1.volume = 0.5;// 음량 설정
//             audio1.currentTime=0;//처음부터 재생
//             audio1.play();// mp3 재생
//             audio_state = 1;
//         }else if(audio_state == 1){
//             audio1.pause();
//             audio_state = 0;
//         }
//     });
// })
$(function() {
    var audio1 = new Audio('./audio/shinee_lovelikeoxygen.mp3');
    var audio_state = 0;
    lovelikeoxygen[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio1.loop = true;//반복재생
            audio1.volume = 0.5;// 음량 설정
            audio1.currentTime=0;//처음부터 재생
            audio1.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio1.pause();
            audio_state = 0;
        }
    });
    lovelikeoxygen[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio1.loop = true;//반복재생
            audio1.volume = 0.5;// 음량 설정
            audio1.currentTime=0;//처음부터 재생
            audio1.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio1.pause();
            audio_state = 0;
        }
    });
    lovelikeoxygen[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio1.loop = true;//반복재생
            audio1.volume = 0.5;// 음량 설정
            audio1.currentTime=0;//처음부터 재생
            audio1.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio1.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio2 = new Audio('./audio/shinee_view.mp3');
    var audio_state = 0;
    view.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio2.loop = true;//반복재생
            audio2.volume = 0.5;// 음량 설정
            audio2.currentTime=0;//처음부터 재생
            audio2.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio2.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio3 = new Audio('./audio/shinee_standbyme.mp3');
    var audio_state = 0;
    standbyme[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio3.loop = true;//반복재생
            audio3.volume = 0.5;// 음량 설정
            audio3.currentTime=0;//처음부터 재생
            audio3.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio3.pause();
            audio_state = 0;
        }
    });
    standbyme[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio3.loop = true;//반복재생
            audio3.volume = 0.5;// 음량 설정
            audio3.currentTime=0;//처음부터 재생
            audio3.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio3.pause();
            audio_state = 0;
        }
    });
    standbyme[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio3.loop = true;//반복재생
            audio3.volume = 0.5;// 음량 설정
            audio3.currentTime=0;//처음부터 재생
            audio3.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio3.pause();
            audio_state = 0;
        }
    });
    standbyme[3].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio3.loop = true;//반복재생
            audio3.volume = 0.5;// 음량 설정
            audio3.currentTime=0;//처음부터 재생
            audio3.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio3.pause();
            audio_state = 0;
        }
    });
})

// ost
$(function() {
    var audio4 = new Audio('./audio/ost_mindwarning.mp3');
    var audio_state = 0;
    mindwarning.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio4.loop = true;//반복재생
            audio4.volume = 0.5;// 음량 설정
            audio4.currentTime=0;//처음부터 재생
            audio4.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio4.pause();
            audio_state = 0;
        }
    });
})

// sm
$(function() {
    var audio5 = new Audio('./audio/sm_starrynight.mp3');
    var audio_state = 0;
    starrynight[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio5.loop = true;//반복재생
            audio5.volume = 0.5;// 음량 설정
            audio5.currentTime=0;//처음부터 재생
            audio5.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio5.pause();
            audio_state = 0;
        }
    });
    starrynight[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio5.loop = true;//반복재생
            audio5.volume = 0.5;// 음량 설정
            audio5.currentTime=0;//처음부터 재생
            audio5.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio5.pause();
            audio_state = 0;
        }
    });
})

// voice 앨범
$(function() {
    var audio6 = new Audio('./audio/voice_yourscent.mp3');
    var audio_state = 0;
    yourscent.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio6.loop = true;//반복재생
            audio6.volume = 0.5;// 음량 설정
            audio6.currentTime=0;//처음부터 재생
            audio6.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio6.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio7 = new Audio('./audio/voice_underthestarlight.mp3');
    var audio_state = 0;
    underthestarlight.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio7.loop = true;//반복재생
            audio7.volume = 0.5;// 음량 설정
            audio7.currentTime=0;//처음부터 재생
            audio7.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio7.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio8 = new Audio('./audio/voice_sign.mp3');
    var audio_state = 0;
    sign[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio8.loop = true;//반복재생
            audio8.volume = 0.5;// 음량 설정
            audio8.currentTime=0;//처음부터 재생
            audio8.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio8.pause();
            audio_state = 0;
        }
    });
    sign[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio8.loop = true;//반복재생
            audio8.volume = 0.5;// 음량 설정
            audio8.currentTime=0;//처음부터 재생
            audio8.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio8.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio9 = new Audio('./audio/voice_illusion.mp3');
    var audio_state = 0;
    illusion.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio9.loop = true;//반복재생
            audio9.volume = 0.5;// 음량 설정
            audio9.currentTime=0;//처음부터 재생
            audio9.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio9.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio10 = new Audio('./audio/voice_shineonyou.mp3');
    var audio_state = 0;
    shineonyou[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio10.loop = true;//반복재생
            audio10.volume = 0.5;// 음량 설정
            audio10.currentTime=0;//처음부터 재생
            audio10.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio10.pause();
            audio_state = 0;
        }
    });
    shineonyou[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio10.loop = true;//반복재생
            audio10.volume = 0.5;// 음량 설정
            audio10.currentTime=0;//처음부터 재생
            audio10.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio10.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio11 = new Audio('./audio/voice_timepiece.mp3');
    var audio_state = 0;
    timepiece.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio11.loop = true;//반복재생
            audio11.volume = 0.5;// 음량 설정
            audio11.currentTime=0;//처음부터 재생
            audio11.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio11.pause();
            audio_state = 0;
        }
    });
})

// dice 앨범
$(function() {
    var audio12 = new Audio('./audio/dice_dice.mp3');
    var audio_state = 0;
    dice[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio12.loop = true;//반복재생
            audio12.volume = 0.5;// 음량 설정
            audio12.currentTime=0;
            audio12.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio12.pause();
            audio_state = 0;
        }
    });
    dice[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio12.loop = true;//반복재생
            audio12.volume = 0.5;// 음량 설정
            audio12.currentTime=0;
            audio12.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio12.pause();
            audio_state = 0;
        }
    });
    dice[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio12.loop = true;//반복재생
            audio12.volume = 0.5;// 음량 설정
            audio12.currentTime=0;
            audio12.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio12.pause();
            audio_state = 0;
        }
    });
    dice[3].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio12.loop = true;//반복재생
            audio12.volume = 0.5;// 음량 설정
            audio12.currentTime=0;
            audio12.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio12.pause();
            audio_state = 0;
        }
    });
    dice[4].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio12.loop = true;//반복재생
            audio12.volume = 0.5;// 음량 설정
            audio12.currentTime=0;
            audio12.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio12.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio13 = new Audio('./audio/dice_sunshine.mp3');
    var audio_state = 0;
    sunshine[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio13.loop = true;//반복재생
            audio13.volume = 0.5;// 음량 설정
            audio13.currentTime=0;//처음부터 재생
            audio13.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio13.pause();
            audio_state = 0;
        }
    });
    sunshine[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio13.loop = true;//반복재생
            audio13.volume = 0.5;// 음량 설정
            audio13.currentTime=0;//처음부터 재생
            audio13.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio13.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio14 = new Audio('./audio/dice_ontheway.mp3');
    var audio_state = 0;
    ontheway[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio14.loop = true;//반복재생
            audio14.volume = 0.5;// 음량 설정
            audio14.currentTime=0;//처음부터 재생
            audio14.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio14.pause();
            audio_state = 0;
        }
    });
    ontheway[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio14.loop = true;//반복재생
            audio14.volume = 0.5;// 음량 설정
            audio14.currentTime=0;//처음부터 재생
            audio14.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio14.pause();
            audio_state = 0;
        }
    });
    ontheway[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio14.loop = true;//반복재생
            audio14.volume = 0.5;// 음량 설정
            audio14.currentTime=0;//처음부터 재생
            audio14.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio14.pause();
            audio_state = 0;
        }
    });
    ontheway[3].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio14.loop = true;//반복재생
            audio14.volume = 0.5;// 음량 설정
            audio14.currentTime=0;//처음부터 재생
            audio14.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio14.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio15 = new Audio('./audio/dice_lovephobia.mp3');
    var audio_state = 0;
    lovephobia.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio15.loop = true;//반복재생
            audio15.volume = 0.5;// 음량 설정
            audio15.currentTime=0;//처음부터 재생
            audio15.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio15.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio16 = new Audio('./audio/dice_yeowoobi.mp3');
    var audio_state = 0;
    yeowoobi.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio16.loop = true;//반복재생
            audio16.volume = 0.5;// 음량 설정
            audio16.currentTime=0;//처음부터 재생
            audio16.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio16.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio17 = new Audio('./audio/dice_inthewhale.mp3');
    var audio_state = 0;
    inthewhale[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio17.loop = true;//반복재생
            audio17.volume = 0.5;// 음량 설정
            audio17.currentTime=0;//처음부터 재생
            audio17.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio17.pause();
            audio_state = 0;
        }
    });
    inthewhale[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio17.loop = true;//반복재생
            audio17.volume = 0.5;// 음량 설정
            audio17.currentTime=0;//처음부터 재생
            audio17.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio17.pause();
            audio_state = 0;
        }
    });
})

// circle 앨범
$(function() {
    var audio18 = new Audio('./audio/circle_circle.mp3');
    var audio_state = 0;
    circle[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio18.loop = true;//반복재생
            audio18.volume = 0.5;// 음량 설정
            audio18.currentTime=0;//처음부터 재생
            audio18.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio18.pause();
            audio_state = 0;
        }
    });
    circle[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio18.loop = true;//반복재생
            audio18.volume = 0.5;// 음량 설정
            audio18.currentTime=0;//처음부터 재생
            audio18.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio18.pause();
            audio_state = 0;
        }
    });
    circle[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio18.loop = true;//반복재생
            audio18.volume = 0.5;// 음량 설정
            audio18.currentTime=0;//처음부터 재생
            audio18.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio18.pause();
            audio_state = 0;
        }
    });
    circle[3].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio18.loop = true;//반복재생
            audio18.volume = 0.5;// 음량 설정
            audio18.currentTime=0;//처음부터 재생
            audio18.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio18.pause();
            audio_state = 0;
        }
    });
    circle[4].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio18.loop = true;//반복재생
            audio18.volume = 0.5;// 음량 설정
            audio18.currentTime=0;//처음부터 재생
            audio18.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio18.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio19 = new Audio('./audio/circle_cough.mp3');
    var audio_state = 0;
    cough[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio19.loop = true;//반복재생
            audio19.volume = 0.5;// 음량 설정
            audio19.currentTime=0;//처음부터 재생
            audio19.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio19.pause();
            audio_state = 0;
        }
    });
    cough[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio19.loop = true;//반복재생
            audio19.volume = 0.5;// 음량 설정
            audio19.currentTime=0;//처음부터 재생
            audio19.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio19.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio20 = new Audio('./audio/circle_rainonme.mp3');
    var audio_state = 0;
    rainonme.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio20.loop = true;//반복재생
            audio20.volume = 0.5;// 음량 설정
            audio20.currentTime=0;//처음부터 재생
            audio20.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio20.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio21 = new Audio('./audio/circle_caramel.mp3');
    var audio_state = 0;
    caramel[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio21.loop = true;//반복재생
            audio21.volume = 0.5;// 음량 설정
            audio21.currentTime=0;//처음부터 재생
            audio21.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio21.pause();
            audio_state = 0;
        }
    });
    caramel[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio21.loop = true;//반복재생
            audio21.volume = 0.5;// 음량 설정
            audio21.currentTime=0;//처음부터 재생
            audio21.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio21.pause();
            audio_state = 0;
        }
    });
    caramel[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio21.loop = true;//반복재생
            audio21.volume = 0.5;// 음량 설정
            audio21.currentTime=0;//처음부터 재생
            audio21.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio21.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio22 = new Audio('./audio/circle_anywhere.mp3');
    var audio_state = 0;
    anywhere[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio22.loop = true;//반복재생
            audio22.volume = 0.5;// 음량 설정
            audio22.currentTime=0;//처음부터 재생
            audio22.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio22.pause();
            audio_state = 0;
        }
    });
    anywhere[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio22.loop = true;//반복재생
            audio22.volume = 0.5;// 음량 설정
            audio22.currentTime=0;//처음부터 재생
            audio22.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio22.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio23 = new Audio('./audio/circle_paradise.mp3');
    var audio_state = 0;
    paradise[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio23.loop = true;//반복재생
            audio23.volume = 0.5;// 음량 설정
            audio23.currentTime=0;//처음부터 재생
            audio23.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio23.pause();
            audio_state = 0;
        }
    });
    paradise[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio23.loop = true;//반복재생
            audio23.volume = 0.5;// 음량 설정
            audio23.currentTime=0;//처음부터 재생
            audio23.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio23.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio24 = new Audio('./audio/circle_expectations.mp3');
    var audio_state = 0;
    expectations[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio24.loop = true;//반복재생
            audio24.volume = 0.5;// 음량 설정
            audio24.currentTime=0;//처음부터 재생
            audio24.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio24.pause();
            audio_state = 0;
        }
    });
    expectations[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio24.loop = true;//반복재생
            audio24.volume = 0.5;// 음량 설정
            audio24.currentTime=0;//처음부터 재생
            audio24.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio24.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio25 = new Audio('./audio/circle_noparachute.mp3');
    var audio_state = 0;
    noparachute[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio25.loop = true;//반복재생
            audio25.volume = 0.5;// 음량 설정
            audio25.currentTime=0;//처음부터 재생
            audio25.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio25.pause();
            audio_state = 0;
        }
    });
    noparachute[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio25.loop = true;//반복재생
            audio25.volume = 0.5;// 음량 설정
            audio25.currentTime=0;//처음부터 재생
            audio25.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio25.pause();
            audio_state = 0;
        }
    });
    noparachute[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio25.loop = true;//반복재생
            audio25.volume = 0.5;// 음량 설정
            audio25.currentTime=0;//처음부터 재생
            audio25.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio25.pause();
            audio_state = 0;
        }
    });
    noparachute[3].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio25.loop = true;//반복재생
            audio25.volume = 0.5;// 음량 설정
            audio25.currentTime=0;//처음부터 재생
            audio25.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio25.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio26 = new Audio('./audio/circle_always.mp3');
    var audio_state = 0;
    always[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio26.loop = true;//반복재생
            audio26.volume = 0.5;// 음량 설정
            audio26.currentTime=0;//처음부터 재생
            audio26.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio26.pause();
            audio_state = 0;
        }
    });
    always[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio26.loop = true;//반복재생
            audio26.volume = 0.5;// 음량 설정
            audio26.currentTime=0;//처음부터 재생
            audio26.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio26.pause();
            audio_state = 0;
        }
    });
    always[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio26.loop = true;//반복재생
            audio26.volume = 0.5;// 음량 설정
            audio26.currentTime=0;//처음부터 재생
            audio26.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio26.pause();
            audio_state = 0;
        }
    });
})

// 일본 앨범
$(function() {
    var audio27 = new Audio('./audio/japan_uroco.mp3');
    var audio_state = 0;
    uroco.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio27.loop = true;//반복재생
            audio27.volume = 0.5;// 음량 설정
            audio27.currentTime=0;//처음부터 재생
            audio27.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio27.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio28 = new Audio('./audio/japan_beauty.mp3');
    var audio_state = 0;
    beauty.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio28.loop = true;//반복재생
            audio28.volume = 0.5;// 음량 설정
            audio28.currentTime=0;//처음부터 재생
            audio28.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio28.pause();
            audio_state = 0;
        }
    });
})

// flow 앨범
$(function() {
    var audio29 = new Audio('./audio/flow_beatdrum.mp3');
    var audio_state = 0;
    beatdrum[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio29.loop = true;//반복재생
            audio29.volume = 0.5;// 음량 설정
            audio29.currentTime=0;//처음부터 재생
            audio29.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio29.pause();
            audio_state = 0;
        }
    });
    beatdrum[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio29.loop = true;//반복재생
            audio29.volume = 0.5;// 음량 설정
            audio29.currentTime=0;//처음부터 재생
            audio29.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio29.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio30 = new Audio('./audio/flow_hola.mp3');
    var audio_state = 0;
    hola[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio30.loop = true;//반복재생
            audio30.volume = 0.5;// 음량 설정
            audio30.currentTime=0;//처음부터 재생
            audio30.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio30.pause();
            audio_state = 0;
        }
    });
    hola[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio30.loop = true;//반복재생
            audio30.volume = 0.5;// 음량 설정
            audio30.currentTime=0;//처음부터 재생
            audio30.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio30.pause();
            audio_state = 0;
        }
    });
    hola[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio30.loop = true;//반복재생
            audio30.volume = 0.5;// 음량 설정
            audio30.currentTime=0;//처음부터 재생
            audio30.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio30.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio31 = new Audio('./audio/flow_maestro.mp3');
    var audio_state = 0;
    maestro[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio31.loop = true;//반복재생
            audio31.volume = 0.5;// 음량 설정
            audio31.currentTime=0;//처음부터 재생
            audio31.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio31.pause();
            audio_state = 0;
        }
    });
    maestro[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio31.loop = true;//반복재생
            audio31.volume = 0.5;// 음량 설정
            audio31.currentTime=0;//처음부터 재생
            audio31.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio31.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio32 = new Audio('./audio/flow_shapeofmyheart.mp3');
    var audio_state = 0;
    shapeofmyheart.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio32.loop = true;//반복재생
            audio32.volume = 0.5;// 음량 설정
            audio32.currentTime=0;//처음부터 재생
            audio32.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio32.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio33 = new Audio('./audio/flow_focus.mp3');
    var audio_state = 0;
    focus.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio33.loop = true;//반복재생
            audio33.volume = 0.5;// 음량 설정
            audio33.currentTime=0;//처음부터 재생
            audio33.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio33.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio34 = new Audio('./audio/flow_allday.mp3');
    var audio_state = 0;
    allday[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio34.loop = true;//반복재생
            audio34.volume = 0.5;// 음량 설정
            audio34.currentTime=0;//처음부터 재생
            audio34.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio34.pause();
            audio_state = 0;
        }
    });
    allday[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio34.loop = true;//반복재생
            audio34.volume = 0.5;// 음량 설정
            audio34.currentTime=0;//처음부터 재생
            audio34.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio34.pause();
            audio_state = 0;
        }
    });
    allday[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio34.loop = true;//반복재생
            audio34.volume = 0.5;// 음량 설정
            audio34.currentTime=0;//처음부터 재생
            audio34.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio34.pause();
            audio_state = 0;
        }
    });
    allday[3].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio34.loop = true;//반복재생
            audio34.volume = 0.5;// 음량 설정
            audio34.currentTime=0;//처음부터 재생
            audio34.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio34.pause();
            audio_state = 0;
        }
    });
    allday[4].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio34.loop = true;//반복재생
            audio34.volume = 0.5;// 음량 설정
            audio34.currentTime=0;//처음부터 재생
            audio34.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio34.pause();
            audio_state = 0;
        }
    });
})

// 타가수
$(function() {
    var audio35 = new Audio('./audio/other_asitwas.mp3');
    var audio_state = 0;
    asitwas[0].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio35.loop = true;//반복재생
            audio35.volume = 0.5;// 음량 설정
            audio35.currentTime=0;//처음부터 재생
            audio35.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio35.pause();
            audio_state = 0;
        }
    });
    asitwas[1].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio35.loop = true;//반복재생
            audio35.volume = 0.5;// 음량 설정
            audio35.currentTime=0;//처음부터 재생
            audio35.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio35.pause();
            audio_state = 0;
        }
    });
    asitwas[2].addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio35.loop = true;//반복재생
            audio35.volume = 0.5;// 음량 설정
            audio35.currentTime=0;//처음부터 재생
            audio35.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio35.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio36 = new Audio('./audio/other_sung.mp3');
    var audio_state = 0;
    sung.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio36.loop = true;//반복재생
            audio36.volume = 0.5;// 음량 설정
            audio36.currentTime=0;//처음부터 재생
            audio36.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio36.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio37 = new Audio('./audio/other_rainyblue.mp3');
    var audio_state = 0;
    rainyblue.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio37.loop = true;//반복재생
            audio37.volume = 0.5;// 음량 설정
            audio37.currentTime=0;//처음부터 재생
            audio37.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio37.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio38 = new Audio('./audio/other_lielielie.mp3');
    var audio_state = 0;
    lielielie.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio38.loop = true;//반복재생
            audio38.volume = 0.5;// 음량 설정
            audio38.currentTime=0;//처음부터 재생
            audio38.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio38.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio39 = new Audio('./audio/other_bibi.mp3');
    var audio_state = 0;
    bibi.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio39.loop = true;//반복재생
            audio39.volume = 0.5;// 음량 설정
            audio39.currentTime=0;//처음부터 재생
            audio39.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio39.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio40 = new Audio('./audio/other_iu.mp3');
    var audio_state = 0;
    iu.addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio40.loop = true;//반복재생
            audio40.volume = 0.5;// 음량 설정
            audio40.currentTime=0;//처음부터 재생
            audio40.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio40.pause();
            audio_state = 0;
        }
    });
})