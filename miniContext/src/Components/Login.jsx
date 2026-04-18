import { useState, useContext } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div className="flex justify-center items-center border-2 bg-amber-400  text-white m-6 p-5 ">
      <h2>Aman aur react</h2>
      <input
      className="m-6"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
