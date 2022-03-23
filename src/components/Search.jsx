import React, { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { searchWord } from 'store/search';

function Search() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const responsiveWeb = useMediaQuery({ query: '(min-width: 1040px)' });
  const handleChange = () => {
    dispatch(searchWord(inputRef.current.value));
  };

  return (
    <Container responsiveWeb={responsiveWeb}>
      <TextContents>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </TextContents>
      <SearchWrapper>
        <SearchBox responsiveWeb={responsiveWeb}>
          {responsiveWeb && <BiSearch />}
          <DiseaseInput type="text" ref={inputRef} responsiveWeb={responsiveWeb} placeholder="질환명을 입력해 주세요" onChange={handleChange} onKeyDown={handleChange} />
          {!responsiveWeb && <BiSearch />}
        </SearchBox>
        {responsiveWeb && <SearchBtn>검색</SearchBtn>}
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

const SearchBtn = styled.button`
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
