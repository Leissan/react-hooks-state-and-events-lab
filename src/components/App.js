import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { StrictMode } from "react/cjs/react.development";

function App() {
// replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
const [isOn, setIsOn] = useState(false)

 function handleDarkMode () {
    setIsOn((isOn)=>!isOn)
  }
  const appClass = isOn? "App dark": "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{appClass}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
