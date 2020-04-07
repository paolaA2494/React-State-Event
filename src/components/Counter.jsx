import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state ={
       number: 0,  
       result: 0,
    };
      this._handleCounterReset = this._handleCounterReset.bind(this);
      
    }
    //Métodos adicionales de la clase, buena practica iniciarlo con _handleCounterUp

    _handleCounterUp = () =>{
        this.setState(
            {
                number: this.state.number+1,
            }
        );
    };

    _handleCounterDown () {
        this.setState (
            {
                
               number: this.state.number-1,
            }
        );
    };
    
    _handleCounterReset() {
        this.setState((state) => ({
           number: 0,
        }));
    }

    _handleCounterUp = () =>{
        this.setState(
            {
                number: this.state.number+1,
            }
        );
    };

    _handleSumar = () =>{
        this.setState(
            {
                result: this.state.number + this.props.suma,
            }
        );
    };

    _handleRestar = () =>{
        this.setState(
            {
                result: this.state.number - this.props.resta,
            }
        );
    };

    render(){
        return(
            <div className="container">
                <div className="columns is-center">
                    <div className="column is -half">
                         <p className="title is-4 has-text-centered">
                             Contador
                         </p>
                         <div className="box has-text-centered">
                             <button className="button is-primary" onClick={this._handleCounterUp}>Incrementar</button>{'  '}
                             <button className="button is-info" onClick={() => this._handleCounterDown()}>Decrementar</button>{'  '}
                             <button className="button is-danger" onClick={this._handleCounterReset}>Reiniciar</button>{'  '}  
                         </div>
                         <p className="title is-1 has-text-centered">{this.state.number}</p>   
                    </div>
                    <div className="column is-half">
                    <p className="title is-4 has-text-centered">Operaciones Básicas</p>
                    <div className="box has-text-centered">
                        <button className="button is-warning" onClick={this._handleSumar}>Sumar</button>{'  '}
                         <p className="text is-4 has-text-centered">{this.props.suma}</p>
                         <button className="button is-success" onClick={this._handleRestar}>Restar</button> 
                         <p className="text is-4 has-text-centered">{this.props.resta}</p> 
                    </div>
                    </div>   
                </div>
                    <p className="title is-4 has-text-centered">Resultado</p>
                     <p className="title is-4 has-text-centered">{this.state.result}</p>
            </div>
        )
    };
}

export default Counter;


