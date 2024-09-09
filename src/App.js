import React, { Component } from 'react';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'start'
        };
        this.timer = null;
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
    }

    start() {
        if (this.timer !== null) {
            let state = this.state;
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'start';
            this.setState(state);
            
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                state.botao = 'pause'; 
                this.setState(state);
            }, 100);      
        }   
        
    }

    reset() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        let state = this.state;
        state.numero = 0;
        state.botao = 'start';
        this.setState(state);

    }

    render() {
        return (
            <div>
                <div>
                    <div className='container'>
                        <img src={require('./assets/cronometro.png')} alt='timer'></img>
                        <span className='timer'>{this.state.numero.toFixed(1)}</span>
                        <div className='areaButtons'>
                            <button onClick={this.start} className='button'>{this.state.botao}</button>
                            <button onClick={this.reset} className='button'>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;