const header = document.querySelector("header");

window.addEventListener("scroll", function () {
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

sr.reveal('.home-text,.home-img,.container1,.sidebar-box,.form-box', { delay: 300 });
// sr.reveal ('.home-img,',{delay:400});
// sr.reveal ('.container',{delay:400});

sr.reveal('.about-img', {});
sr.reveal('.about-text,.col-lg-8 p,.col-lg-8 img', { delay: 400 });

sr.reveal('.middle-text,.menu-text,.cart-text,.col-lg-8 h3,.block-21,.sidebar-box p,.contact-content', {});
sr.reveal('.rowmenu-btn,.menu-content,.product,.flex-box,.contact-text,.row', { delay: 300 });

sr.reveal('.history-content,.contact', { delay: 300 });

let bigImg = document.querySelector('.big-img img');
function showImg(pic) {
    bigImg.src = pic;
}


$(document).ready(function () {
    $('.btn-plus').click(function () {
        var input = $(this).siblings('input');
        var value = parseInt(input.val());
        input.val(value + 1);
        updateTotal();
    });

    $('.btn-minus').click(function () {
        var input = $(this).siblings('input');
        var value = parseInt(input.val());
        if (value > 1) {
            input.val(value - 1);
            updateTotal();
        }
    });

    $('.btn-remove').click(function () {
        if (confirm('Hapus Data Ini?')) {
            $(this).closest('tr').remove();
            updateTotal();
        }
    });

    function updateTotal() {
        var total = 0;
        $('tbody tr').each(function () {
            var price = parseInt($(this).find('td').eq(1).text().replace('Rp. ', '').replace(',', ''));
            var qty = parseInt($(this).find('input').val());
            total += price * qty;
            $(this).find('td').eq(3).text('Rp. ' + (price * qty).toLocaleString('id-ID'));
        });
        $('#total-price').text('Rp. ' + total.toLocaleString('id-ID'));
    }
});


// JS LOGINN 

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " pink-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " pink-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function login2() {
    var email = document.getElementById("email").value;

    // Periksa apakah input email tidak kosong
    if (email.trim() === '') {
        alert("Please enter your email.");
        return; // Jika kosong, hentikan proses login
    }

    // Cek apakah email mengandung '@admin'
    if (email.includes('@admin')) {
        // Jika iya, redirect ke halaman admin
        window.location.href = "dashboard.html";
    } else {
        // Jika tidak, redirect ke halaman pengguna biasa
        window.location.href = "user.html";
    }
}