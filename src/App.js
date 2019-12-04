import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";

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
   constructor(props) {
     super(props);
     this.state = {
       value: 5,
     };
   }

   render(){

     const decrementTime = () => {
       if (this.state.value > 0) {
         this.setState({value: this.state.value - 1})
      }
     }

     const incrementTime = () => {
       this.setState({value: this.state.value + 1})
     }

     return(
       <div>
         <label id="break-label">
           <span>"Break Length"</span>
         </label>
         <button
          id="break-decrement"
          onClick={() => decrementTime()}
          > -
          </button>
         <span id="break-length">{this.state.value}</span>
         <button
          id="break-increment"
          onClick={() => incrementTime()}
         > +
         </button>
       </div>
     );
   }
}

class Session extends React.Component {
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
         <button id="session-increment"> - </button>
        <span id="session-length">{this.state.value}</span>
        <button id="session-decrement"> + </button>
       </div>
     );
   }
}


export default App;
