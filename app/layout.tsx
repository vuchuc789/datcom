import { EmotionRegistry } from '../lib/EmotionRegistry';
import { ThemeProvider } from '../contexts/ThemeContext';

type RootLayoutProps = React.PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <EmotionRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
