let right = document.querySelector(".right");
let left = document.querySelector(".left");
let before = document.querySelector(".before");
let spans = document.querySelectorAll("span");
let skills = document.querySelectorAll(".progress p:first-of-type");
let arrow = document.querySelectorAll(".progress p:last-of-type");
let congratulation = document.querySelector(".congratulations")
let i = 0;

before.style.width = "0";
right.onclick = function () {
  if (parseInt(before.style.width) == 0) {
    i++;
    left.style.opacity = "1";
    before.style.width = `${parseInt(before.style.width) + 25}%`;
    spans[i].children[0].remove();
    let iElement = document.createElement("i");
    iElement.className = "fa-solid fa-check fa-fw";
    iElement.style.color = "green";
    spans[i].prepend(iElement);
    spans[i].style.borderColor = "green";
    left.style.cursor = "pointer";
    skills[i].style.backgroundColor = "green";
    arrow[i].style.borderColor = "green transparent transparent transparent";
  } else if (
    parseInt(before.style.width) > 0 &&
    parseInt(before.style.width) < 100
  ) {
    i++;
    before.style.width = `${parseInt(before.style.width) + 25}%`;
    spans[i].children[0].remove();
    let iElement = document.createElement("i");
    iElement.className = "fa-solid fa-check fa-fw";
    iElement.style.color = "green";
    spans[i].prepend(iElement);
    skills[i].style.backgroundColor = "green";
    arrow[i].style.borderColor = "green transparent transparent transparent";
    spans[i].style.borderColor = "green";
    if (parseInt(before.style.width) == 100) {
      right.style.opacity = ".5";
      right.style.cursor = "unset";
      skills[i].style.backgroundColor = "green";
      arrow[i].style.borderColor = "green transparent transparent transparent";

    }
  }
  if (parseInt(before.style.width) == 100) {
    congratulation.style.display = "block"
    document.querySelector(".title").style.marginBottom = "20px"
  }

};

left.onclick = function () {
  if (parseInt(before.style.width) > 0 && parseInt(before.style.width) <= 100) {
    before.style.width = `${parseInt(before.style.width) - 25}%`;
    spans[i].children[0].remove();
    let iElement = document.createElement("i");
    iElement.className = "fa-solid fa-xmark fa-fw";
    spans[i].prepend(iElement);
    skills[i].style.backgroundColor = "rgba(159, 210, 255, 0.493)";
    arrow[i].style.borderColor = "rgba(159, 210, 255, 0.493) transparent transparent transparent";
    spans[i].style.borderColor = "rgba(159, 210, 255, 0.493)";
    i--;
    if (parseInt(before.style.width) == 0) {
      left.style.opacity = ".5";
      left.style.cursor = "unset";
      right.style.opacity = "1";
      right.style.cursor = "pointer";
    }
  }
  if (parseInt(before.style.width) <= 100) {
    congratulation.style.display = "none"
  }
};
