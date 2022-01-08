import React,  {Component,useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


 const Validate  = () => {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const initialValues = { name:"", email:"", course:"", phone:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleInput = (e) => {      
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});    
    };

    const handleSubmit = (e) =>{
        e.preventDefault();       
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(async () =>{
        //console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            const res = await Axios.post('http://127.0.0.1:8000/api/add-student', formValues);
            console.log(res);
            setFormValues({...formValues, "name":"", "email":""}); 
        }
    },[formErrors]);

    const validate = (values) =>{
        const errors = {};
        //const regex = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
        if(!values.name){
            errors.name = "Username is not valid";
        }
        if(!values.email){
            errors.email = "Email is required";            
        }
        if(!values.phone){
            errors.phone = "Phone no is required";
        }
        if(!values.course){
            errors.course = "Course is required";
        }
        return errors;
    };


    //onClose={onCloseModal}
     return ( 
        <div>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='content' >
                    <div className ="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add data</h4>
                                        
                                        {/* <Link to={'/'} className="btn btn-primary btn-small float-end">Back</Link> */}
                                    </div>
                                    <div className="card-body">
                                        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group bb-3">
                                                <label>Student name</label>
                                                <input type="text" name="name" onChange={handleInput} value={formValues.name} className="form-control" />
                                                {formErrors.name}
                                            </div>
                                            <div className="form-group bb-3">
                                                <label>Student Course</label>
                                                <input type="text" name="course" onChange={handleInput} value={formValues.course} className="form-control" />
                                            </div>
                                            <div className="form-group bb-3">
                                                <label>Student email</label>
                                                <input type="text" name="email" onChange={handleInput} value={formValues.email} className="form-control" />
                                            </div>
                                            <div className="form-group bb-3">
                                                <label>Student phone</label>
                                                <input type="text" name="phone" onChange={handleInput} value={formValues.phone} className="form-control" />
                                            </div>
                                            <div className="form-group bb-3">
                                            
                                                <button type="submit" className="btn btn-primary">Save Student</button>
                                            </div> 
                                        </form>
                                    </div>               
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    {/* <button onClick={onCloseModal}>Close</button> */}

                </div>




                
            </Modal>
      </div>
        
      );
 }
  
 export default Validate ;