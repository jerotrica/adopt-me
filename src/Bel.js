import { useEffect, useState, useRef } from "react";
import BelAudio from "./BelAudio";
import BelButton from "./BelButton";
import BelArrayNestedList from "./BelArrayNestedList";
import BelArrayList from "./BelArrayList";

// usando document
// usando ref
// probar single binding
// probar double binding

const Bel = () => {
  return (
    <div>
      <h2>Hola belusa</h2>
      <hr />
      {/* <BelButton /> */}
      {/* <BelAudio /> */}
      {/* <BelArrayList /> */}
      <BelArrayNestedList />
    </div>
  );
};

export default Bel;
