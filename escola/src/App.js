import logo from './logo.svg';
import './App.css';
import HelloWord from './componetes/HelloWord';

function App()  {
  const name = 'Lucas'
  const newName = name.toUpperCase()
  
  
  
  return (
    <div className="App">
     <HelloWord/>
     <span className = "emoji" title="Sorrindo">&#x1f602;</span>
     <p>Clique no emoji para exibir o nome dele!</p>
     <span className = "emojii" title="Rosto sorridente de suor">&#x1f605;</span>
     <span className = "emojii" title="Alegre">&#x1f606;</span>
     <span className = "emojii" title="Alegre">&#x1f607;</span>
     




    </div>
  );
}

export default App;
