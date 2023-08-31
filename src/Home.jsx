import AboutEfecto from './About/AboutEfecto';
import { Banner } from './Banner/Banner';
import { Divisor } from './Divisor/Divisor';
import Footer from './Footer/Footer';
import Proyectos from './Projectos/Proyectos';

const Home = () => {

  return (
    <div id="home">
      
      <Banner />
      <Divisor numero="(001)"/>
      <AboutEfecto />
      <Divisor numero="(002)"/>
      <Proyectos />
      
    </div>
  );
}

export default Home