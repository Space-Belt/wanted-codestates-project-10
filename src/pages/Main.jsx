import Search from 'components/Search';
import SearchList from 'components/SearchList';
import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <Container>
      <Search />
      <SearchList />
    </Container>
  );
}

const Container = styled.div`
  background-color: #cae9ff;
  flex-direction: column;
  -webkit-box-pack: justify;
  /* justify-content: space-between; */
  align-items: center;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
`;

export default Main;
