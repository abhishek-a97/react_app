import React, { usecontext,forwardRef, useImperativeHandle, useState, useContext } from "react";
import NoteContext from "../contextApi/NoteContext"; 

const Button = forwardRef((props,ref) => {
    const [toggle, setToggle] = useState(false);
    const a = useContext(NoteContext);
    useImperativeHandle(ref, () =>({
        alertToggle(){
            setToggle(!toggle);
        }
    }));
    return(
        <>
        <button onClick={() => {
            setToggle(!toggle);
        }}>Button from child</button>
        {toggle && <p>Toggeled  {a.name}  </p>}
        </>
    );
});

export default Button;