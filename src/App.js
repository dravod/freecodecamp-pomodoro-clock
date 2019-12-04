import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./Routes.js";
import Break from './components/Break/index.js'
import Session from './components/Session/index.js'

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

  decrementSessionTime = () => {
    if (this.state.sessionTime > this.state.breakTime) {
      this.setState({sessionTime: this.state.sessionTime - 1})
    }
  }

  incrementSessionTime = () => {
    this.setState({sessionTime: this.state.sessionTime + 1})
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
          <Session
            sessionTime={this.state.sessionTime}
            decrementSessionTime={this.decrementSessionTime}
            incrementSessionTime={this.incrementSessionTime}
          >
          </Session>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
