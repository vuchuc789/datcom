import { render } from '@testing-library/react';
import RootPage from '../page';
import { RootWrapper } from '../../components/RootWrapper';

describe('Root Page', () => {
  test('render correctly', () => {
    const { container } = render(
      <RootWrapper>
        <RootPage />
      </RootWrapper>
    );

    expect(container).toMatchSnapshot();
  });
});

export {};
