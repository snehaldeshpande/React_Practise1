import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap'

class Login extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {name:'',password:''}
    }
    
    setEmpState = (e) => {
    this.setState({name: e.target.value})
    this.setState({password: e.target.value})
    }
      handleLogin = (e) => {
        e.preventDefault();
        alert('Logged in successfully');
    }
    render() {
        return(<React.Fragment>
        
            <form>
            
                <div className="form-group">
                    <label for="name">Username:</label>
                    <input style={{width:'80%'}} type="text" 
                     onChange = {this.setEmpState} className="form-control" id="name" placeholder="Enter Name" name="name" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input style={{width:'80%'}} type="password" 
                    onChange = {this.setEmpState} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
           </form>
           
        </React.Fragment>)
    }
}
export default Login;
