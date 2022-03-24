import React, { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { checkData, clickedWord, searchWord } from 'store/search';
import axios from 'axios';

function Search() {
  const dispatch = useDispatch();
  const clickedDisease = useSelector((state) => state.search.clicked);
  const inputRef = useRef();
  const responsiveWeb = useMediaQuery({ query: '(min-width: 1040px)' });
  const handleChange = async () => {
    dispatch(clickedWord(inputRef.current.value));
    if (inputRef.current.value.length > 0) {
      const { data } = await axios.get(`https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${inputRef.current.value}`).catch((err) => console.log(err));
      dispatch(checkData(inputRef.current.value.length));
      dispatch(searchWord(data));
    } else {
      dispatch(searchWord([]));
      dispatch(checkData(inputRef.current.value.length));
    }
  };

  return (
    <Container responsiveWeb={responsiveWeb}>
      <TextContents>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </TextContents>
      <SearchWrapper>
        <SearchBox responsiveWeb={responsiveWeb}>
          {responsiveWeb && <BiSearch />}
          <DiseaseInput type="text" ref={inputRef} responsiveWeb={responsiveWeb} placeholder="질환명을 입력해 주세요" value={clickedDisease} onChange={handleChange} />
          {!responsiveWeb && <BiSearch />}
        </SearchBox>
        {responsiveWeb && <SearchBtn href={`https://clinicaltrialskorea.com/studies?condition=${clickedDisease}`}>검색</SearchBtn>}
      </SearchWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  flex-direction: column;
  width: ${({ responsiveWeb }) => (responsiveWeb ? '660px' : 'calc(100vw - 40px)')};
`;

const TextContents = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SearchWrapper = styled.div`
  width: 100%;
  border-radius: 42px;
  background-color: #ffffff;
  flex-direction: row;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  position: relative;
`;

const SearchBox = styled.div`
  display: flex;
  padding: ${({ responsiveWeb }) => (responsiveWeb ? '20px 24px' : '12px 20px')};
  box-shadow: ${({ responsiveWeb }) => (responsiveWeb ? '' : '0px 2px 2px rgb(30 32 37 / 10%)')};
  border-radius: 50px;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  align-items: center;
  -webkit-box-align: center;
  flex: 1;
  flex-direction: row;
  & svg {
    width: 20px;
    height: 20px;
    color: black;
    margin-right: ${({ responsiveWeb }) => (responsiveWeb ? '15px' : '5px')};
  }
`;

const DiseaseInput = styled.input`
  font-size: ${({ responsiveWeb }) => (responsiveWeb ? '1.125rem' : '0.875rem')};
  border: 0;
  background-color: transparent;
  min-width: 0;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  ::placeholder {
    color: #a9afb8;
  }
`;

const SearchBtn = styled.a`
  border-width: 0;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  background-color: #007be9;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 18px;
  padding-bottom: 18px;
  cursor: pointer;
`;

export default Search;
