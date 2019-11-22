import { creatAction } from 'promise-middleware-redux';
import { getOneQuote } from '../services/simpsonsAPI';

export const setQuote = () => dispatch => {
  dispatch({
    type: SET_QUOTES_LOADING
  });

  return getOneQuote()
    .then(quote => {
      dispatch({
        type: SET_QUOTE,
        payload: quote
      });
      dispatch({
        type: SET_QUOTES_DONE
      });
    });
};

export const [
  SET_QUOTE,
  SET_QUOTES_DONE,
  SET_QUOTES_LOADING
] = creatAction('SET_QUOTE', setQuote);
