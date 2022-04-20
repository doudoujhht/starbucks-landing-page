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
}

function page1(){
    document.getElementById("sous-titre").innerHTML=("GO BEYOND YOUR LIMITS");
    document.getElementById("aventador").innerHTML = "HURRICANE";
    document.getElementById("button").innerHTML = "CRAFT YOUR HURRICANNE";
    document.getElementById("titre1").innerHTML = "889 CV / 634 kW";
    document.getElementById("titre2").innerHTML = "350 km / h";
    document.getElementById("titre3").innerHTML = "3.2s"; 
    document.getElementById("tkt").style.background = "url(image2.jpg) no-repeat center center fixed";
    console.log(document.getElementsByTagName("html").value)
}