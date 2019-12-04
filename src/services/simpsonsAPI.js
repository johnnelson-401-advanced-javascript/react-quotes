export const getOneQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(quote => {
      return quote;
    });
};
