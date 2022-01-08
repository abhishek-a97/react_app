import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
 
class Editstudent extends Component{

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


    async componentDidMount(){
        const student_id = this.props.match.params.id;
        // console.log(student_id);
        const res = await Axios.get(`http://127.0.0.1:8000/api/edit-student/${student_id}`);
        console.log(res.data);
        if(res.data.status === 200){
            this.setState({
                name:res.data.student.name,
                course:res.data.student.course,
                email:res.data.student.email,
                phone:res.data.student.phone,
            });
        }
    };

    updateStudent = async (e) =>{
       
        e.preventDefault();
        const student_id = this.props.match.params.id;
       
        document.getElementById("updatebtn").innerText = "updating";
        const res = await Axios.put(`http://127.0.0.1:8000/api/update-student/${student_id}`, this.state);
        console.log(res);
        if(res.data.status === 200){
            this.setState({
                name:"",
                course:"",
                email:"",
                phone:"",
            });
            document.getElementById("updatebtn").innerText = "update student";
            this.props.history.push('/add-student');
        }

    }


    render(){
        return (
            <div className ="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Update data</h4>
                                <Link to={'/'} className="btn btn-primary btn-small float-end">Back</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateStudent}>
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
                                       
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Update Student</button>
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


export default Editstudent;