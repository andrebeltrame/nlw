import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../images/logo.svg';
import '../styles/landing.css';

function Landing() {
    return (
        <div id="page-landing">
        <div className="content-wrapper">
            <img src={logoImg} alt="Happy"/>
            <main>
              <h1>Leve felicidade para o mundo</h1>
              <p>Visite orfanatos e mude o dia de muitas crianças </p>
              <Link to="/app" className="enter-app"> 
                <FiArrowRight color="rgba(0,0,0, 0.6)" size={26} /> 
              </Link>
            </main>
            <div className="location">
                <strong>Florianópolis</strong>
                <span>Santa Catarina</span>
            </div>
          </div>
       </div>
    )
}

export default Landing
