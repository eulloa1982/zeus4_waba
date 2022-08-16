import './App.css';
import BoardComponent from './components/Board/Board';
import Login from './components/Login';
import ZohoApp from './components/Zoho/Zoho'

const App = ()=> {
     
  return (
    <div className="App">
      <ZohoApp />
      <Login/>
      <div><BoardComponent /></div>
    </div>
  );
}
export default App;
