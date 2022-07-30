import './App.css';
import React,{useState} from 'react'
import BoardComponent from './components/Board/Board';
import ErrorComponent from './components/Error/Error';
import Login from './components/Login';

const App = ()=> {
  const [user, setUser] = useState({ auth:false, name:''})
   return (
     <div className="App">
        { user.auth?
            <div><BoardComponent /><ErrorComponent/></div>
          :
            <Login setUser={setUser}/>
        }
     </div>
  );
}
export default App;