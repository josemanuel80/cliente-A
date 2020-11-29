import logo from '../lib/yin-yang.svg';
import '../style/home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div>
          <img src={logo} className="home-logo" alt="logo" />
        </div>
        <div>
          <a href="http://localhost:3000/text">Entrar</a>
        </div>
      </header>
    </div>
  );
}

export default Home;
