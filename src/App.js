import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BannerHome from './components/BannerHome/BannerHome';
import Partidos from './components/Partidos/Partidos';


function App() {
  return (
    <>
      <NavBar />
      <BannerHome/>
      <Partidos/>
      <Footer />
    </>

  );
}

export default App;
