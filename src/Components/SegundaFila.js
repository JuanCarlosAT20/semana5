import { Component, Fragment } from "react";
import '../Components/SegundaFila.css';


class SegundaFila extends Component {
  render() {
    const lenguajes = [
      {
        nombre: "JavaScript",
      },
      {
        nombre: "React Js",
      },
    ];

    return (
      <>
      {
        lenguajes.map((p, index) => {
          return <Fragment key={index}>
            <h2> - {p.nombre} </h2>
          </Fragment>
        })
      }
      </>
    )};
}

export default SegundaFila;
