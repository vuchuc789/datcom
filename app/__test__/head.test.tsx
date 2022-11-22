import { render } from '@testing-library/react';
import Head from '../head';

describe('Root Head', () => {
  test('render correctly', () => {
    const { container } = render(<Head />);

    expect(container).toMatchSnapshot();
  });
});

export {};
