import React, {Component} from 'react';

class ButtonsPannel extends Component{
    updateCounter = (update) => {
        this.props.updateMethod(update);
        // console.log(`buttons.update  [${update}] `);
        
    }
    render(){
        return(
            <div className='buttonsPannel'>
                <button onClick={() => this.updateCounter(1)}>Zwiększ o 1</button>
                <button onClick={() => this.updateCounter(0)}>Resetuj licznik</button>
            </div>
        )
    }
}

export default ButtonsPannel;