import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
   // console.log(props);
    const rendercontactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} key={contact.id.toString()}></ContactCard>
        );
    })
    return(
        <div className="ui celled list">
            {rendercontactList}
        </div>
    );
};


export default ContactList;

