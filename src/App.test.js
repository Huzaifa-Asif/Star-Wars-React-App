import { render, screen } from '@testing-library/react';
import App from './App';
import { fetchPeople } from './services/RestApi';
import { act } from 'react-dom/test-utils';

test('Static Content is loaded', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('Swapi Api Calls are working', () => {
  act( async ()  => {
  const peopleResult = await fetchPeople();
  expect(peopleResult).not.toBeNull()
  });
});
