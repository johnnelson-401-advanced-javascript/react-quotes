import { createAction } from 'promise-middleware-redux';
import { getOneQuote } from '../services/simpsonsAPI';

export const setQuotes = () => dispatch => {
  
  dispatch({
    type: SET_QUOTES_LOADING
  });

  return getOneQuote()
    .then(quotes => {
      dispatch({
        type: SET_QUOTES,
        payload: quotes
      });
      dispatch({
        type: SET_QUOTES_DONE
      });
    });
};

export const [
  SET_QUOTES,
  SET_QUOTES_DONE,
  SET_QUOTES_LOADING
] = createAction('SET_QUOTES', setQuotes);
