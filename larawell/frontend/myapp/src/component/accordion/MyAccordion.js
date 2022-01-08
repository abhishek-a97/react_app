import React, { useEffect, useState } from 'react';
import BodyAccordion from './BodyAccordion';

const MyAccordion = ({title,body,id,index}) =>{
    const [show,setShow] = useState(null);  
  
    const shows = (index) => {                            
        if(show === index){
           return  setShow(null);
        }             
        setShow(index);
    };    

  

    return(
        <>
            <div className="accordion__item">
                <header className="item__header" key={index} onClick = {() =>shows(index)}>
                    {/* <h3 onClick = {() => setShow(!show)}>{ show? '-':'+'}</h3> */}
                    {/* <h3>{ show === index ? '-':'+'}</h3> */}
                    <h4 className="item__question">{title}</h4>
                </header>
                { show === index ? <BodyAccordion  body={body}/> : null }
            </div> 
        </>
    )
};

export default MyAccordion;