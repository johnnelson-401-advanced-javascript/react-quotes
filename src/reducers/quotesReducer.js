import { SET_QUOTES_LOADING, SET_QUOTES, SET_QUOTES_DONE } from '../actions/quoteActions';

const initialState = {
  quotes: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_QUOTES:
      return { ...state, quotes: action.payload };
    case SET_QUOTES_LOADING: 
      return { ...state, loading: true };
    case SET_QUOTES_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }


}
