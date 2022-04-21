let position = 0;
let maximum = 1
let minititre = document.getElementById("sous-titre").value;
let nomVoiture = document.getElementById("aventador").value;
let button = document.getElementById("button");

let titre1 = document.getElementById("titre1").value;
let titre2 = document.getElementById("titre2").value;
let titre3 = document.getElementById("titre3").value;
document.getElementById("fleche-droite").onclick = function(){
    if(position<maximum){
        page1();
        position++;
    }
    document.getElementById("aventador").addEventListener('animationend', ()=>{
        document.getElementById("aventador").removeAttribute('style');
      });
}

document.getElementById("fleche-gauche").onclick = function(){
    document.getElementById("aventador").style.animation ="";
    if(position>0){
        page0();
        position--;
    }
    document.getElementById("aventador").addEventListener('animationend', ()=>{
        document.getElementById("aventador").removeAttribute('style');
      });
}

function page1(){

    document.getElementById("aventador").style.animation ="";
    document.getElementById("aventador").style.animation ="anim-lineUp 1s";
    document.getElementById("sous-titre").innerHTML=("GO BEYOND YOUR LIMITS");
    document.getElementById("aventador").innerHTML = "HURRICANE";
    document.getElementById("button").innerHTML = "CRAFT YOUR HURRICANNE";
    document.getElementById("titre1").innerHTML = "889 CV / 634 kW";
    document.getElementById("titre2").innerHTML = "350 km / h";
    document.getElementById("titre3").innerHTML = "3.2s"; 
    document.getElementById("tkt").style.background = "url(image2.jpg) no-repeat center center fixed";
    document.getElementById("tkt").style.backgroundSize = "cover";

}

function page0(){
    document.getElementById("aventador").style.animation ="";

    document.getElementById("sous-titre").innerHTML=("DARE YOUR EGO");
    document.getElementById("aventador").innerHTML = "AVENTADOR SVJ";
    document.getElementById("aventador").style.animation ="anim-lineUp 1s";
    document.getElementById("button").innerHTML = "CRAFT YOUR ADVENTADOR";
    document.getElementById("titre1").innerHTML = "770 CV / 566 kW";
    document.getElementById("titre2").innerHTML = "350 km / h";
    document.getElementById("titre3").innerHTML = "2.8s"; 
    document.getElementById("tkt").style.background = "url(image.png) center center no-repeat fixed";
    document.getElementById("tkt").style.backgroundSize = "cover";
    
}