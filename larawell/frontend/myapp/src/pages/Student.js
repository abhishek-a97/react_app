import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
class Student extends Component{
    state = {
        student:[],
        loading:true
    }
    async componentDidMount(){
        const res = await Axios.get('http://127.0.0.1:8000/api/students');
        console.log(res.data);
        if(res.data.status === 200){
            this.setState({
                student:res.data.students,
                loading:false
            });
        }
    }
    
    deletestudent = async (e, id) => {
        const clicked_button = e.currentTarget;
        clicked_button.innerText = "Deleting";
        const res = await Axios.delete(`http://127.0.0.1:8000/api/delete-student/${id}`);
        if(res.data.status === 200){
            console.log(res.data);
            clicked_button.closest("tr").remove();
        }
    };
    render(){


        var student_data = "";
        if(this.state.loading){
            student_data = <tr><td colSpan="7"><h2>Loading</h2></td></tr>
        }else{  
            student_data = 
            this.state.student.map( (items) => {
                return(
                    <tr key={items.id}>
                          <td>{items.id }</td>
                          <td>{items.name }</td>
                          <td>{items.course }</td>
                          <td>{items.email }</td>
                          <td>{items.phone }</td>
                          <td>
                              <Link to={`edit-student/${items.id}`} className="btn btn-small btn-success">Edit</Link>
                          </td>
                          <td>
                              <button type="button" onClick={(e) => this.deletestudent(e, items.id)} className="btn btn-small btn-danger">Delete</button>
                          </td>

                    </tr>                 
                );
            });
        }
        return (
            <div className ="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Student data</h4>
                                <Link to={'Validate'} className="btn btn-primary btn-small float-end">Add student</Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {student_data}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Student;