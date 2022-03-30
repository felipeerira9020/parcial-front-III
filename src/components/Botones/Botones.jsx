import React, { Component } from "react";

class Botones extends Component {
  render() {
    const {botones, opcionA, opcionB} = this.props;
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="A" className="botones" onClick={botones}>A</button>
          <h2>{opcionA}</h2>
        </div>
         
        <div className="opcion">
          <button id="B" className="botones" onClick={botones}>B </button>
          <h2>{opcionB}</h2>
        </div>
      </div>
    );
  }
}

export default Botones;
