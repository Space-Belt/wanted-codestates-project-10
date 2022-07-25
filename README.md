# 개인 과제

![최종](https://user-images.githubusercontent.com/82592845/160156765-5db12469-32dd-4689-8912-d46f3bf263ae.gif)

### [☻배포주소](https://dynamic-sunburst-77084d.netlify.app)

---

<br />

### 기술스택

<img src="https://img.shields.io/badge/Reat-333333?style=flat-round&logo=React&logoColor=ffffff"/></a> &nbsp;
<img src="https://img.shields.io/badge/JavaScript-333333?style=flat-round&logo=JavaScript&logoColor=ffffff"/></a>&nbsp;
<img src="https://img.shields.io/badge/Redux-333333?style=flat-round&logo=Redux&logoColor=ffffff"/></a> &nbsp;
<img src="https://img.shields.io/badge/Axios-333333?style=flat-round&logo=PlayStation&logoColor=ffffff"/></a> &nbsp;

---

### 실행방법

`npm i` <br/>
`npm start`

---

<br />

### 구현 목록

> 1.검색어 입력시 추천검색어 목록 ( debounce 이용 API 최적화 )

```jsx
const handleDebounce = debounce(async () => {
  const { data } = await axios.get(`https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${inputRef.current.value}`).catch((err) => console.log(err));
  dispatch(checkData(inputRef.current.value.length));
  dispatch(searchWord(data.splice(0, 7)));
  return;
}, 500);

const handleChange = async () => {
  dispatch(clickedWord(inputRef.current.value));
  if (inputRef.current.value.length > 0) {
    handleDebounce();
  } else {
    dispatch(searchWord([]));
    dispatch(checkData(inputRef.current.value.length));
  }
};

<Diseases>
  {listIdx !== null &&
    datas.map((data, index) => (
      <Disease className={index === listIdx ? 'active' : ''} ref={diseaseRef} key={data.id} onClick={() => handleOnClick(data.name)} onMouseOver={(e) => handleMouseOver(index)}>
        <BiSearch /> <p>{data.name}</p>
      </Disease>
    ))}
</Diseases>;
```

- debounce 를 이용하여 입력할때마다 바로 바로 API가 호출되지 않게 했다.
- 목록은 홈페이지와 같게 7개로 제한했다.

---

> 2.반응형

```jsx
import { useMediaQuery } from 'react-responsive';
const responsiveWeb = useMediaQuery({ query: '(min-width: 1040px)' });
width: ${({ responsiveWeb }) => (responsiveWeb ? '660px' : 'calc(100vw - 40px)')};
```

- useMediaQuery 를 사용하여 반응형을 조금더 간편하게 구현했다.

---

> 3.방향키 이용 목록 컨트롤

```jsx
if (e.nativeEvent.isComposing === false && e.key === 'ArrowDown') {
  if (listIdx < datas.length - 1) {
    dispatch(idxControl(listIdx + 1));
    return;
  }
}
if (e.key === 'ArrowUp') {
  if (listIdx > 0) {
    dispatch(idxControl(listIdx - 1));
    return;
  }
}
```

- 리덕스에서 listIdx 초기값을 -1로 선언하여 방향키 아래, 위 눌렀을 때의 조건으로 값을 조절했다.

> 4.엔터키 이용 선택, 검색

```jsx
if (e.key === 'Enter') {
  if (listIdx > -1) {
    dispatch(clickedWord(datas[listIdx].name));
  } else {
    enterKey.click();
    return;
  }
  if (clickedDisease === datas[listIdx].name) {
    enterKey.click();
  }
}
```

- 검색어를 입력하고 엔터 누르면 바로 선택이 되고 목록에서 엔터를 눌러 추천목록 선택 후 엔터를 누르면 검색이 되도록 구현하였다.

---
