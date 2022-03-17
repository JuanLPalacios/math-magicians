import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  const result = render(<App />);
  expect(result).toBeTruthy();
});
