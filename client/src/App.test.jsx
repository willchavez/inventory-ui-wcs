import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StockServiceMock from './services/stock-service';

describe('App', () => {
  test('canary verifies test infrastructure', () => {
    expect(true).toEqual(true);
  });
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App stockService={new StockServiceMock()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
