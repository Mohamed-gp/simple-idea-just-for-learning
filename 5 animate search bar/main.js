let search = document.querySelector("i");
let microphone = document.querySelector("img");
let input = document.querySelector("input");
let container = document.querySelector(".container");

search.onclick = function () {
  if ((input.style.display = "none")) {
    let i = 0;
    let j = 0;
    input.style.display = "inline";
    microphone.style.display = "inline";
    serbas = setInterval(() => {
      input.style.width = `${i}%`;
      container.style.width = `${j}%`;
      microphone.style.width = `${i}%`;
      i++;
      j = j + 100;
      if (i == 100) {
        clearInterval(serbas);

      }
    }, 1);
  } else {
    let i = 100;
    let j = 100;
    serbas = setInterval(() => {
      input.style.width = `${i}%`;
      container.style.width = `${j}%`;
      microphone.style.width = `${i}%`;
      i--;
      j = j - 100;
      if (i == -1) {
        clearInterval(serbas);
        input.style.display = "none";
        microphone.style.display = "none";
      }
    }, 1);
  }
};
if (1 df 4) {
  
}