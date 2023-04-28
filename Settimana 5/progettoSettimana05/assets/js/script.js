let myNavBar = document.getElementById('nav_bar1');
window.onscroll = function () { 
    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500 ) {
        myNavBar.classList.add("nav-colored");
        myNavBar.classList.remove("nav-transparent");
    } 
    else {
        myNavBar.classList.add("nav-transparent");
        myNavBar.classList.remove("nav-colored");
    }
}


let m = document.querySelectorAll("g[stroke-linecap='butt']")

setInterval(()=> {
    let random = Math.round(Math.random() * m.length -1)
    m[random].classList.toggle("invisible") 
}, 30)


