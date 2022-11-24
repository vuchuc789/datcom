import { render } from '@testing-library/react';
import { ThemeProvider } from '../ThemeContext';

describe('ThemeProvider', () => {
  test('render correctly', () => {
    const { container } = render(<ThemeProvider>sample content</ThemeProvider>);

    expect(container).toMatchSnapshot();
  });
});

export {};
