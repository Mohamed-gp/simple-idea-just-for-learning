let allNumbers = document.querySelectorAll(".number")
console.log(allNumbers)
window.onload = function(){
    allNumbers.forEach(function(el,index,arr){
        let keep = +el.innerHTML
        el.innerHTML = "0"
        let iterat = setInterval(() => {
            el.innerHTML = +el.innerHTML + 1
            if(el.innerHTML == keep){
                clearInterval(iterat)
            }
        }, 50);
        
    })
}