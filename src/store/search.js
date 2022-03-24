const SEARCH_WORD = 'search/SEARCH_WORD';
const CLICKED_WORD = 'search/CLICKED_WORD';
const CHECK_DATA = 'search/CHECK_DATA';
const NO_SEARCHWORD = 'search/NO_SEARCHWORD';

const initialState = {
  searchDisease: [],
  clicked: '',
  searchWordCheck: false,
};

export const searchWord = (disease) => ({ type: SEARCH_WORD, payload: disease });
export const checkData = (data) => ({ type: CHECK_DATA, data });
export const clickedWord = (clickedDisease) => ({ type: CLICKED_WORD, clickedDisease });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        searchDisease: [...action.payload],
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
    default:
      return state;
  }
}
