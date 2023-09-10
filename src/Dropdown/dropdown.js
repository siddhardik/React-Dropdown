// Import useState Hook 
import {  useState } from "react";

// import style 
import Style from './dropdown.module.css';

function Dropdown() {
  // Declared the items array to display the items in the list
  const list = ["Yes","Probably Not"];

  // Used a hook for showing the selected Item in the dropdown
  const [selectedOption, setSelectedOption] = useState("");
  
  // Used another hook for storing a optionArray
  const [optionArray, setOptionArray] = useState([]);
  
  // This function will fired , when we we will enter on the Select button
  const handleMouseOver = ()=>{
    setOptionArray(list);
  }
  // This funciton will fire , when we click outside of that select button
  const handleClick = ()=>{
    setOptionArray([]);
  }
  // This funciton take care of the selected Item
  const handleOptionClick = (data)=>{
    setSelectedOption(data);
  }

  // Now Return the Dropdown  
  return (
    <>
      <div onClick={handleClick}>
        <h1>Should you Use a dropdown?</h1>
        <div>
          <h2>{selectedOption}</h2>
          <div onMouseOver={handleMouseOver} className={Style.initialOption}>Select</div>
          <div className={Style.options}>
              {optionArray.map((data)=> (
                  <div onClick={() => handleOptionClick(data)} className={Style.singleOption}>{data}</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
