let days = document.querySelector(".days .number");
let hours = document.querySelector(".hours .number");
let minutes = document.querySelector(".minutes .number");
let secondes = document.querySelector(".seconds .number");


let daysValue;
let hoursValue;
let minutesValue;
let secondesValue;

setInterval(() => {
  let date = new Date();
  let newYear = new Date("Nov 08 2023");
  let result = newYear - date;
  daysValue = result / 1000 / 60 / 60 / 24;

  hoursValue = ((result / 1000 / 60 / 60 / 24) % 1) * 24;

  minutesValue = (hoursValue % 1) * 60;

  secondesValue = (minutesValue % 1) * 60;
  console.log(Math.floor(secondesValue))
  days.innerHTML = Math.floor(daysValue);
  hours.innerHTML = Math.floor(hoursValue);
  minutes.innerHTML = Math.floor(minutesValue);
  secondes.innerHTML = Math.floor(secondesValue);
}, 1000);
