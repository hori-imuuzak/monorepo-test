import React, { Component } from 'react';
import { Button, Text } from '@countup/design/web/components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <Button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          CountUp!!
        </Button>
        <Text>{this.state.count}</Text>
      </div>
    );
  }
}

export default App;
