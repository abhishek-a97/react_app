import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
 
class AddStudent extends Component{

    state = {
        name:"",
        course:"",
        email:"",
        phone:"",
    }

    
    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    saveStudent = async (e) =>{
        e.preventDefault();
        const res = await Axios.post('http://127.0.0.1:8000/api/add-student', this.state);
        console.log(res);        
        this.setState = ({
            name:"",
            course:"",
            email:"",
            phone:"",
        });
    }


    render(){
        return (
            <div className ="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add data</h4>
                                
                                <Link to={'/'} className="btn btn-primary btn-small float-end">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveStudent}>
                                    <div className="form-group bb-3">
                                        <label>Student name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                    </div>
                                    <div className="form-group bb-3">
                                        <label>Student Course</label>
                                        <input type="text" name="course" onChange={this.handleInput} value={this.state.course} className="form-control" />
                                    </div>
                                    <div className="form-group bb-3">
                                        <label>Student email</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                    </div>
                                    <div className="form-group bb-3">
                                        <label>Student phone</label>
                                        <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className="form-control" />
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
        );
    }
}


export default AddStudent;