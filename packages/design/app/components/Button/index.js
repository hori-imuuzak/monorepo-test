import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TouchableHighlight = styled.TouchableHighlight`
  backgroundColor: green;
  padding: 16px;
  width: 120px;
  height: 60px;
  borderRadius: 8px;
`;

export default function Button(props) {
  return (
    <TouchableHighlight onPress={props.onPress}><Text>{props.children}</Text></TouchableHighlight>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
