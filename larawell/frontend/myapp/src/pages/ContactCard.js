import React from "react";


const ContactCard = (props) => {
    const {id, name, email,course,phone} = props.contact;
    return(
        <div className="item">
                <div className="content">
                <div className="header">
                        {id}
                    </div>
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                    <div>{course}</div>
                    <div>{phone}</div>
                </div>
                <i className="trash alternate oytline icon" style={{color:"red"}}></i>
        </div>
    );
};

export default ContactCard;