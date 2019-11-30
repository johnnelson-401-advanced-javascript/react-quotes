import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ quote, handleClick }) => (
  <figure className={styles.Quote}>
    <img src={quote.image} alt={quote.character} />
    <figcaption>{quote.character}</figcaption>
    <figcaption>{quote}</figcaption>
    <button onClick={handleClick}>Get New Quote</button>
  </figure>
);

Quote.propTypes = {
  quote: PropTypes.shape({
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func.isRequired
};

export default Quote;
