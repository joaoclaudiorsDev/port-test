import { useEffect, useState } from 'react';
import './WelcomePage.css';
import './WelcomePageAndroid.css';
import DownloadButton from '../../components/ModalAlert/ModalAlert';
import Wave from '../../components/Wave/Wave';

function WelcomePage() {
  
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);


  return (
    <div id="welcome">
      <h1>JOÃO CLÁUDIO RIBEIRO</h1>
      <h2> {`A Front-end engineer.`}</h2>

      <div className='icon-box' >
        <a href="https://www.linkedin.com/in/joao-cladio-ribeiro-de-sousa-364315194/" target="_blank" rel="noopener noreferrer">
          <img className="social-links" src="src/images/in.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/joaoclaudiorsDev" target="_blank" rel="noopener noreferrer">
          <img className="social-links" src="src/images/github2.png" alt="GitHub" />
        </a>
        <DownloadButton />
      </div>
      <Wave />
    </div>
  );
};

export default WelcomePage;
