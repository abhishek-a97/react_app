export const Increment = (num) =>{
    return{
        type:"Increment",
        payload:num
    }
}

export const Decrement = () =>{
    return {
        type:"Decrement"
    }
}