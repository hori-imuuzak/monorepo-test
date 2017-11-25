import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  color: white;
`;

export default (props) => (
  <Text>
    {props.children}
  </Text>
);
