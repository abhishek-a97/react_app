
import React, { useState, useEffect , createContext} from 'react';
import {questions} from './api';
import MyAccordion from './MyAccordion';
import "./accordion.css";
import AccordionService from '../../services/AccordionService';
import BodyAccordion from './BodyAccordion';
import Accordion_title from "./Accordion_title";

// import axios from 'axios'; commented because not used

const  AccordionContext = createContext();

const Accordionb = () =>{
    // const url = `https://jsonplaceholder.typicode.com/posts`;
    const [data,setData] = useState([]);  

    const [show,setShow] = useState(null);  

    const fetch_data = async () => {
        try{    
            // const response =  await axios.get(url);
            // setData(response.data);


            //const response =  await AccordionService.getPosts();
            //setData(response.data);    

            await AccordionService.getPosts()
            .then((response) => {
                setData(response.data);
            }); 
      
      
            // AccordionService.getPosts() 
            // .then(res=>res.json())
            // .then(res=>setData(res));   //using fetch api axios            
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
        <>
         <AccordionContext.Provider value={show,toggle}>
                <section className="accordion container">
                    <div className="accordion__content">
                        <h2 className="accordion__title">
                            My accordion
                        </h2>
                        {
                            data.map((curElem,index) => {
                                // return curElem.id;
                                return(
                                <div className='accordion__item'>
                                    <div className='item__header' onClick={() => toggle(index)}>
                                            {curElem.title} 
                                            <span>{show === index ? "-" : "+"}</span>
                                    </div>
                        

                                    {  show === index ? 
                                            <BodyAccordion  body = {curElem.body}/>
                                    : ""} 
                                </div>
                                );
                            })
                        }
                        
                    </div>
                </section>
            </AccordionContext.Provider>           
        </>
    );
};

export default Accordionb;