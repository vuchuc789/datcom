import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { UtilsProvider } from '../contexts/UtilsContext';
import { EmotionRegistry } from '../lib/EmotionRegistry';
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
          <ThemeProvider>
            <UtilsProvider>
              <AuthProvider>{children}</AuthProvider>
            </UtilsProvider>
          </ThemeProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
