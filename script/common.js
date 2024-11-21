const menu = document.querySelector('.nav_open')
const menuBtn = document.querySelector('.m_nav')
const header = document.querySelector('header')
const logo = document.querySelector('.header_t h1 a')
const close = document.querySelector('.nav_wrap li .close')
const navBtn = document.querySelectorAll('.nav_wrap li > a')
const album = document.querySelector('#album')
const body = document.querySelector('body')

let boolean = true

// $('#fullpage').fullpage({
//     autoScrolling:true,
//     scrillHorizontally:true,
//     onLeave: function(origin, destination, direction, trigger){
//         if(destination>=3){
//             console.log('true')
//             header.style.backgroundColor = 'rgba(255,255,255,0.9)'
//             logo.style.backgroundImage = 'url(../images/logo/logo_jg1.svg)'
//             menuBtn.children[0].style.backgroundColor = 'rgba(159, 193, 228,1)'
//             menuBtn.children[1].style.backgroundColor = 'rgba(159, 193, 228,1)'
//             menuBtn.children[2].style.backgroundColor = 'rgba(159, 193, 228,1)'
//         }else {
//             header.style.background = 'none'
//             logo.style.backgroundImage = 'url(../images/logo/logo_jw1.svg)'
//             menuBtn.children[0].style.backgroundColor = 'rgba(255, 255, 255,1)'
//             menuBtn.children[1].style.backgroundColor = 'rgba(255, 255, 255,1)'
//             menuBtn.children[2].style.backgroundColor = 'rgba(255, 255, 255,1)'
//         }
//     }    
// })

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
    }else{
        // for(let i of header){i.style.backgroundColor = 'none'}
        // for(let i of logo){i.style.backgroundImage = 'url(../images/logo/logo_jw1.svg)'}
        header.style.backgroundColor = 'rgba(255,255,255,0)'
        logo.style.backgroundImage = 'url(../images/logo/logo_jw1.svg)'
        menuBtn.children[0].style.backgroundColor = 'rgba(255, 255, 255,1)'
        menuBtn.children[1].style.backgroundColor = 'rgba(255, 255, 255,1)'
        menuBtn.children[2].style.backgroundColor = 'rgba(255, 255, 255,1)'
    }
})

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