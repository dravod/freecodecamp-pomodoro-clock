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
        <Break></Break>
        <Session></Session>
      </main>
      <footer>
      </footer>
    </div>
  );
}

class Break extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      break: 1
    };
=======
   constructor(props) {
     super(props);
     this.state = {
       value: 5,
     };
>>>>>>> 4121ae4de449782d4f57740c467f0c0224c1861d
   }
   render(){
     return(
       <div>
         <label id="break-label">
           <span>"Break Length"</span>
         </label>
         <button id="break-decrement"></button>
         <span id="break-length">{this.state.value}</span>
         <button id="break-increment"></button>
       </div>
     );
   }
}

class Session extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      session: 25
    };
  }
=======
   constructor(props) {
     super(props);
     this.state = {
       value: 25,
     };
   }
   render(){
     return(
       <div>
         <label id="session-label">
           <span>"Session Length"</span>
         </label>
         <button id="session-decrement"></button>
        <span id="session-length">{this.state.value}</span>
         <button id="session-increment"></button>
       </div>
     );
   }
>>>>>>> 4121ae4de449782d4f57740c467f0c0224c1861d
}


export default App;
