import React, { Component } from 'react';
import Child from './Child';

class P extends Component {
  constructor(props) {
    console.warn('[P] in constructor');
    super(props);
    this.state = {
      count: 0
    };
  }
  onClick = (e) => {
    console.log('[P] count ++');
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('[P] render');
    return (
      <div>
        {this.state.count}
        <button onClick={this.onClick}>Button</button>
        <Child />
      </div>
    );
  }
}

export default P;
