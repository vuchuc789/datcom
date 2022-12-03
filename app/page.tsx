import { Container } from '../components/Container';
import { MainPage } from '../components/MainPage';
import { TopBar } from '../components/TopBar';

const RootPage = async () => {
  return (
    <Container>
      <TopBar />
      <MainPage />
    </Container>
  );
};

export default RootPage;
