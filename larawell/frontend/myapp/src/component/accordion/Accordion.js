import React, { useState, useEffect } from 'react';
import {questions} from './api';
import MyAccordion from './MyAccordion';
import "./accordion.css";
import AccordionService from '../../services/AccordionService';
// import axios from 'axios'; commented because not used


const Accordion = () =>{
    // const url = `https://jsonplaceholder.typicode.com/posts`;
    const [data,setData] = useState([]);  

   

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

    return(
        <>
            <section className="accordion container">
                <div className="accordion__content">
                    <h2 className="accordion__title">
                        My accordion
                    </h2>
                    {
                        data.map((curElem,index) =>{
                            // return curElem.id;
                            const { id} = curElem;
                           
                            return <MyAccordion key = {id} index={index}  {...curElem}/>
                        })
                    }
                    
                </div>
            </section>
                       
        </>
    );
};

export default Accordion;