import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BannerHome from './components/BannerHome/BannerHome';
import Partidos from './components/Partidos/Partidos';
import Noticias from './components/Noticias/Noticias';


function App() {
  return (
    <>
      <NavBar />
      <BannerHome/>
      <Partidos/>
      <Noticias/>
      <Footer />
    </>

  );
}

export default App;
