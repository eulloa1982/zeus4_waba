import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/Board/Board';

function App( { posts }) {
  return (
    <div className="App">
      
      <BoardComponent />
    </div>
  );
}

export default App;