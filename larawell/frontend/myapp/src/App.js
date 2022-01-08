import React, {useState, useEffect} from "react";
// import "./styles/index.css";
import "./App.css";

// import Home from "./pages/Home";
// import Navbar from "./pages/Navbar";
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//using hooks
//import StateTutorial from "./component/hooks/StateTutorial";
// import ReducerTutorial from "./component/hooks/ReducerTutorial";
// import ImperativeHandle from "./component/hooks/ImperativeHandle/ImperativeHandle";
// import UseEffectTutorial from "./component/hooks/UseEffectTutorial";
// import UseRefTutorial from "./component/hooks/UseRefTutorial";



//validating  the data 
//import Student from "./pages/Student";
// import Addstudent from "./pages/Addstudent";
//import Validate from "./pages/Validate";
//import Editstudent from "./pages/Editstudent";


//contact manager incomplete 
// import uuid from "react-uuid";
// import Header from "./pages/Header";
// import ContactList from "./pages/ContactList";
// import AddContact from "./pages/AddContact";

//acordion code
//  import Accordion_old from "./component/accordion/Accordion_old";
// import Accordionb from "./component/accordion/Accordionb"; 

//redux
// import Redux_app from "./redux/Redux_app";
// import { Provider } from "react-redux";
// import store from "./store";
//store.subscribe(() => console.log(store.getState()));



//accordion using contextapi
// import Accordion from "./Accordion/Accordion";
// import AccordionContextProvider from './Accordion/AccordionContext';
// import View from "./crud_redux/View";

import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import Main from "./Material_UI/Main";
//import Main from "./Material_UI/Main";




function App() {
    /* switching routes */
    // return (
    //       <Router>
    //           <Switch>
    //               <Route exact path='/' component={Student} />
    //               <Route exact path='/Validate' component={Validate} />
    //               <Route exact path='/edit-student/:id' component={Editstudent} />
    //           </Switch>
    //       </Router>       
    // );

    /*  changing dynamic values */
    // const title = "this is my new page";
    // const link  = "https://www.google.com";
    // return (
    //     <div className="content">
    //         <h3>{title}</h3> 
    //         <a href={link}>Goolge site</a>
    //     </div>
    // );

    /** adding components  */
    // return(
    //     <div className="App">
    //         <div className="content">
    //             <Navbar />
    //             <Navbar />
    //             <Navbar />
    //             <Home />
    //         </div>
    //     </div>
    // );

    /** adding styles */    
    // return(
    //     <div className="App">
    //         <div className="content">

    //         </div>
    //     </div>
    // );


  // const contacts = [
  //   {
  //      id:"1",
  //      "name":"Abhishek",
  //      "phone":"8457958685",
  //      "email":"abhsishekshenoy@gmail.com",
  //      "course":"Bca"
  //   },
  //   {
  //     id:"2",
  //      "name":"Varun",
  //      "phone":"7485748574",
  //      "email":"varun@gmail.com",
  //      "course":"Bcom"
  //   }
  // ];


  //contacts dummy exercise half done using local storage

  // const [contacts, setContacts] = useState([]);
  // const LOCAL_STORAGE_KEY = "contacts";

  // const addContactHandler = (contact) =>{
  //   console.log(contact);
  //   setContacts([...contacts, {id:uuid(), ...contact}]);
  // }; //getting data from child component to parent component
  
 
  
  // useEffect(() =>{    
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //    if(retriveContacts) setContacts(retriveContacts);
  // },[]);
  

  // useEffect(() => {     
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // },[contacts]); //using useeffect to store data in local storage in browser
  


  // return(
  //     <div className="ui container">
  //       <Header />
  //       <AddContact addContactHandler={addContactHandler}/>
  //       <ContactList contacts={contacts}/>
       
  //     </div>
  // );

  
  //Hooks concept 
  // return(
  //   <div className="App">
  //        <AccordionContextProvider>
  //          <Accordion />
  //        </AccordionContextProvider>
  
  //   </div>
  // );


  //redux returning component
  // return (
  //   <div className="App">      
  //     <Provider store={store} >
  //       <Redux_app />
  //     </Provider>      
  //   </div>   
  // );

   return(
      <div className="App">
         <Main />
      </div>
   );



}

export default App;
