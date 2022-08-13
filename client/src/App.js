import './App.css';
import BoardComponent from './components/Board/Board';
import ErrorComponent from './components/Error/Error';
import CustomerComponent from './components/Customer/Customer';
import Login from './components/Login';
import ZohoApp from './components/Zoho/Zoho'

const App = ()=> {

   return (
     <div className="App">
      <ZohoApp />
      <Login/><CustomerComponent/>
      <div><ErrorComponent/><BoardComponent /></div>
      

     </div>
  );
}
export default App;
