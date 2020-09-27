import React, { useState } from "react";
import { InputForm } from "./Components/InputForm";
import { OutputList } from "./Components/OutputList";

function App() {
  const [list, setList] = useState([]);
  
  const updateList = eachEntry => {
    setList([...list, eachEntry]);
  };

  return (
    <div className="container mt-4">
        <InputForm updateList={updateList} />
        <OutputList list={list} />
    </div>
  );
}
export default App;