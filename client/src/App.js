import './App.css';
import React,{useState} from 'react'
import BoardComponent from './components/Board/Board';
import ErrorComponent from './components/Error/Error';
import CustomerComponent from './components/Customer/Customer';
import Login from './components/Login';

const App = ()=> {
  const [user, setUser] = useState({ auth:false, name:''})
   return (
     <div className="App">
      <Login/><CustomerComponent/>
      <div><ErrorComponent/><BoardComponent /></div>

     </div>
  );
}
export default App;

/*

*/