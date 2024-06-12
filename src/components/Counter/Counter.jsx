import React from "react";

export class Counter extends React.Component {
constructor() {
    super();
    this.contador = 0;


}

    render() {
        return(
            <div style={{marginTop: '20px', marginLeft: '20px'}}>
                <h1>{this.contador}</h1>
                <div>
                    <button style={{marginRight: '10px'}} onClick={() => { this.contador-- }}>Diminuir</button>
                    <button onClick={() => { this.contador++ }}>Aumentar</button>
                </div>
            </div>
        )
    }
}