import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import Break from './components/Break/index.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakTime: 5,
      sessionTime: 25
    }
  }

  decrementBreakTime = () => {
    if (this.state.breakTime > 0) {
      this.setState({breakTime: this.state.breakTime - 1})
    }
  }

  incrementBreakTime = () => {
    if (this.state.breakTime < this.state.sessionTime) {
      this.setState({breakTime: this.state.breakTime + 1})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class="app-title">
            Pomodoro Clock
          </h1>
        </header>
        <main>
          <Break
            breakTime={this.state.breakTime}
            decrementBreakTime={this.decrementBreakTime}
            incrementBreakTime={this.incrementBreakTime}
            >
          </Break>
          <Session></Session>
        </main>
        <footer>
        </footer>
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
