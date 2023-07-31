// var box      = document.getElementById("box");
// var boxAfter = window.getComputedStyle(box, "::after");
// console.log(boxAfter.backgroundColor);// getting the background color
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let progress = document.querySelector(".progress");
let before = document.querySelector(".before");
let after = document.querySelector(".after");
let spans = document.querySelectorAll("span");
console.log(left);
let i = 0;
before.style.width = "0";
right.onclick = function () {
  i++;

  if (i >= 1) {
    left.style.opacity = "1";
  } else {
    left.style.opacity = ".5";
  }
  if (i >= 4) {
    right.style.opacity = ".5";
  } else {
    right.style.opacity = "1";
  }
  if(i >= 1 && i <= 4){
      before.style.width = `${parseInt(before.style.width) + 25}%`
      
  }

  //   else if(){

  //   }
  //   if (i >= 1) {
  //     left.style = "opacity : 1 !important";
  //     left.style.cursor = "pointer";
  //     right.style.opacity = "1";
  //     left.onclick = function () {
  //       before.style.width = `${parseInt(before.style.width) - 25}%`;
  //       i--;
  //     };
  //   }
  //   if (i <= 4) {
  //     right.style.opacity = "1";
  //     let iElement = document.createElement("i");
  //     iElement.className = "fa-solid fa-check fa-fw";
  //     spans[i].children[0].remove();
  //     spans[i].append(iElement);
  //     spans[i].children[0].style.color = "green";
  //     if (i == 4) {
  //       right.style.cursor = "unset";
  //       before.style.width = `${parseInt(before.style.width) + 25}%`;
  //       spans[i].style.borderColor = "green";
  //       spans[i].style.color = "green";
  //     } else {
  //       before.style.width = `${parseInt(before.style.width) + 25}%`;
  //       spans[i].style.borderColor = "green";
  //     }
  //   } else {
  //     i--;
  //   }
};
