

import React from 'react';
import axios from 'axios';
//import loading from './image/Loading.png';
import 'bootstrap/dist/css/bootstrap.min.css';


class Employee extends React.Component{

constructor(){
super();
this.state = {
  employees: []
}
}

ComponentDidMount(){
this.setState({ isLoading : true});

axios.get('employee.json')
.then(result =>
this.setState({
  employee: result.data,
  isLoading : false
})
)
.catch(error =>
this.setState({
  error,
  isLoading: false
})
);
}

render(){
  
  if(this.state.isLoading){
   return<img src={loading} alt="Loading..." />
  }

  if(this.state.errors){
    return<p>
    {this.state.error.message}</p>
  }



  return(
    <div>
    <table style = {{width: '60%'}} className='table'>
    <thead className='thead-light'>
    <tr>
    <th>EmpId</th>
    <th>Name</th>
    <th>Designation</th>
    </tr>
    </thead>

    <tbody>
    {this.state.employee ? this.state.employee.map(employees =>{
      return(<tr key ={Math.random()}>
      <td>{employees.empId}</td>
      <td>{employees.name}</td>
     <td>{employees.designation}</td>
     </tr>)
    }):<tr><td> No Data Found</td></tr>}
  
    </tbody>

   
     </table>
    </div>
  )
}
}

export default Employee;
