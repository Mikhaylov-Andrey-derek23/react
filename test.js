console.log('test');
let name = "Andrey";
console.log(name);

const personal = {
    name : "IGOR",
    age : 21,
    color : "red"
}
console.log(personal)

personal.name = "Ivan";
console.log(personal);

const btn = document.querySelector(".btn");
btn.addEventListener('click', function(){
    setTimeout(() =>{
        this.style.display = "None";

        setTimeout(() => {
            this.style.display = "block"
        }, 300)
    }, 300)
});
const player1 = {name: "Ivan"};

playerPoints = new Map();

playerPoints.set(player1, 10);
console.log(playerPoints.get(player1));
playerPoints.set(player1,910);
console.log(playerPoints.get(player1));

const plaers = new Set();

plaers.add("34");
console.log(plaers);
plaers.add(34);
console.log(plaers);
