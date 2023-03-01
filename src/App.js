import PrimerFila from "../src/Components/PrimerFila";
import SegundaFila from "../src/Components/SegundaFila";
import TerceraFila from "../src/Components/TerceraFila";
import Boton from "../src/Components/Boton";
import "./App.css";

function App() {
  return (
    <>
      {
        <div className="App">
          <div className="primerFila">
            <PrimerFila />
          </div>
          <div className="segundaFila">
            <SegundaFila />
          </div>
          <div className="TerceraFila">
            <TerceraFila/>
          </div>
          <div className="Boton">
            <Boton/>
          </div>
        </div>
      }
    </>
  );
}

export default App;
