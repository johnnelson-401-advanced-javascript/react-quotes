import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuote, getQuotesLoading } from '../selectors/quote-selectors';
import { setQuote } from '../actions/quoteActions';
import Quote from '../components/Quotes/Quote';

export default function OneQuote() {
  const quote = useSelector(state => getQuote(state));
  const dispatch = useDispatch();
  const loading = useSelector(state => getQuotesLoading(state));

  useEffect(() => {
    if(!quote) {
      dispatch(setQuote());
    }
  }, []);
  
  if(loading) return <h1>Loading . . . </h1>;

  function handleClick() {
    dispatch(setQuote());
  }

  return (
    <>
      <Quote quote={quote} handleClick={handleClick} />
    </>
  );
}
