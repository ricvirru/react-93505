import './HookEffect.css';
import { useEffect, useRef, useState } from "react";

const HookEffect = () => {

  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("useEffect despues del renderizado");
  });

  useEffect(() => {
    console.log("useEffect solamente al montar el componente");
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("useEffect al montar y cuando cambie el estado contador");
  }, [count]);



  return (
    <div>
      <h2>HookEffect - Contador - useRef</h2>
      <div className="effect-div">
        <button className="effect-button" onClick={() => setCount(count + 1)}>Count: {count}</button>
        <button className="effect-button"> Sin acciones </button>
        <input ref={inputRef} type="text"/>
      </div>
    </div>
  )
}

export default HookEffect;