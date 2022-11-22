import { EmotionRegistry } from '../lib/EmotionRegistry';
import { ThemeProvider } from '../contexts/ThemeContext';

type RootWrapperProps = React.PropsWithChildren;

export const RootWrapper: React.FC<RootWrapperProps> = ({ children }) => {
  return (
    <EmotionRegistry>
      <ThemeProvider>{children}</ThemeProvider>
    </EmotionRegistry>
  );
};
