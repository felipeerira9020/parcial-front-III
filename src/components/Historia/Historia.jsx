import React, { Component } from "react";
import data from "../data.json";

class Historia extends Component {
  render() {
    return (
      <>
        {/* Aca entro al json que contiene un contador que va a contar las historias del json */}
        <h1 className="historia">{data[this.props.contador].historia}</h1>
      </>
    );
  }
}

export default Historia;
