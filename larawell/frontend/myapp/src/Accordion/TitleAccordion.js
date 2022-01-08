import React, { useContext } from 'react';
import { AccordionContext } from './AccordionContext';

const TitleAccordion = ({index, title}) =>{
        const {show, toggle} = useContext(AccordionContext);
        return(
                <header className="item__header" index={index} onClick = {() =>toggle(index)}>         
                        <h3>{ show === index ? '-':'+'}</h3>
                        <h4 className="item__question">{title}{index}</h4>
                </header>
        );
        
}

export default TitleAccordion;