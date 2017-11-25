import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Text = styled.Text`
  color: black;
`;

export default function NormalText(props) {
  return (
    <Text>{props.children}</Text>
  );
}

NormalText.defaultProps = {
  children: null,
};

NormalText.propTypes = {
  children: PropTypes.node,
};
