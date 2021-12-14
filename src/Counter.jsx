import React from 'react'
import {useState,useEffect} from 'react'

function Counter() {
    
const [count,setCount]= useState(0)

useEffect(()=>{

  
console.log('Mounting');
return ()=>{

console.log('Unmounting'+Count);


}

})

    return (
        <div>
            <button onClick={()=>setCount(count+1)} >  Increment</button>

            <h1>Hello i am Component{count}</h1>
        </div>
    )
}

export default Counter
