import React, { Component } from "react";

class Historial extends Component {
  render() {
    const {seleccionAnterior, historial} = this.props;
    return (
      <div className="recordatorio">
        <h3>Selección anterior:{seleccionAnterior}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{historial}</ul>
      </div>
    );
  }
}

export default Historial;
