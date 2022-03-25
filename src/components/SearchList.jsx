import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { clickedWord, idxControl } from 'store/search';

function SearchList() {
  const dispatch = useDispatch();
  const diseaseRef = useRef();
  const listIdx = useSelector((state) => state.search.diseaseIdx);
  const checking = useSelector((state) => state.search.searchWordCheck);
  const datas = useSelector((state) => state.search.searchDisease);
  const responsiveWeb = useMediaQuery({ query: '(min-width: 1040px)' });

  const handleOnClick = (name) => {
    dispatch(clickedWord(name));
  };

  const handleMouseOver = (e) => {
    dispatch(idxControl(e));
  };

  return (
    <>
      {datas.length > 0 ? (
        <RecommendBox responsiveWeb={responsiveWeb}>
          <RecommendWord>추천검색어</RecommendWord>
          <Diseases>
            {listIdx !== null &&
              datas.map((data, index) => (
                <Disease className={index === listIdx ? 'active' : ''} ref={diseaseRef} key={data.id} onClick={() => handleOnClick(data.name)} onMouseOver={(e) => handleMouseOver(index)}>
                  <BiSearch /> <p>{data.name}</p>
                </Disease>
              ))}
          </Diseases>
        </RecommendBox>
      ) : datas.length === 0 && checking ? (
        <RecommendBox className="noResult" responsiveWeb={responsiveWeb}>
          <RecommendWord>검색 결과 없음</RecommendWord>
        </RecommendBox>
      ) : (
        <></>
      )}
    </>
  );
}

const RecommendBox = styled.div`
  width: ${({ responsiveWeb }) => (responsiveWeb ? '660px' : 'calc(100vw - 40px)')};
  max-height: 400px;
  margin-top: 7px;
  border-radius: 20px;
  background-color: #fff;
  padding: 30px;
`;

const RecommendWord = styled.span`
  height: 21px;
  color: #747b81;
`;

const Diseases = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 5px;
  width: 100%;
  overflow: scroll;
`;

const Disease = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  height: 48px;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-color: #efefef;
    border-radius: 20px;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }
  p {
    display: inline-block;
    margin-top: 2px;
  }
  &.active {
    background-color: #efefef;
    border-radius: 20px;
  }
`;

export default SearchList;
