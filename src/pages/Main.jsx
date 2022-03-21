import React from 'react';
import styled from 'styled-components';

function Main() {
  return <Container>Main</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
