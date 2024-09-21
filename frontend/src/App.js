import logo from './basketball.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To My Site</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://youtube.com/@idan_mat77?si=ucT_xPuXAbAsRZhl"
          target="_blank"
          rel="noopener noreferrer"
        >
          My YT Channel
        </a>
      </header>
    </div>
  );
}

export default App;
