const menu = document.querySelector('.nav_open')
const menuBtn = document.querySelector('.m_nav')
const header = document.querySelector('header')
const logo = document.querySelector('.header_t h1 a')
const close = document.querySelector('.nav_wrap li .close')
const navBtn = document.querySelectorAll('.nav_wrap li > a')
const video = document.querySelector('#mv_slide video')
const album = document.querySelector('#album')
const body = document.querySelector('body,html')
const section = document.querySelectorAll('.section')

let boolean = true

header.style.transition = 'all 0.3s linear'
window.addEventListener('scroll',function(){
// console.log(window.pageYOffset)
    if(window.pageYOffset > album.offsetTop-100){
        // for(let i of header){i.style.backgroundColor = 'rgba(255,255,255,0.85)'}
        // for(let i of logo){i.style.backgroundImage = 'url(../images/logo/logo_jg1.svg)'}
        header.style.backgroundColor = 'rgba(255,255,255,0.9)'
        logo.style.backgroundImage = 'url(../images/logo/logo_jg1.svg)'
        menuBtn.children[0].style.backgroundColor = 'rgba(159, 193, 228,1)'
        menuBtn.children[1].style.backgroundColor = 'rgba(159, 193, 228,1)'
        menuBtn.children[2].style.backgroundColor = 'rgba(159, 193, 228,1)'
        video.muted = true;  //음소거
    }else{
        // for(let i of header){i.style.backgroundColor = 'none'}
        // for(let i of logo){i.style.backgroundImage = 'url(../images/logo/logo_jw1.svg)'}
        header.style.backgroundColor = 'rgba(255,255,255,0)'
        logo.style.backgroundImage = 'url(../images/logo/logo_jw1.svg)'
        menuBtn.children[0].style.backgroundColor = 'rgba(255, 255, 255,1)'
        menuBtn.children[1].style.backgroundColor = 'rgba(255, 255, 255,1)'
        menuBtn.children[2].style.backgroundColor = 'rgba(255, 255, 255,1)'
        video.muted = false;  //음소거
    }
})

function section_event(a){
    section[a].style.transition = 'all 0.3s linear'
    window.addEventListener('scroll',function(){
        if(window.pageYOffset > section[a].offsetTop-600){
            section[a].style.opacity = '1'
            section[a].style.transform = 'translateY(0%)'
        }else{
            section[a].style.opacity = '0'
            section[a].style.transform = 'translateY(10%)'
        }
    })
}
section_event(1)
section_event(2)
section_event(3)
section_event(4)


menu.style.transition = 'all 1s ease';
menuBtn.addEventListener('click',function(e){
    e.preventDefault()
    this.style.display = 'none'
    logo.style.display = 'none'
    menu.style.transform = 'translateX(0)';
    // 스크롤 고정
    // $('body').on('scroll touchmove mousewheel', function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    // });
})
close.addEventListener('click',function(e){
    e.preventDefault()
    menu.style.transform = 'translateX(100%)';
    menuBtn.style.display = 'flex'
    logo.style.display = 'inline-block'
    // 스크롤 고정 해제
    // $('body').off('scroll touchmove mousewheel');
})
// navBtn.addEventListener('click',function(e){
//     e.preventDefault()
//     menu.style.transform = 'translateX(100%)';
// })