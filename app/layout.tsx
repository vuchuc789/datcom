import EmotionRegistry from './emotion';
import { GlobalStyles } from './GlobalStyles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <EmotionRegistry>
          <GlobalStyles />
          <>{children}</>
        </EmotionRegistry>
      </body>
    </html>
  );
}
