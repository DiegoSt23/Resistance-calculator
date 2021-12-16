import { useState } from "react";

// Components
import Select1 from "./Select1";
import Select2 from "./Select2";

const Options = ({
  color1,
  color2,
  color3,
  setColor1,
  setColor2,
  setColor3,
  setResistanceValue,
  language,
}) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [errorMessageStatus, setErrorMessageStatus] = useState(false);

  const handleCalculateResistance = (e) => {
    e.preventDefault();
    if (value1 && value2 && multiplier) {
      const totalValue = `${value1}${value2}`;
      setResistanceValue(Number(totalValue * multiplier));
      setErrorMessageStatus(false);
    } else {
      setErrorMessageStatus(true);
    }
  };

  return (
    <>
      <form>
        <Select1
          value={value1}
          setValue={setValue1}
          color={color1}
          setColor={setColor1}
          language={language}
        />
        <Select1
          value={value2}
          setValue={setValue2}
          color={color2}
          setColor={setColor2}
          language={language}
        />
        <Select2
          multiplier={multiplier}
          setMultiplier={setMultiplier}
          color={color3}
          setColor={setColor3}
          language={language}
        />
        {language === "en-US" && (
          <button onClick={handleCalculateResistance}>CALCULATE</button>
        )}
        {language === "es-US" && (
          <button onClick={handleCalculateResistance}>CALCULAR</button>
        )}
      </form>
      {language === "en-US" && errorMessageStatus && (
        <p className="error-message">Please select all the options.</p>
      )}
      {language === "es-US" && errorMessageStatus && (
        <p className="error-message">
          Por favor selecciona todas las opciones.
        </p>
      )}
    </>
  );
};

export default Options;
