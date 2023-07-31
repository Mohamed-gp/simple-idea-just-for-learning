let down = document.getElementById("down")
let up = document.getElementById("up")
let menu = document.querySelector("ul")
let socialText = document.querySelector(".social")
let lis = document.querySelectorAll("li")
let container = document.querySelector(".container")
console.log(lis)

down.onclick = function(){
  down.style.display = "none"
  up.style.display = "inline"
  menu.style.display = "inline"
}
up.onclick = function(){
  up.style.display = "none"
  down.style.display = "inline"
  menu.style.display = "none"
}

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click",function(){
    // socialText.innerHTML = ''
    socialText.innerHTML = ""
    socialText.append(lis[i].cloneNode(true))
    // socialText.remove()
  })
}
