import { render } from '@testing-library/react';
import RootLayout from '../layout';

describe('Root Layout', () => {
  test('render correctly', () => {
    const spiedConsoleError = jest.spyOn(console, 'error');

    // mock console.error because validateDOMNesting function throws an error when rendering
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    spiedConsoleError.mockImplementation(() => {});

    const { container } = render(<RootLayout>sample text</RootLayout>);

    expect(container).toMatchSnapshot();

    spiedConsoleError.mockRestore();
  });
});

export {};
