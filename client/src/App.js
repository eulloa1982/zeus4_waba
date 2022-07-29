import './App.css';
import BoardComponent from './components/Board/Board';
import ZohoComponent from './components/Zoho/Zoho';

function App( { posts }) {
  return (
    <div className="App">
      
      <BoardComponent />
      <ZohoComponent />
    </div>
  );
}

export default App;