import React from 'react';
//Lifecycle Methods Demo
//
class Timer extends React.Component{
constructor(){
super();
this.state = {
  secondsElapsed: 0
};
}

start = () =>{
  this.setState({
    secondsElapsed : this.state.secondsElapsed + 1
  })
}

componentDidMount(){
  this.interval = setInterval(this.start,2000)
}
render(){
  return(
    <div>
     <h2>Seconds Elapsed:
     {this.state.secondsElapsed}</h2>
    </div>
  )
}
}
export default Timer;