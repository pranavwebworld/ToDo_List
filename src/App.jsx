import './App.css'
import React, {useState} from 'react'
import Header from './components/Header'
import Counter from './Counter'


// import Counter from './Counter'
function App() {

  const [state,setState] = useState(false)

  return (

  <div>

<h1 onClick={()=>setState(!state)} >  Show and hide </h1>

{ state? <Counter/>:null}

</div>
  
  );
}

export default App;

