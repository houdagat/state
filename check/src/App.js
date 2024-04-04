
import './App.css';
import {useState} from 'react';
import Person from './Person';

function App() {
const [show,setShow] = useState(false);
  return (
    
    <div className="App">
      <br></br>
      <button style={{backgroundColor:show? '#B31312':'#3081D0' ,color:"white",borderRadius:'5px' ,fontWeight:"bold"}} onClick= {()=>setShow(!show)} >{show? 'Hide Page' : 'Guess Who is Here ?'}</button>
      {show? <Person/>:null}
      <br></br> <br></br>
      
    </div>
  );
}

export default App;
