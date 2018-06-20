import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    console.warn('[Child] constructor');
    super(props);
  }
  render() {
    console.log('[Child] render');
    return (
      <div>This is Child</div>
    );
  }
}

export default Child;
