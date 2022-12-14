import { useEffect, useState, useRef } from "react";

const BelButton = () => {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  // const [double, setDouble] = useState("");

  const handleClick = () => {
    setVisible((current) => !current);
  };

  useEffect(() => {
    if (visible) {
      el.current.innerHTML = "Ahora me ves";
    } else {
      el.current.innerHTML = "Ahora no me ves";
    }
  }, [visible]);

  return (
    <div>
      {/* <input onChange={(e) => setDouble(e.currentTarget.value)} /> */}
      {/* <div>
        <h2>My text:{double}</h2>
      </div>
      <hr /> */}
      <h2>Hola belusa</h2>
      {/* {!visible ? <div>Visible</div> : null} */}
      <div style={{ visibility: visible ? "visible" : "hidden" }}>
        Estoy Visible
      </div>
      {/* <div style={{ display: visible ? "block" : "none" }}>
        holaa estoy visible
      </div> */}
      <button ref={el} onClick={handleClick} id="button">
        Tocame
      </button>
    </div>
  );
};

export default BelButton;
