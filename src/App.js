import logo from './logo.svg';
import './App.css';
// import { NavBarHeader2 } from "./ui-components";
import { LandingPage1 } from "./ui-components";
import { StudyLinkLogo } from "./ui-components";

function App() {
  return (
    <div className="App">
      {/* <NavBarHeader2 /> */}
      <StudyLinkLogo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LandingPage1 />
    </div>
  );
}

export default App;
