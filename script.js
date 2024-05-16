const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.home-text,.home-img,.container1,.sidebar-box',{delay:300});
// sr.reveal ('.home-img,',{delay:400});
// sr.reveal ('.container',{delay:400});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text,.col-lg-8 p,.col-lg-8 img',{delay:400});

sr.reveal ('.middle-text,.menu-text,.cart-text,.col-lg-8 h3,.block-21,.sidebar-box p',{});
sr.reveal ('.rowmenu-btn,.menu-content,.product,.flex-box',{delay:300});

sr.reveal ('.history-content,.contact',{delay:300});

let bigImg = document.querySelector('.big-img img');
function showImg(pic) {
    bigImg.src = pic;
}

