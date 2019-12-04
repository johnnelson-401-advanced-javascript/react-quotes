import React from 'react';
import Quote from './Quote';
import PropTypes from 'prop-types';

export default function Quotes({ quotes }) {
  const QuoteList = quotes.map(quote => (
    <>
      <li key={quote.character}>
        <Quote quote={quote.quote} image={quote.image} character={quote.character} />
      </li>
    </>
  ));
  
  return (
    <>
      <ul>
        {QuoteList}
      </ul>
    </>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};
