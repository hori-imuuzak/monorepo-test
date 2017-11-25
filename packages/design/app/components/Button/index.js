import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.TouchableHighlight`
  backgroundColor: green;
  padding: 16px;
  width: 120px;
  height: 60px;
  borderRadius: 8px;
`;

export default function Button(props) {
  return (
    <ButtonWrapper onPress={props.onPress}>{props.children}</ButtonWrapper>
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
