import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1><p>
          Hydro-Plan Associates
        </p></h1>
        <a
          className="App-link"
          href="https://hydroplanassociates.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consulting Engineers
        </a>
      </header>
    </div>
  );
}

export default App;
