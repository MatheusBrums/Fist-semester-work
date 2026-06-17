
window.onload = () => {
    add_planted_trees()
    show_banner()
}


//
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let s1 = document.getElementById("s1")
s1.addEventListener('mouseenter', entrou1)
s1.addEventListener('mouseleave', saiu1)

function entrou1() {
    img1.style.display = "none"
    img2.style.display = "inline-block"
}
function saiu1() {



    setTimeout(() => {
        img2.style.display = "none"
        img1.style.display = "inline-block"
    }, 180)

}


//


function add_planted_trees(params) {

   function timer() {
    return Math.floor(Math.random() * 900) + 500
   }
    setInterval(() => {
       
        let increment = Math.floor(Math.random() * 2) + 1
        console.log(increment);
        
        let number = Number(document.getElementById('span_planted_trees').innerText)
        let new_number = number + increment
        document.getElementById('span_planted_trees').innerText = new_number
        
    }, timer())

}

//

function show_banner() {

    setTimeout(() => {
        let banner = document.getElementById("alert-banner")
    banner.style.display = "flex"
    }, 800)
}
