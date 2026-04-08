import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [nmbrAllowed, setNmbrAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    
  }, [
    length,
    nmbrAllowed,
    charAllowed,
    setPassword,
  ]);
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  );
}

export default App;
