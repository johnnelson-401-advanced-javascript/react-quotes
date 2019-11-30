import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuote, getQuotesLoading } from '../selectors/quote-selectors';
import { setQuote } from '../actions/quoteActions';
import Quote from '../components/Quotes/Quote';

export default function OneQuote() {
  const quote = useSelector(state => getQuote(state));
  const dispatch = useDispatch();
  const loading = useSelector(state => getQuotesLoading(state));
  const handleClick = () => dispatch(setQuote());

  useEffect(() => {
    console.log('UseEffect');
    
    dispatch(setQuote());
  }, []);
  
  if(loading) return <h1>Loading . . . </h1>;

  
  
  return (
    <>
      <Quote quote={quote} handleClick={handleClick} />
    </>
  );
}
