import React ,{useState, useRef} from "react";

const  UseRefTutorial = () => {
    const inputRef = useRef(null);
    const value = () => {
        // console.log(inputref.current.value);
        // inputRef.current.focus();
        inputRef.current.value = "";
    };
    return(
        <>
        <h3>Use ref tutotaiils</h3>
        <input type="text" name="name"   placeholder="excample"  ref={inputRef}/>
        <input type="text" name="email"   placeholder="excample"  ref={inputRef}/>
        <button onClick = {value}>submit</button>
        </>
    );
};

export default UseRefTutorial;