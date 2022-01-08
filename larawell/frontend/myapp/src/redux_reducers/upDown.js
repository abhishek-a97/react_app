const Initial_value=0;

const Change_number = (state = Initial_value, action) =>{
    switch(action.type){
        case "Increment":
            return state + action.payload;
        case "Decrement":
            return state - 1;
        default:
            return state;
    }
};

export default Change_number;