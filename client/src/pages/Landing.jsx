import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, expedita soluta cum cupiditate consequatur autem iusto reiciendis rerum perspiciatis repellat nihil a molestias beatae nam hic totam consequuntur pariatur! In.
          </p>
          <Link to="./register" className='btn register-link'>
            Register
          </Link>
          <Link to="./login" className='btn'>
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  );
};
export default Landing;