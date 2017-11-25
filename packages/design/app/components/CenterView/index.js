import React from 'react';
import styled from 'styled-components/native';

const View = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`;

export default (props) => (
  <View>
    {props.children}
  </View>
);
