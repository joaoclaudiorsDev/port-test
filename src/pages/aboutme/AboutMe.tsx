import Footer from '../../components/Footer/Footer';
import './AboutMeRegularScreen.css'
import './AboutMeAndroidScreen.css'


function AboutMePage() {

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('moreInfoSection');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <>
    <div id="sky"className='grandfather-about-me-container'>
      <div className='main-about-me-container'>
        <div className='my-photo-container'>
          <img className='my-photo' src='src/images/pic.jpg' />
        </div>
        <div className="description-container">
            <h1 className="Apresentation">
            <span className='oi-apresentation'>Oi!</span><br/> 
              Sou chamado de <span className="jc">JC</span>
            </h1>
            <div className='subTitle-box'>
              <h2 className="subTitle">
                { `E sou um desenvolvedor webb!` }
              </h2>
            </div>
        </div>
      </div>
      <button className="scroll-button" onClick={scrollToNextSection}>
        ↓
      </button>
    </div>
    <div className='grandfather-more-info-container' id="moreInfoSection">
      <div className='bar-info-container'>
        <div className='left-bar-info'/>
          <h1> Sobre mim</h1>
        <div className='right-bar-info'/>
      </div>
      <div className='more-info-container'> 
        <div className='more-info'>
          <h2> <span className='hello'> Olá! </span><br/>
            Meu nome é João Cláudio Ribeiro de Sousa (JC) e eu sou<br/>
            <span className='brazilian'> brasileiro. </span> 🇧🇷
          </h2>
          <h3> Meu objetivo profissional é...</h3>
          <p>
          aprimorar minha expertise em desenvolvimento de sistemas web e negócios, almejando uma posição de destaque no mercado e contribuindo ativamente para a <strong>criação de tecnologias inovadoras</strong>.
          </p>
          <h4> Minha experiência:</h4>
          <p>Sou um aluno dedicado em uma <strong>escola de programação intensiva</strong> (Trybe), onde me envolvo em projetos semanais desafiadores que refletem cenários do mundo real.
            Durante esse tempo, tive a oportunidade de trabalhar com diversas tecnologias essenciais de desenvolvimento web:
          </p>
          <ul className='info-list-container'>
            <li className='item-list'>React</li>
            <li className='item-list'>CSS</li>
            <li className='item-list'>JavaScript</li>
            <li className='item-list'>Jest</li>
            <li className='item-list'>TypeScript</li>
            <li className='item-list'>HTML</li>
            <li className='item-list'>RTL</li>
            <li className='item-list'>API Integration</li>
          </ul>
          <p>
          <strong>Essa experiência prática</strong>, aliada a prazos apertados, tem sido fundamental para aprimorar minhas habilidades e me preparar para enfrentar os desafios do mercado profissional.
          </p>
        </div>
      </div>
    </div>
      <Footer />
   </>
  );
};

export default AboutMePage;