import { Component } from "react";

/** componentes de tipo clase crear la clase y extenderar de 
 * react component
 * Manejar el cliclo de vida del compoente 
 * props => coleccion de datos pasar parametros desde el padre al
 * hijo
 * 
 * no podemos usar los hook que utilicen la palabra use
 * */
export default class Card extends Component {
    state ={
        age : 10
    }

    handleAgeChange = ()=>{
        this.setState({
            age:40
        })
    }

    render(){
        return (<><h1>HOLA {this.props.name}.. Año : {this.state.age}
        <button onClick={this.handleAgeChange}>Cambiar</button>
        </h1> {this.props.children}</>);
    }
}