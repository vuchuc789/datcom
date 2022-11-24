import { render } from '@testing-library/react';
import { RootWrapper } from '../RootWrapper';

describe('RootWrapper', () => {
  test('render correctly', () => {
    const { container } = render(<RootWrapper>sample content</RootWrapper>);

    expect(container).toMatchSnapshot();
  });
});

export {};
