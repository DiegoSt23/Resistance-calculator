import { useEffect } from "react";

const Select1 = ({ value, setValue, color, setColor, language }) => {
  useEffect(() => {
    if (value === "") {
      setColor("#b89872");
    }
    if (value === "1") {
      setColor("#66533b");
    }
    if (value === "2") {
      setColor("#ff0000");
    }
    if (value === "3") {
      setColor("#ffa600");
    }
    if (value === "4") {
      setColor("#ffff00");
    }
    if (value === "5") {
      setColor("#00ff4c");
    }
    if (value === "6") {
      setColor("#4c84fd");
    }
    if (value === "7") {
      setColor("#9f4cfd");
    }
    if (value === "8") {
      setColor("#808080");
    }
    if (value === "9") {
      setColor("#ffffff");
    }
  }, [value, setColor]);

  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      style={{ backgroundColor: color }}
    >
      {language === "en-US" && (
        <>
          <option value="">Select a color</option>
          <option value="1">Brown</option>
          <option value="2">Red</option>
          <option value="3">Orange</option>
          <option value="4">Yellow</option>
          <option value="5">Green</option>
          <option value="6">Blue</option>
          <option value="7">Violet</option>
          <option value="8">Grey</option>
          <option value="9">White</option>
        </>
      )}
      {language === "es-US" && (
        <>
          <option value="">Selecciona un color</option>
          <option value="1">Cafe</option>
          <option value="2">Rojo</option>
          <option value="3">Naranja</option>
          <option value="4">Amarillo</option>
          <option value="5">Verde</option>
          <option value="6">Azul</option>
          <option value="7">Violeta</option>
          <option value="8">Gris</option>
          <option value="9">Blanco</option>
        </>
      )}
    </select>
  );
};

export default Select1;
