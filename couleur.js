
let ta = document.querySelectorAll("a")
let ba = document.querySelectorAll(".transition");

ta.forEach(element => {
  element.addEventListener("click", ()=>{
      ba.forEach(element1 =>{
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          element1.style.backgroundColor = "#"+ randomColor;
      })
  })  
});
