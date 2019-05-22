import React from 'react';
import ReactDOM from 'react-dom';

class Price extends React.Component{
    render(){
        return(
            <button>{this.props.price}</button>
        )
    }
}

class Cours extends React.Component{
    render(){
        return(
            <div className='course-item'>
            <h2>{this.props.courseName}</h2>
            <p><Price price={this.props.coursePrice}/></p>
            </div>
            
        )
        
    }
}
class Counter extends React.Component{
    render(){
        return (
            <div>{this.props.num}</div>
        )
    }
}

class Nordic extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            num : 0, 
            cours : [
                {
                    name : 'React',
                    price : 19000
                },
                {
                    name: 'Java',
                    price: 17900 
                }
            ]
        }
    }

    renderCours2(){
        this.state.cours.forEach((elem)=>{
            return(
                console.log(elem.name, elem.price)
            )
        })
    }

    renderCours(name, price){
        return (
            <Cours courseName={name} coursePrice={price}/>

        )
    }
    

    countChange(){
    
            this.setState({num: this.state.num + 1});
    
    }

    countChange2(){
    
        this.setState({num: this.state.num -1});

    }
    handlerClick(){
        console.log('click');
    }
    color(){
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = 'red';
        }, 300)
        
    }
    render(){
        return (
            <div className='wrapper'>
                <div className='nordic'>Hello, word!</div>
                <button onClick={()=>{this.handlerClick()}}>Click me!</button>
                <button onClick={()=>{this.color()}}>Click color</button>
                <div className='course.box'>{this.renderCours('React', ' 200 руб.')}
                <Cours courseName={'Веб разработка'} coursePrice={'100 руб.'}/>
                </div>
                <Counter num={this.state.num}/>
               <button onClick = {()=>this.countChange()}>+ Click</button>
               <button onClick = {()=>this.countChange2()}>- Click</button>
               <div>{this.renderCours2()}</div>
            </div>
        )
    }
}
class Credit extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.creditImg}</div>
                <div>{this.props.creditNumber}</div>
                <div>{this.props.creditData}</div>
                <Balanas balans={this.props.creditB}/>
            </div>
        )
    }
}
class Balanas extends React.Component{
    render(){
        return(
            <div>{this.props.balans}</div>
        )
    }
}
class Depozit extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.depozitImg}</div>
                <div>{this.props.depozitNumber}</div>
                <div>{this.props.depozitData}</div>
                <Balanas balans={this.props.depozitB}/>
            </div>
        )
    }
}

class BankCard extends React.Component{


    render(){
        return(
            <div className="Wrapper">
            <Credit creditImg={'Credit'} creditNumber={'1234'} creditData={'21.21'} creditB={-222}/>
            <Depozit depozitImg={'Depozit'} depozitNumber={'4321'} depozitData={'21.21'} depozitB={5646}/>  
            </div>
        )
    }
}

ReactDOM.render(<BankCard />, document.getElementById('root'));
