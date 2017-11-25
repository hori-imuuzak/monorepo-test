import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  background-color: lightgreen;
  width: 120px;
  height: 50px;
  line-height: 50px;
  border: white 1px solid;
  border-radius: 8px;
  text-align: center;
`;

export default (props) => (
  <Button>
    {props.children}
  </Button>
);
