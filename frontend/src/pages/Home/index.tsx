import { ReactComponent as MainImage } from '../../assets/images/main-img.svg';
import ButtonIcon from '../../components/ButtonIcon';
import Navbar from '../../components/Navbar';
import './style.css';
//import '../../App.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de produtos</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponíveis no
                mercado.
              </p>
            </div>
            <ButtonIcon />
          </div>
          <div className="home-img-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
