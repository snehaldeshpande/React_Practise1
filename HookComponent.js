import React,{useState, useEffect} from 'react';


//UseState & useEffect
function HookComponent(){
    const [counter,setCounter] = useState(0);
    const [flag,setFlag] = useState(false);

    const onUpdate =() =>{
        setCounter(counter + 1)
    }

    useEffect(() =>{
        console.log("Within UseEffect");
        if(counter > 5){
            setFlag(true);
        }else{
            setFlag(false)
        }
        },[flag])

    return(
        <div style={{textAlign:"center"}}>
          <h3>Inside Hook Component</h3>
          <p>{counter}</p>
          <button onClick={onUpdate}>Update</button>
            </div>
    )
}
export default HookComponent;