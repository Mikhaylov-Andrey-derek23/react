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
        this.div.innerHTML = '<div>Кредитная карта</div><div class="img" style="background-image:url('+this.array[0]+')"></div><div><div>Номер карты</div><div>'+this.array[1]+'</div></div><div><div>Действует до</div><div>'+this.array[2]+' г.</div></div><div><div>Остаток на счету</div><div>'+this.array[3]+'  руб.</div></div><div><div>Кредитный лимит</div><div>'+this.array[4]+' руб.</div></div>';
        document.querySelector(".bank_card").appendChild(this.div);
    }
}
class Debit extends Bank_card{
    constructor(array){
        super(array)
        this.div = document.createElement("div");
    }
    render(){
        this.div.classList.add("credit");
        this.div.innerHTML = '<div>Кредитная карта</div><div class="img" style="background-image:url('+this.array[0]+')"></div><div><div>Номер карты</div><div>'+this.array[1]+'</div></div><div><div>Действует до</div><div>'+this.array[2]+' г.</div></div><div><div>Остаток на счету</div><div>'+this.array[3]+'  руб.</div></div><div><div>Бонусные балы</div><div>'+this.array[4]+'</div></div>';
        document.querySelector(".bank_card").appendChild(this.div);
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
            console.log(resText)
            for(val in resText){
                if (val == 'Credit'){
                    for(let i = 0; i<resText['Credit'].length; i++){
                      console.log('Дебиторская карта')
                      console.log(resText['Credit'][i])
                      let card = new Credit(resText['Credit'][i]);
                      card.render();
                }
                    }
                    
                if (val=='Debit'){
                    for(let i = 0; i<resText['Credit'].length; i++){
                        console.log('Дебеторская картаа')
                        console.log(resText['Debit'][i])
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
    
}

