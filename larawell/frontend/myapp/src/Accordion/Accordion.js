import React, { useState, useContext } from 'react';
import "./Accordion.css";
import  {AccordionContext}  from './AccordionContext';
import MyAccordion from './MyAccordion';

const Accordion = () =>{  
    const {data} = useContext(AccordionContext);
   
    return(
        <>     
        
            
            <section className="accordion container">
                <div className="accordion__content">
                    <h2 className="accordion__title">
                        My accordion
                    </h2>
                    {
                        data.map((curElem,index) =>{                          
                            const {id} = curElem;                                
                            return <MyAccordion key = {id} index={index}  {...curElem}/>
                        })
                    }                    
                </div>
            </section>                    
        </>
    );
};

export default Accordion;