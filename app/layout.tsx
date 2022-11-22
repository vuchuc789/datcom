import { RootWrapper } from '../components/RootWrapper';
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
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
