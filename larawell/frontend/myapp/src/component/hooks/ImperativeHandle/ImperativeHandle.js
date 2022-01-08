import React,{useRef} from "react";
import NoteState from "../contextApi/NoteState";
import Button from "./Button";


const ImperativeHandle = () => {
    const buttonRef = useRef(null);

    return (
        <>
            <NoteState>
                <button onClick={() =>{
                    buttonRef.current.alertToggle();
                }}>Button from parent</button>
                <Button ref={buttonRef}/>
            </NoteState>          
        </>
        
    );
};

export default ImperativeHandle;