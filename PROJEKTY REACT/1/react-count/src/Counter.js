import React, {Component} from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPannel from './ButtonsPannel';

class Counter extends Component{
   
    constructor(props){
        super(props);

        this.state = { // używany tylko w konstruktorze this.state
            counterValue: 0
        }
    }

    upOrResetCounter = (updateCounter) => {
        
        if(updateCounter === 0){
            this.setState({
                counterValue: 0
            })
        } else {
            this.setState ( (prevState) => {
                return({
                    counterValue: prevState.counterValue +1
                })
            })
        }
    } 
    
    render(){
        return(
            <div className="counter">
                <Display currentVal={this.state.counterValue}/>
                <ButtonsPannel updateMethod={this.upOrResetCounter}/>
            </div>
        )
    }
}

export default Counter;


//budowa komponentów funkcyjna gdy chcemy coś wyświetlać
//klasowa gdy większa logika jest angażowana
//klasa zawsze musi posiadać render(), oraz musi zwracać całość kodu w jakimś divie wrap, lub kontenerze
//nazwa properties jest dowolna, czyli np. startValue
//komponent klasowy this.props.element{}
// w jsx piszemy className zamiast class