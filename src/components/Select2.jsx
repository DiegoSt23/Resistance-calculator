import { useEffect } from "react";

const Select2 = ({ multiplier, setMultiplier, color, setColor, language }) => {
  useEffect(() => {
    if (multiplier === "") {
      setColor("#b89872");
    }
    if (multiplier === "1") {
      setColor("#000000");
    }
    if (multiplier === "10") {
      setColor("#66533b");
    }
    if (multiplier === "100") {
      setColor("#ff0000");
    }
    if (multiplier === "1000") {
      setColor("#ffa600");
    }
    if (multiplier === "10000") {
      setColor("#ffff00");
    }
    if (multiplier === "100000") {
      setColor("#00ff4c");
    }
    if (multiplier === "1000000") {
      setColor("#4c84fd");
    }
    if (multiplier === "10000000") {
      setColor("#9f4cfd");
    }
    if (multiplier === "100000000") {
      setColor("#808080");
    }
    if (multiplier === "1000000000") {
      setColor("#ffffff");
    }
  }, [multiplier, setColor]);

  return (
    <select
      value={multiplier}
      onChange={(e) => {
        setMultiplier(e.target.value);
      }}
      style={{ backgroundColor: color, color: multiplier === "1" && "white" }}
    >
      {language === "en-US" && (
        <>
          <option value="">Select a color</option>
          <option value="1">Black</option>
          <option value="10">Brown</option>
          <option value="100">Red</option>
          <option value="1000">Orange</option>
          <option value="10000">Yellow</option>
          <option value="100000">Green</option>
          <option value="1000000">Blue</option>
          <option value="10000000">Violet</option>
          <option value="100000000">Grey</option>
          <option value="1000000000">White</option>
        </>
      )}
      {language === "es-US" && (
        <>
          <option value="">Selecciona un color</option>
          <option value="1">Negro</option>
          <option value="10">Cafe</option>
          <option value="100">Rojo</option>
          <option value="1000">Naranja</option>
          <option value="10000">Amarillo</option>
          <option value="100000">Verde</option>
          <option value="1000000">Azul</option>
          <option value="10000000">Violeta</option>
          <option value="100000000">Gris</option>
          <option value="1000000000">Blanco</option>
        </>
      )}
    </select>
  );
};

export default Select2;
