import React from "react";

export class Counter extends React.Component {
constructor() {
    super();

    this.state = {contador: 0};

}

    render() {
        return(
            <div style={{marginTop: '20px', marginLeft: '20px'}}>
                <h1>{this.state.contador}</h1>
                <div>
                    <button style={{marginRight: '10px'}} onClick={() => { this.setState({contador: this.state.contador-1}) }}>Diminuir</button>
                    <button onClick={() => { this.setState({contador: this.state.contador+1}) }}>Aumentar</button>
                </div>
            </div>
        )
    }
}