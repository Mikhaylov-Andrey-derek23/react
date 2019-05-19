let bodu = document.querySelector('body');
class Wrapper{
    constructor(){
        this.div = document.createElement("div");

    }
    render(){
        this.div.classList.add("wrapper")
        bodu.appendChild(this.div)
    }

}

class Card {
    constructor(){
        this.div = document.createElement("div");
    }
    render(){
        let wrapper = document.querySelector(".wrapper");
        this.div.classList.add("bank_card")
        this.div.innerHTML = "<h2>Банковские карты:</h2>"
        wrapper.appendChild(this.div)
    }
}

class Bank_card {
    constructor (array){
        this.array = array;
        this.div = document.createElement("div");
    }
    render(){
        this.div.classList.add("card");
        this.div.innerHTML = '<div>'+this.array[0]+"</div>";
        document.querySelector(".bank_card").appendChild(this.div);
    }
}

class Credit extends Bank_card{
    constructor(array){
        super(array)
        this.div = document.createElement("div");
    }
    render(){
        this.div.classList.add("credit");
        this.div.innerHTML = '<div class="name">Кредитная карта</div><div class="img" style="background-image:url('+this.array[0]+')"></div><div><div>Номер карты</div><div>'+this.array[1]+'</div></div><div><div>Действует до</div><div>'+this.array[2]+' г.</div></div><div><div>Остаток на счету</div><div>'+this.array[3]+'  руб.</div></div><div><div>Кредитный лимит</div><div>'+this.array[4]+' руб.</div></div>';
        document.querySelector(".bank_card").appendChild(this.div);
    }
}
class Debit extends Bank_card{
    constructor(array){
        super(array)
        this.div = document.createElement("div");
    }
    render(){
        this.div.classList.add("debit");
        this.div.innerHTML = '<div class="name">Дебеторская карта</div><div class="img" style="background-image:url('+this.array[0]+')"></div><div><div>Номер карты</div><div>'+this.array[1]+'</div></div><div><div>Действует до</div><div>'+this.array[2]+' г.</div></div><div><div>Остаток на счету</div><div>'+this.array[3]+'  руб.</div></div><div><div>Бонусные балы</div><div>'+this.array[4]+'</div></div>';
        document.querySelector(".bank_card").appendChild(this.div);
    }
}

class Paginator{
    constructor(){
        this.div = document.createElement('div')
    }
    render(){
        let wrapper = document.querySelector(".wrapper");
        this.div.classList.add('paginator')
        this.div.innerHTML = '<a class="current activ" href="#" style="background-color: #f30d0d;">1</a><a class="current" href="#">2</a>'
        wrapper.appendChild(this.div)
    }
}


function ajaxrequest(url){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true );
    xhr.send();
    xhr.onreadystatechange = function(){
        if (xhr.readyState != 4) return;
        if (xhr.status != 200){
            console.log("alert")
        }else{
            const resText = JSON.parse(xhr.responseText);
            for(val in resText){
                if (val == 'Credit'){
                    for(let i = 0; i<resText['Credit'].length; i++){
                      let card = new Credit(resText['Credit'][i]);
                      card.render();
                }
                    }
                    
                if (val=='Debit'){
                    for(let i = 0; i<resText['Debit'].length; i++){
                        let card = new Debit(resText['Debit'][i]);
                        card.render();
                  }
                }
            }
        }
    }
}

window.onload = function(){

    const wrapper = new Wrapper();
    wrapper.render();

    const card = new Card();
    card.render();

    ajaxrequest('json.php');
    
    const paginator = new Paginator();
    paginator.render();

    let buttonPaginator =  document.querySelectorAll(".current");
    buttonPaginator.forEach((elem)=>{
        elem.addEventListener('click', function(e){
            e.preventDefault();
            console.log(this.text)
            if (this.text == 2){
                document.querySelector(".bank_card").innerHTML="<h2>Банковские карты:</h2>";
                ajaxrequest('json2.php');
                buttonPaginator.forEach((elem)=>{
                    elem.style.backgroundColor = "#ffacac";
                    if(elem.text == 2){
                        elem.style.backgroundColor = "#f30d0d";
                    }
                })
            }
            if (this.text == 1){
                document.querySelector(".bank_card").innerHTML="<h2>Банковские карты:</h2>";
                ajaxrequest('json.php');
                buttonPaginator.forEach((elem)=>{
                    elem.style.backgroundColor = "#ffacac";
                    if(elem.text == 1){
                        elem.style.backgroundColor = "#f30d0d";
                    }
                })
            }

        })
    })
   
    
}

