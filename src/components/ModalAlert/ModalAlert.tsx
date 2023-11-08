import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Importe o CSS para estilos padrão
import { confirmAlert } from 'react-confirm-alert'; // Importe a função de confirmação
import './ModalAlert.css'
import './ModalAlertAndroid.css'


const DownloadButton = () => {
  const handleDownload = () => {
    confirmAlert({
      title: 'Meu currículo',
      message: 'Você realmente deseja fazer download?',
      buttons: [
        {
          label: 'Sim, eu quero!',
          onClick: () => {
            const fileUrl = 'src/assets/Currículo João Cláudio-2.pdf';
            window.open(fileUrl, '_blank');
          }
        },
        {
          label: 'Não :/',
          onClick: () => console.log('Download cancelado pelo usuário.')
        }
      ]
    });
  };

  return (
    <>
      <a onClick={handleDownload}>
        <img className="social-links" src="src/images/document.png" alt="Imagem de Download" />
      </a>
    </>
  );
};

export default DownloadButton;
