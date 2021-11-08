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



const cursor = document.getElementById("cursor");

window.addEventListener("mousemove", mouseMoveEvent)

//update the cursor position based on the mouse position
function mouseMoveEvent(e) {
  cursor.style.left = e.clientX  - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
  cursor.style.opacity = 1;
}

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
