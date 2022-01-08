import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Increment,Decrement} from "../redux_actions/index";


const Redux_app  = ()  => {
    const myState = useSelector((state) => state.Change_number);
    const dispatch = useDispatch();
    return(
        <div className="Container">
            <h3>Increment/Decrement</h3>
            <div className="quantity">
                <button className="quanity_minus" onClick = {() => dispatch(Decrement())}>-</button>
                <input className="quantity_input" type="text" value={myState} />
                <button className="quantity_plus" onClick = {() => dispatch(Increment(5))}>+</button>
            </div>
        </div>
    );
};

export default Redux_app;