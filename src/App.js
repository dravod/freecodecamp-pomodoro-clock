import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./Routes.js";
import Break from './components/Break/index.js'
import Session from './components/Session/index.js'
import Timer from './components/Timer/index.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakTimeMinutes: 5,
      breakTimeSeconds: 10,
      sessionTimeMinutes: 25,
      sessionTimeSeconds: 10
    }
  }

  decrementBreakTimeMinutes = () => {
    if (this.state.breakTimeMinutes > 0) {
      this.setState({breakTimeMinutes: this.state.breakTimeMinutes - 1})
    }
  }

  playPause = (e) => {
    console.log(e.target, Date.now());
  }

  incrementBreakTimeMinutes = () => {
    // if (this.state.breakTimeMinutes < this.state.sessionTimeMinutes) {
      this.setState({breakTimeMinutes: this.state.breakTimeMinutes + 1})
    // }
  }

  decrementBreakTimeSeconds = () => {
    if (this.state.breakTimeSeconds > 0) {
      this.setState({breakTimeSeconds: this.state.breakTimeSeconds - 1})
    }
  }

  incrementBreakTimeSeconds = () => {
    if (this.state.breakTimeSeconds < 59) {
      this.setState({breakTimeSeconds: this.state.breakTimeSeconds + 1})
    }
  }

  decrementSessionTimeMinutes = () => {
    // if (this.state.sessionTimeMinutes > this.state.breakTimeMinutes) {
      this.setState({sessionTimeMinutes: this.state.sessionTimeMinutes - 1})
    // }
  }

  incrementSessionTimeMinutes = () => {
    this.setState({sessionTimeMinutes: this.state.sessionTimeMinutes + 1})
  }

  decrementSessionTimeSeconds = () => {
    if (this.state.sessionTimeSeconds > 0) {
      this.setState({sessionTimeSeconds: this.state.sessionTimeSeconds - 1})
    }
  }

  incrementSessionTimeSeconds = () => {
    if (this.state.sessionTimeSeconds < 59) {
      this.setState({sessionTimeSeconds: this.state.sessionTimeSeconds + 1})
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
            breakTimeMinutes={this.state.breakTimeMinutes}
            decrementBreakTimeMinutes={this.decrementBreakTimeMinutes}
            incrementBreakTimeMinutes={this.incrementBreakTimeMinutes}
            breakTimeSeconds={this.state.breakTimeSeconds}
            decrementBreakTimeSeconds={this.decrementBreakTimeSeconds}
            incrementBreakTimeSeconds={this.incrementBreakTimeSeconds}
            >
          </Break>
          <br/>
          <Session
            sessionTimeMinutes={this.state.sessionTimeMinutes}
            decrementSessionTimeMinutes={this.decrementSessionTimeMinutes}
            incrementSessionTimeMinutes={this.incrementSessionTimeMinutes}
            sessionTimeSeconds={this.state.sessionTimeSeconds}
            decrementSessionTimeSeconds={this.decrementSessionTimeSeconds}
            incrementSessionTimeSeconds={this.incrementSessionTimeSeconds}
          >
          </Session>
          <Timer playPause={this.playPause}/>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
