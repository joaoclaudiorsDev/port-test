import { useState } from 'react';
import DownloadButton from '../ModalAlert/ModalAlert';
import './footer.css'

function Footer() {

  const [email, setEmail] = useState('joaoclaudiobio@gmail.com');
  const [showEmailDiv, setShowEmailDiv] = useState(true);

  const scrollToBeforeSection = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }   


  const copyEmailAndChangeDiv = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          // Nenhum popup é mostrado ao copiar
        })
        .catch((error) => {
          console.error('Erro ao copiar o e-mail para a área de transferência', error);
        });
    } else {
      // caso o navegador não suporte api clipboard
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }
    setShowEmailDiv(false);

    setTimeout(() => {
      setShowEmailDiv(true);
    }, 10000); // após 15 segundos, muda a div
  }


    return (
      <footer className="footer">
        <button className="up-button" onClick={scrollToBeforeSection}>
        ↑
        </button>
        <div className="container">
          <div className='footer-links-container'>
            <a href="https://www.linkedin.com/in/joao-cladio-ribeiro-de-sousa-364315194/" target="_blank" rel="noopener noreferrer">
              <img className="social-links" src="src/images/in.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/joaoclaudiorsDev" target="_blank" rel="noopener noreferrer">
              <img className="social-links" src="src/images/github2.png" alt="GitHub" />
            </a>
            <DownloadButton />
          </div>
            {showEmailDiv ? (
              <div className="e-mail" onClick={copyEmailAndChangeDiv}>
                {`${email}`}
              </div>
            ) : (
              <div className='e-mail-copied'>
                <span>E-mail copiado!</span>
              </div>
            )}
            <p>&copy; {new Date().getFullYear()} João Cláudio Ribeiro de Sousa</p>
          </div>
      </footer>
    );
  }
  
export default Footer;