
const divImage = document.querySelectorAll(".container div");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


let current = 0;

let func = () => {
  divImage[current].classList.remove("active");
  current++;

 if(current === divImage.length) {
  current = 0;
 }
  
 divImage[current].classList.add("active");
}

next.addEventListener("click", func)


prev.addEventListener("click", () => {
  divImage[current].classList.remove("active");
  current--;

 if(current < 0) {
  current = divImage.length - 1;
 }
  
 divImage[current].classList.add("active");
})


setInterval(func, 3000);

