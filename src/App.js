import logo from './logo.svg';
import './App.css';
import './home.css';
import { HomeComponent } from './HomeComponent';
import HeaderComponent from './HeaderComponent';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderComponent/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
      <div>
        <HomeComponent />
      </div>
    </div>
  );
}

export default App;
