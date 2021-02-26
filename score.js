const ply1 = document.getElementById("btn-1");
const score1 = document.getElementById("score1");
let net1 = 0;
const span1 = document.querySelector("div.pass > h3 > span")

const ply2 = document.getElementById("btn-2");
const score2 = document.getElementById("score2");
let net2 = 0;

const reset = document.querySelector("#reset") 



ply1.addEventListener("click",function(){
    let limit = document.querySelector("#limit").value;
    net1 ++;
    score1.textContent = net1;
    if (net1 == limit || (net1>net2 && net1 > limit)){
        score1.classList.add("green")
        // span1.style.color = "green"
        ply1.setAttribute("disabled", "true")
        ply2.setAttribute("disabled", "true")
        
        printWinner()
    }
})
ply2.addEventListener("click",function(){
    let limit = document.querySelector("#limit").value;
    net2 ++;
    score2.textContent = net2;
    if (net2 == limit || (net2>net1 && net2 > limit)){
        score2.classList.add("green")
        ply1.setAttribute("disabled", "true")
        ply2.setAttribute("disabled", "true")
        
        printWinner()
    } 
    
})
reset.addEventListener("click", function(){
    ply1.removeAttribute("disabled")
    ply2.removeAttribute("disabled")

    score1.classList.remove("green")
    score2.classList.remove("green")

    net1 = 0 
    net2 = 0
    score1.textContent = net1
    score2.textContent = net2
    document.querySelector("#limit").value = 5

    rate.textContent = " "
})

const bank = document.createElement("p")
const broke = document.createTextNode("The winner is:")
bank.appendChild(broke);
bank.setAttribute("id","sale")
let winner = document.querySelector(".win").appendChild(bank)
// winner.style.display.justifyContent = "center"
const rate = document.createElement("span")
const bake = document.createTextNode("")
rate.appendChild(bake);
let cash = winner.appendChild(rate)


function printWinner (){
    if(net1 > net2){
        rate.append("Player 1")
    }
    else{
        rate.append("Player 2")
    }
}