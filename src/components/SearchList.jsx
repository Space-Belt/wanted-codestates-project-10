import React from 'react';
// import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

function SearchList() {
  // const searchWord = useSelector((state) => state.search.searchDisease);
  const responsiveWeb = useMediaQuery({ query: '(min-width: 1040px)' });
  return (
    <RecommendBox responsiveWeb={responsiveWeb}>
      <RecommendWord>추천검색어</RecommendWord>
      <Diseases>
        <li>
          <BiSearch />암
        </li>
      </Diseases>
    </RecommendBox>
  );
}

const RecommendBox = styled.div`
  width: ${({ responsiveWeb }) => (responsiveWeb ? '660px' : 'calc(100vw - 40px)')};
  height: 400px;
  margin-top: 7px;
  border-radius: 20px;
  background-color: #fff;
  padding: 30px;
`;

const RecommendWord = styled.span`
  color: #747b81;
`;

const Diseases = styled.ul`
  margin-top: 15px;
  width: 100%;
`;

export default SearchList;
