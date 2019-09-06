import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './list';

describe('<List />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header='okay' key='1' cardIds={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header='Testlist' key='5' cardIds={['a','b']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
})