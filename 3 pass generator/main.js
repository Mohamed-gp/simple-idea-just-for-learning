let input = document.querySelector(".input")
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Text copied to clipboard successfully: ", text);
      })
      .catch((err) => {
        console.error("Unable to copy to clipboard: ", err);
      });
  }
let submit = document.querySelector(".submit")
let select = document.querySelector("select")
let copy = document.querySelector(".copy")



let password;
submit.onclick = function(e){
    password = ''
    for (let i = 0; i < select.value; i++) {

            password = `${password}${String.fromCharCode(Math.floor(Math.random() * 80) + 35)}`
        
        
    }
    
    input.value = password
}

copy.onclick = function () {
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand('copy')
  // document.execCommand("serbas")
};
