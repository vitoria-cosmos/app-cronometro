import React, { Component} from 'react';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'VAI'
        };
        // aqui são criadas todas as states que vamos precisar no projeto

        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
        // nesta parte estamos declaranso as funções que vão ser usadas no componente, possibilitando que possamos acessá-las dentro deste componente
    }

    vai() {
        let state = this.state;
        // estamos acessando todas as states
        if (this.timer !== null) {
            // ele verifica se tem alguma coisa girando
            clearInterval(this.timer);
            // clearInterval faz com que o intervalo pare
            this.timer = null;
            state.botao = 'VAI';
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);
            // 100 milisegundos = 0.1
            // o setInterval fica rodando sem parar
            state.botao = 'pausar';
        }

        this.setState(state);
        // atualiza os valores das states
        
    }

    limpar() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            // ele redefine a veriável timer para podermos ter mais controle sobre o conometro e para com que termos a certeza que ele está pausado
        } 

        let state = this.state;
        state.numero = 0;
        state.botao = 'VAI';
        this.setState(state);

    }
    render() {
        return (
            <div className="container">
                <img src={require('./assets/cronometro.png')} alt='Cronometro'/>
                <a className={'timer'}>{this.state.numero.toFixed(1)}</a>
                <div className={'areaBtn'}>
                    <a className='botao' onClick={this.vai}>{this.state.botao}</a>
                    <a className='botao' onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        );
    }
}

export default App;
