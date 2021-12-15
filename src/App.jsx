import React from 'react';
import './App.css';

import { useState } from 'react'

import Moment from 'react-moment';


function App() {

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  const dateToFormat = datenew;
  { var datenew = Date()}

  return (
    <div className="app">
      <div className="mainHeading">

        <h1 className='fontwhites' >ToDo List</h1>
      </div>
      
      <div className="subHeading">
        <br />
        <h2 className="fontwhites" ><Moment format='MMMM Do YYYY, h:mm:ss a'>{dateToFormat}</Moment> </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>


      { toDos.map((obj) => {


        return (



          <div className="col-md-4 col-sm-6 content-card">
           
          <div className="card-big-shadow">
            
              <div className="card card-just-text " data-background="color" data-color="green" data-radius="none">
              <i  onClick={() => setToDos(toDos.filter(obj2 => {

if (obj2.id === obj.id) {

  obj2 = null

}
return obj2


}))} className="fas fa-times"> <h3><Moment  format='DD/MM/YYYY' >{dateToFormat}</Moment></h3> </i> 
                  <div class="content">
                  

          <div className="todos">
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  setToDos(toDos.filter(obj2 => {

                    if (obj2.id === obj.id) {

                      obj2.status = e.target.checked

                    }
                    return obj2

                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
  
                <p>{obj.text}</p>

              </div>

              <div className="right">

               
              </div>
            </div>
          </div>




          </div>
            </div>
        </div>
    </div>
    


        )
      })}



      {toDos.map((obj) => {

        if (obj.status) {


          return (



            <div className="col-md-4 col-sm-6 content-card">
               
          <div className="card-big-shadow">
            
              <div className="card card-just-text " data-background="color" data-color="orange" data-radius="none">
              <h3 >.  Task done <Moment format='DD/MM/YYYY' >{dateToFormat}</Moment> </h3> 
                  <div class="content">

                 
                  <del style={{color:'white',fontSize:'30px'}}  >{obj.text}</del>
        

              
              </div>
            </div>
          </div>



          </div>
      
         


          )

        }

        return null
      })}






    </div>
  );
}
export default App;