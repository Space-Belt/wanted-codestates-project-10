const SEARCH_WORD = 'search/SEARCH_WORD';
const CLICKED_WORD = 'search/CLICKED_WORD';
const CHECK_DATA = 'search/CHECK_DATA';
const IDX_CONTROL = 'search/IDX_CONTROL';

const initialState = {
  searchDisease: [],
  clicked: '',
  searchWordCheck: false,
  diseaseIdx: -1,
};

export const idxControl = (idx) => ({ type: IDX_CONTROL, idx });
export const searchWord = (disease) => ({ type: SEARCH_WORD, disease });
export const checkData = (data) => ({ type: CHECK_DATA, data });
export const clickedWord = (clickedDisease) => ({ type: CLICKED_WORD, clickedDisease });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        searchDisease: [...action.disease],
        diseaseIdx: -1,
      };
    case CLICKED_WORD:
      return {
        ...state,
        clicked: action.clickedDisease,
      };
    case CHECK_DATA:
      if (action.data > 0) {
        return {
          ...state,
          searchWordCheck: true,
        };
      } else {
        return {
          ...state,
          searchWordCheck: false,
        };
      }
    case IDX_CONTROL:
      return {
        ...state,
        diseaseIdx: action.idx,
      };
    default:
      return state;
  }
}
