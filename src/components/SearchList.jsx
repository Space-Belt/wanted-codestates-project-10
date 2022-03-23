import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

function SearchList() {
  const datas = useSelector((state) => state.search.searchDisease);
  const responsiveWeb = useMediaQuery({ query: '(min-width: 1040px)' });
  useEffect(() => {}, [datas]);
  console.log(datas);
  return (
    <RecommendBox responsiveWeb={responsiveWeb}>
      <RecommendWord>추천검색어</RecommendWord>
      <Diseases>
        {datas.length > 0 &&
          datas.map((data) => (
            <Disease key={data.id}>
              <BiSearch /> {data.name}
            </Disease>
          ))}
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
  overflow: scroll;
`;

const RecommendWord = styled.span`
  color: #747b81;
`;

const Diseases = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 100%;
  overflow: scroll;
`;

const Disease = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  & svg {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    line-height: 48px;
    margin-top: -2px;
  }
`;

export default SearchList;
