import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [] }
  }

  tick = () => {
    if(this.state.current <= 0) return;
    this.setState({current: this.state.current - 1});
  }

  startCountdown = () => {
    var node = document.getElementById("inp")
    var value = node.value
    var countdownStart = parseInt(value);
    this.setState({current: countdownStart});
    setInterval(this.tick, 1000);

    
  }

  generateLis = () => {
    return this.state.items.map(item => (<li> {item} </li>));
  }

  render() {
    return (
      <div>
        <input id="inp" />
        <button onClick={this.startCountdown}> Start the countdown </button>
        <div> {this.state.current} </div>
      </div>
    );
  }
}

export default App;
