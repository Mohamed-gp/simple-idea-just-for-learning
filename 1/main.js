let stars = document.querySelectorAll(".stars > i")
let iconsContainer = document.querySelector(".icons")
let icons = document.querySelectorAll(".container .icons > i")

for (let i = 0; i < icons.length; i++) {
    icons[i].style.display = "none" 
}
icons[0].style.display = "inline"
stars[0].style.color = "yellow"




for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click",function(){
        for (let j = 0; j < 5; j++) {
            stars[j].style.color = "aliceblue"
        }
        for (let k = 0; k <= i; k++) {
            stars[k].style.color = "yellow"
            
        }
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = "none"
        }
        icons[i].style = "display: inline;animation: move .1s linear forwards;"
        
    })
    
}