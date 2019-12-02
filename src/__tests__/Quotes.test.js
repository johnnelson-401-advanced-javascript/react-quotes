import React from 'react';
import { mount } from 'enzyme';
import QuoteContainer from '../containers/QuoteContainer';

describe('Quote Container', () => {
  it('Renders a Quote Container', () => {
    const quote = { image: 'string.com', character: 'Name', quote: 'Test' };
    const handleClick = jest.fn();
    const wrapper = mount(<QuoteContainer quote={quote} handleClick={handleClick}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
});
