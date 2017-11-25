import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, NormalText, CenterView } from '@countup/design/app/components';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <CenterView>
        <Button
          onPress={() => this.setState({ count: this.state.count + 1 })}
        >
          CountUp!!
        </Button>
        <NormalText>{this.state.count}</NormalText>
      </CenterView>
    );
  }
}
