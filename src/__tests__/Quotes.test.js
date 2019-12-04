import React from 'react';
import { shallow } from 'enzyme';
import Quotes from '../components/Quotes/Quotes';

describe('Quotes', () => {
  it('Renders a list of Quotes', () => {
    const quotes = [{ image: 'string.com', character: 'Name', quote: 'Test' }];
    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
