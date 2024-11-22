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
    direction: 'horizontal',
    loop:true,
    spaceBetween: 10,
    slidesOffsetBefore: 20,
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
            
            tab_title.forEach(function(t,i){
                t.addEventListener('click', function(e){
                    e.preventDefault()
                    for(let i of tab_title){i.classList.remove('active')}
                    t.classList.add('active')
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