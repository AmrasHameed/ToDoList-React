import { useState } from 'react';
import './App.css';
import Finished from './Finished';

function App() {
  const timestamp = Date.now(); 
  const date = new Date(timestamp); 
  const dayOfWeek = date.getDay();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = weekdays[dayOfWeek];

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState("")

  return (
    <div>
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="✏️Add Tasks..." />
        <i onClick={()=>setToDos([...toDos, {id:Date.now(), text: toDo, status: false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((object)=>(
          <div key={object.id} className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(object)
              const obj = toDos.filter(obj=>{
                if(obj.id === object.id) {
                  obj.status = e.target.checked
                }
                return obj
              })
              setToDos(obj)
            }} value={object.status} type="checkbox" name="" id="" />
            <p>{object.text}</p>
          </div>
          <div className="right">
            <i onClick={() => setToDos(toDos.filter((obj)=>obj.id!==object.id))} className="fas fa-times"></i>
          </div>
        </div>
        ))}
      </div>
       
    </div>
    <Finished data = {toDos}/>
    </div>
  );
}

export default App;
