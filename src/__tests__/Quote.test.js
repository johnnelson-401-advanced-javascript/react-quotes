import React from 'react';
import { shallow } from 'enzyme';
import Quote from '../components/Quotes/Quote';

describe('Renders a Quote Component', () => {
  it('Tests the Quote component', () => {
    const quote = { image: 'string.com', character: 'Name', quote: 'Test' };
    const handleClick = jest.fn();
    const wrapper = shallow(<Quote quote={quote} handleClick={handleClick} />);
    expect(wrapper).toMatchSnapshot();


  });  
});
