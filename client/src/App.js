import './App.css';
import Login from './components/Login';
import ZohoApp from './components/Zoho/Zoho'

const App = ()=> {
     
  return (
    <div className="App">
      <ZohoApp />
      <Login/>
      <div></div>
    </div>
  );
}
export default App;
