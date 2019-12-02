import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuotes, getQuotesLoading } from '../selectors/quote-selectors';
import { setQuotes } from '../actions/quoteActions';
import Quotes from '../components/Quotes/Quotes';

export default function QuoteContainer() {
  const quotes = useSelector(state => getQuotes(state));
  const dispatch = useDispatch();
  const loading = useSelector(state => getQuotesLoading(state));
  const handleClick = () => dispatch(setQuotes());

  useEffect(() => {
    if(quotes.length <= 0) {
      dispatch(setQuotes());
    }
  }, []);

  if(loading) return <h1>Loading . . . </h1>;

  return (
    <>
      <button onClick={handleClick}>Get New Quote</button>
      <Quotes quotes={quotes} />
    </>
  );
}
