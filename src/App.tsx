import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Main } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
