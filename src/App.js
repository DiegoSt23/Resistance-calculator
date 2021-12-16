import "./sass/main.css";
import { useState } from "react";

// Components
import Options from "./components/Options";

function App() {
  const [color1, setColor1] = useState("#b89872");
  const [color2, setColor2] = useState("#b89872");
  const [color3, setColor3] = useState("#b89872");
  const [resistanceValue, setResistanceValue] = useState(null);
  const language = navigator.language;

  return (
    <div className="main-container">
      {language === "en-US" && <h1>Resistance Calculator</h1>}
      {language === "es-US" && <h1>Calculadora de Resistencia</h1>}
      <div className="resistor-container">
        <div className="wire"></div>
        <div className="resistor">
          <div className="line" style={{ backgroundColor: color1 }}></div>
          <div className="line" style={{ backgroundColor: color2 }}></div>
          <div className="line" style={{ backgroundColor: color3 }}></div>
          <div className="golden-line"></div>
        </div>
        <div className="wire"></div>
      </div>
      <Options
        color1={color1}
        color2={color2}
        color3={color3}
        setColor1={setColor1}
        setColor2={setColor2}
        setColor3={setColor3}
        setResistanceValue={setResistanceValue}
        language={language}
      />
      {language === "en-US" &&
        (resistanceValue ? (
          <h2>Resistance: {resistanceValue.toLocaleString("en")} Ω</h2>
        ) : (
          <h2>
            Use the fields above to apply the colors and calculate the
            resistance.
          </h2>
        ))}
      {language === "es-US" &&
        (resistanceValue ? (
          <h2>Resistencia: {resistanceValue.toLocaleString("en")} Ω</h2>
        ) : (
          <h2>
            Usa los campos de arriba para aplicar los colores y calcular la
            resistencia.
          </h2>
        ))}
    </div>
  );
}

export default App;
