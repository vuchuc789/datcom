import { render } from '@testing-library/react';
import { EmotionRegistry } from '../EmotionRegistry';

describe('EmotionRegistry', () => {
  test('render correctly', () => {
    const { container } = render(
      <EmotionRegistry>sample content</EmotionRegistry>
    );

    expect(container).toMatchSnapshot();
  });
});

export {};
