import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="app-title">
          Pomodoro Clock
        </h1>
      </header>
      <main>
        <Break>
          <label id="break-label">
            <span>"Break Length"</span>
          </label>
          <button id="break-decrement"></button>
          <button id="break-increment"></button>
        </Break>

        <Session>
          <label id="session-label">
            <span>"Session Length"</span>
          </label>
          <button id="session-decrement"></button>
          <button id="session-increment"></button>
        </Session>
      </main>
      <footer>
      </footer>
    </div>
  );
}

class Break extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     };
   }
}

class Session extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     };
   }
}


export default App;
