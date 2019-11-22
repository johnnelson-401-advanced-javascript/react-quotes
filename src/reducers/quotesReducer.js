import { SET_QUOTES_LOADING, SET_QUOTE, SET_QUOTES_DONE } from '../actions/quoteActions';

const initialState = {
  quote: {},
  quotes: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_QUOTE:
      return { ...state, quote: action.payload };
    case SET_QUOTES_LOADING: 
      return { ...state, loading: true };
    case SET_QUOTES_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }


}
