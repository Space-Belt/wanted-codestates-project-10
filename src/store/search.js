const SEARCH_WORD = 'search/SEARCH_WORD';

const initialState = {
  searchDisease: '',
};

export const searchWord = (disease) => ({ type: SEARCH_WORD, disease });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        searchDisease: action.disease,
      };
    default:
      return state;
  }
}
