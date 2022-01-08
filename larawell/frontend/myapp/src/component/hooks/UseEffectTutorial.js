import React, { useEffect } from 'react';
import axios from  'axios';
import { useState } from 'react/cjs/react.development';
import AccordionService from '../../services/AccordionService';
const UseEffectTutorial = () => {
    const [data,setData] = useState();


    useEffect(() => {
        AccordionService.getPosts()
        .then((response) => {
            setData(response.data[0].title);
            console.log("Api called");
        });  
    }, []);

    return (

       <>
         <h3>{data}</h3>
       </>
    );
};

export default UseEffectTutorial;