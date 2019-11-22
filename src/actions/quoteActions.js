import { creatAction } from 'promise-middleware-redux';
import { getOneQuote } from '../services/simpsonsAPI';

export const setQuote = () => dispatch => {
  dispatch({
    type: SET_QUOTES_LOADING
  });

  return getOneQuote()
    .then(quote => {
      dispatch({
        type: SET_QUOTES,
        payload: quote
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
] = creatAction('SET_QUOTE', setQuote);