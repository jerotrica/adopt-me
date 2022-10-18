import { useEffect, useState } from "react";

const Bel = () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible((current) => !current);
  };

  useEffect(() => {
    if (visible) {
      document.getElementById("boton").innerHTML = "Ahora me ves";
    } else {
      document.getElementById("boton").innerHTML = "Ahora no";
    }
  }, [visible]);

  return (
    <div>
      <h1>Hola Belusa</h1>
      <div style={{ visibility: visible ? "visible" : "hidden" }}>
        <h2>Ahora me ves</h2>
      </div>
      <button onClick={handleClick} id="boton">
        Toqueteame
      </button>
    </div>
  );
};

export default Bel;
