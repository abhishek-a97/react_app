import react, {useState, createContext, useEffect} from 'react';

import AccordionService from '../services/AccordionService';

export const AccordionContext = createContext();



function AccordionContextProvider(props){

    const [data,setData] = useState([]);  
    const [show,setShow] = useState(null);  
    const fetch_data = async () => {
    try{
        await AccordionService.getPosts()
            .then((response) => {
                setData(response.data);
                console.log(data);
            });      
            
        }
        catch(error){
            console.log("Error", error);
        }
    };

    useEffect(() => {
        fetch_data();
    },[]);

    const toggle = (index) => {         
        if(show == index ){
            return setShow(null);            
        }
        setShow(index);
    };

    return(
        <AccordionContext.Provider value={{ data ,toggle, show}}>
            {props.children}
        </AccordionContext.Provider>    
    );
}

export default AccordionContextProvider;

