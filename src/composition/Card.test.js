import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('<Card />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title='okay' key='1' content='boogieboogie' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title='okay' key='1' content='boogieboogie' />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
})
