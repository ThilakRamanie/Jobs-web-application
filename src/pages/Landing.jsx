import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import Main from "../assets/images/main.svg";
import {Logo} from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            temporibus voluptates laborum quaerat nostrum at, magnam, doloribus
            laboriosam dolore amet eius et. Voluptatibus optio architecto maxime
            harum mollitia libero veniam?
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={Main} alt="main image" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
