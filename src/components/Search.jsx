import React, { useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

function Search() {
  // const [inputChange, setInputChange] = useState(false);
  // const inputRef = useRef();
  const responsiveWeb = useMediaQuery({ query: '(min-width: 1040px)' });
  // const handleOnChange = () => {
  //   if (inputRef.current.value) {
  //     setInputChange(true);
  //   } else if (!inputRef.current.value) {
  //     setInputChange(false);
  //   }
  // };

  return (
    <Container responsiveWeb={responsiveWeb}>
      <TextContents>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </TextContents>
      <SearchWrapper>
        <SearchBox>
          {responsiveWeb && <BiSearch />}
          <DiseaseInput type="text" placeholder="질환명을 입력해 주세요" />
          {!responsiveWeb && <BiSearch />}
        </SearchBox>
        <SearchBtn>검색</SearchBtn>
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
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  align-items: center;
  font-size: 1.125rem;
  -webkit-box-align: center;
  flex: 1;
  flex-direction: row;
  & svg {
    width: 16;
    height: 16;
    color: black;
    margin-right: 15px;
  }
`;

const DiseaseInput = styled.input`
  font-size: 1.125rem;
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
