console.log("Helloy world!")
const body = document.querySelector("body");

class Test1{
    constructor(name, adg){
        this.name = name;
        this.adg = adg;    
        this.div = document.createElement("div")
        
    }
    sainName(){
        this.div.classList.add("test");
        this.div.innerHTML = "<p> this name = "+this.name+" adg = "+this.adg+"</p>";
        body.appendChild(this.div)
    }
}
class Child extends Test1{
    constructor(name, adg, child){
        super(name, adg)
        this.child = child;
    }
    sainName(){
        super.sainName();
        this.div.innerHTML = "<p> this name = "+this.name+" adg = "+this.adg+" child = "+this.child+"</p>";
        this.div.classList.remove("test");
        this.div.classList.add("Child_test");
    }
}
let a1 = new Test1('Vasya', 21);
let a2 = new Test1("Peter", 45);
const a3 = new Child("May", 32, 'pbgh1m1')

const xhr = new XMLHttpRequest(); 
xhr.open('GET', 'json.php', true);
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState != 4) return;
    if (xhr.status != 200){
        console.log("alert")
    }else{
        const resText = JSON.parse(xhr.responseText);
        console.log(resText);
        for(let val in resText){
            console.log(val)
            console.log(resText[val][0)
        }
    }
}

a2.sainName();
a1.sainName();
a3.sainName();
console.log(a1)

