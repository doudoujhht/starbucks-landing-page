let red = document.querySelectorAll("a");


red.forEach(element => {
    let j=element;
    element.addEventListener("click",(e) =>{
        localStorage.setItem("page",element)
        let i= Math.floor(Math.random() * 3)

        e.preventDefault();
        j=element;
        if(i==0){
            window.location = "loading-1/index.html"
        }
        else if(i==1){
            window.location = "loading-2/index.html"
        }
        else{
            window.location = "loading-3/index.html"
        }




    })
});

function charger(){
    setTimeout(()=> {
        window.location = localStorage.getItem("page");
    },((Math.random()*2)+2)*1000)
}
