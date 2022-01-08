import React,  {Component} from 'react';

class AddContact extends Component{
    state = {
        name:"",
        email:"",
        phone:"",
        course:""
    }

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "" || this.state.phone === "" || this.state.course === ""){
            alert("All the Fields arre mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        //console.log(this.state);
    };

    render(){
        return(
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className='field'>
                        <label>Name:</label>
                        <input type="text" name="name" placeholde="Name" value={this.state.name} onChange ={(e) => this.setState({name: e.target.value})}/>                        
                    </div>
                    <div className='field'>
                        <label>email:</label>
                        <input type="text" name="email" placeholde="email" value={this.state.email} onChange = {(e) => this.setState({email: e.target.value})}/>                        
                    </div>
                    <div className='field'>
                        <label>phone:</label>
                        <input type="text" name="phone" placeholde="phone" value={this.state.phone} onChange = {(e) => this.setState({phone: e.target.value})} />                        
                    </div>
                    <div className='field'>
                        <label>course:</label>
                        <input type="text" name="course" placeholde="course" value={this.state.course} onChange = {(e) => this.setState({course: e.target.value}) }/>                        
                    </div>

                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}

export default  AddContact;