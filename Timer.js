import React from 'react';
//Lifecycle Methods Demo

//Mounting Demo

class Timer extends React.Component{

constructor(){
super();
this.state = {
  secondsElapsed: 0,
  count : 0
};
}

start = () =>{
  this.setState({
    secondsElapsed : this.state.secondsElapsed + 1 ,
    count : this.state.count + 10
  })
}

componentDidMount(){
  this.interval = setInterval(this.start,2000),
  this.interval = setInterval(this.start ,2000)
}
//Unmounting Demo
ComponentWillUnmount(){
  console.log('Component will unmount!!')
  clearInterval(this.interval)
}
render(){
  return(
    <div>
     <h2>Seconds Elapsed:
     {this.state.secondsElapsed}</h2>
     <Updates new = {this.state.count} />
    </div>
  )
}
}

//Update Demo
class Updates extends React.Component{
shouldComponentUpdate(newProps , newState){
  if(this.props.new <= 3){
    console.log('shouldComponentUpdate:',newProps);
    return false;
    }else{
      return true;
    }
}
ComponentDidUpdate(prevProps,prevState,snapshot){
  console.log('Previous Value Destroyed:',prevProps);
  console.log('updated')
}
render(){
  return(
    <div>
   <h2> Second Elapsed: {this.props.new}</h2>
    </div>
  )
}
}
export default Timer;