import { useState } from "react";
import "./App.css";

function App() {
  let [cnt, setCnt] = useState(5);
  let addVal = () => setCnt(cnt + 1);
  let remVal = () => (cnt > 0 ? setCnt(cnt - 1) : 0);

  return (
    <>
      <h1>Counter Value : {cnt}</h1>
      <div className="btn">
        <button onClick={addVal}>Increase</button>
        <button onClick={remVal}>Decrease</button>
      </div>
    </>
  );
}

export default App;
