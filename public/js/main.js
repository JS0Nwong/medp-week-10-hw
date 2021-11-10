const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");
const logoReverse = document.querySelectorAll(".logo-reverse");

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, index)=>{
            setTimeout(()=>{
                span.classList.add("active");
            },(index+1)*400);
        });

        setTimeout(()=>{
            logoSpan.forEach((span, index)=>{
                setTimeout(()=>{
                    span.classList.remove("active");
                    span.classList.add("fade");
                },(index+1)*50);
            });
        }, 4500);
        
        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 5300);
            
    });
});



// const cursor = document.getElementById("cursor");

// window.addEventListener("mousemove", mouseMoveEvent)

// //update the cursor position based on the mouse position
// function mouseMoveEvent(e) {
//   cursor.style.left = e.clientX  - cursor.offsetWidth / 2 + "px";
//   cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
//   cursor.style.opacity = 1;
// }

const scrollBar = document.getElementById("scrollbar");

// updates the height of the scrollbar based how far the user has scrolled
// window.onscroll = function() {
//     scrollBar.style.height = window.pageYOffset + "px";
// }

//page distortion
// const content = document.getElementById("distort");
// let currentPos = window.pageYOffset;

// const callDistortion = function() {
//     const newPos = window.pageYOffset;
//     const diff = newPos - currentPos;
//     const speed = diff * 0.35;

//     content.style.transform = "skewY(" + speed + "deg)";
//     currentPos = newPos;
//     requestAnimationFrame(callDistortion);
// }
// callDistortion();
 
// const darkMode = document.getElementById("dark-toggle");

// darkMode.addEventListener("click", function(){
//     document.body.classList.toggle("dark-mode-toggle");
//     document.querySelector(".links-list").classList.toggle(".links-list-dark");
// })

const linkItems = [...document.querySelectorAll(".menu-item")];

linkItems.forEach(item => {
    let word = item.children[0].children[0].innerText.split("");
    item.children[0].innerHTML = "";
    word.forEach((letter, index) => {
        console.log(letter, index);
        item.children[0].innerHTML += `<span style = "--index: ${index}">${letter}</span>`;
    });
    let clone = item.children[0].cloneNode(true);
    clone.style.position = "absolute";
    clone.style.left = "0";
    clone.style.top = "0";

    item.appendChild(clone);
});

let title = document.querySelector(".title");
let counter = document.querySelector(".counter");
let next = document.getElementById("next");
let prev = document.getElementById("previous");
let worksCursor = document.getElementById("works-cursor");
let image = document.querySelector(".image");
let tech = document.querySelector(".tech-used");
let description = document.querySelector(".description");
let imageWrapper = document.querySelector(".image-wrap");
let imgCursor = document.getElementById("img-cursor");

let myWorks = [
    {title: "Pokey.dex", technology: "HTML5 CSS3 JavaScript", description: "A simple pokedex application that allows users to search for pokemon by name and get information about the pokemon."},
    {title: "Portfolio", technology: "HTML5 CSS3 JavaScript Express Node.js", description: "My personal portfolio website that houses all my works"},
    {title: "Web Production 2", technology: "HTML5 CSS3 JavaScript Express Node.js", description: "My collection of works for Web Production 2 at Hunter College"},
    {title: "Web Production 1", technology: "HTML5 CSS3 JavaScript Photoshop Illustrator", description: "My collection of works for Web Production 1 at Hunter College"},
    {title: "Software And Design Analysis 3", technology: "C++", description: "My collection of works for Software And Design Analysis 3 at Hunter College"},
];

counter.querySelector('p').innerText = "1/5";
title.querySelector('p').innerText = myWorks[0].title;
tech.querySelector('p').innerText = myWorks[0].technology;
image.style.backgroundImage = `url(./img/1.jpg)`;

window.addEventListener('mousemove', (e)=>{
    worksCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    imgCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

next.addEventListener("mouseenter", () => {
    worksCursor.classList.remove('left');
    worksCursor.classList.add('right');
});
next.addEventListener("mouseleave", () => {
    removeCursor(worksCursor);
});

prev.addEventListener("mouseenter", () => {
    worksCursor.classList.remove('right');
    worksCursor.classList.add('left');
});
prev.addEventListener("mouseleave", () => {
    removeCursor(worksCursor);
});

imageWrapper.addEventListener("mouseenter", () => {
    removeCursor(worksCursor);
    imgCursor.classList.add('active');
});
imageWrapper.addEventListener("mouseleave", () => {
    imgCursor.classList.remove('active');
});


function removeCursor(element)
{
    element.classList.remove('left');
    element.classList.remove('right');
}

next.addEventListener("click", ()=>{
    let current = parseInt(counter.querySelector('p').innerText.split("/")[0]);
    let next = current + 1;
    if(next > myWorks.length){
        next = 1;
    }
    counter.querySelector('p').innerText = `${next}/5`;
    title.querySelector('p').innerText = myWorks[next-1].title;
    tech.querySelector('p').innerText = myWorks[next-1].technology;
    image.style.backgroundImage = `url(./img/${next}.jpg)`;
});

prev.addEventListener("click", ()=>{
    let current = parseInt(counter.querySelector('p').innerText.split("/")[0]);
    console.log(current);
    let prev = current - 1;
    if(prev < 1){
        prev = myWorks.length;
    }
    counter.querySelector('p').innerText = `${prev}/5`;
    title.querySelector('p').innerText = myWorks[prev-1].title;
    tech.querySelector('p').innerText = myWorks[prev-1].technology;
    image.style.backgroundImage = `url(./img/${prev}.jpg)`;
}); 
