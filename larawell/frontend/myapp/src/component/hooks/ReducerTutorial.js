import React , { useReducer, useState} from 'react';

const reducer = (state, action) => {
    switch (action.type){
        case "INCREMENT" :
            return { count: state.count + 1 , showText: state.showText};
        case "DECREMENT":
            return { count:state.count - 1 , showText: state.showText};
        case "toggleShowText":
            return { count:state.count, showText:!state.showText};
        default:
            return state;
    }
}

const ReducerTutorial = () => {
    // const [count, setCount ] = useState(0);
    // const [showText, setShowText] = useState(true);we can use reducer instead of putting multiple states


    const [state, dispatch] = useReducer(reducer, {count:0, showText:true});

    return(
        <>
            <div>
                <h2>{state.count}</h2>
                <button onClick ={() => {
                    // setCount(count + 1);
                    // setShowText(!showText); using reducer instead of using state

                    dispatch({type:"INCREMENT"});
                    dispatch({type:"toggleShowText"});//using reducers


                }}>+</button>
                <button onClick={() => {
                    dispatch({type:"DECREMENT"});
                    dispatch({type:"toggleShowText"});
                }}>-</button>

                {state.showText && <p>this is a new text</p>}
            </div>
        </>
    );
};


export default ReducerTutorial;