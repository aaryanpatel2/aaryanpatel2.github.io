let menuIcon = document.querySelector('#menu-icon');
let navabar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let syButton = document.querySelector('#sy-btn');
let nbaButton = document.querySelector('#nba-btn');
let todoButton = document.querySelector('#todo-btn');
let loginButton = document.querySelector('#login-btn');
let first = document.querySelector('.first');
let bball = document.getElementById('bball');
let highlight = document.getElementById("highlight")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add
                ('active')
            })
        }
    })
}

syButton.onclick = () => {
    window.open("https://github.com/aaryanpatel2/SwitchSynonyms")
}

nbaButton.onclick = () => {
    window.open("https://github.com/aaryanpatel2/nbaliveslack")
}

todoButton.onclick = () => {
    window.open("https://github.com/aaryanpatel2/toeasytodo")
}

loginButton.onclick = () => {
    window.open("https://github.com/aaryanpatel2/roomiematch-login")
}

function toggleBBall() {
    var bball = document.getElementById("bball");
    var display = getComputedStyle(bball).display;

    if (display == "none") {
            bball.style.display = "flex";
    } else {
            bball.style.display = "none";
    }
}

first.onclick = () => {
    toggleBBall();
}

bball.onclick = () => {
    toggleBBall();
}

contact.onclick = () => {
    document.getElementById("highlight").style.boxShadow = "0px 1px 5px 9px white";
}

highlight.onclick = () => {
    highlight.style.boxShadow = "";
}




menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navabar.classList.toggle('active');
}