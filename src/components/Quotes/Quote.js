import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ image, character, quote }) => (
  <figure className={styles.Quote}>
    <img src={image} alt={character} />
    <figcaption>{character}</figcaption>
    <figcaption>{quote}</figcaption>
  </figure>
);

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Quote;
