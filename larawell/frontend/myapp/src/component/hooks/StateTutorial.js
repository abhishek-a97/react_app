import react, { useState } from "react";

const StateTutorial = () =>{
    const [counter,setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("abishek");
    
    const increment = () =>{
        setCounter(counter + 1);
    }; 

    const onchange = (event) =>{
        var newvalue = event.target.value;
        setInputValue(newvalue);
    };
    return(
        <>       
            <div>{counter}</div>
            <button  onClick={increment}>Increment</button>
            <br/>
            <input type="text" placeholder="Enter the input" onChange={onchange}/>
            <p>{inputValue}</p>
        </>


    );
};

export default StateTutorial;