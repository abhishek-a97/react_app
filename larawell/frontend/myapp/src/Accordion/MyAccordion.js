import React, { useContext, useEffect, useState } from 'react';
import BodyAccordion from './BodyAccordion';
import { AccordionContext } from './AccordionContext';
import TitleAccordion from './TitleAccordion';
const MyAccordion = ({title,body,id,index}) =>{
    const { show } = useContext(AccordionContext); 
    return(
        <>
            <div className="accordion__item">
                <TitleAccordion index={index} title={title}/>
                { show === index ? <BodyAccordion  body={body}/> : null }
            </div> 
        </>
    )
};

export default MyAccordion;