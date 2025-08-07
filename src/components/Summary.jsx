import React from 'react'
import Image11 from '../images/11.png';
import Enroll from '../subComponents/Enroll';
import '../css/summary.css';

const Summary = () => {
  return (
    <div className='summary'>
        <div className='summary__container-points'>
            <div className='summary__points'>
                <p className='summary__text'>SI ADQUIERES TODO POR SEPARADO:</p>
                <p className='summary__total-value'>VALOR TOTAL: 751 USD DE ENTRENAMIENTO Y ACCESO EXCLUSIVO</p>
            </div>
            <div className='summary__prices-container'>
                <ul className='summary__prices-list'>
                    <li className="summary__price">Programa PNL para Coaches (online, en vivo): 497 USD</li>
                    <li className="summary__price">Curso “Cómo recuperar tu autoestima” (10 lecciones en video):  67 USD</li>
                    <li className="summary__price">Encuentros exclusivos (2 sesiones en vivo):  140 USD</li>
                    <li className="summary__price">Acceso a la comunidad privada de WhatsApp: 47 USD</li>
                </ul>
            </div>
        </div>
        <div className='summary__card-container'>
            <p className='summary__card-text'>PERO DURANTE ESTE LANZAMIENTO ESPECIAL, <br /> TU INVERSIÓN SERÁ DE SOLAMENTE<br /> CLP $380.000 ($390 USD)</p>
            <p className='summary__card-text'>Y SI TE INSCRIBES ANTES DEL 10 AGOSTO,<br /> TU INVERSIÓN SERÁ DE CLP $270.000 ($280 USD)</p>
        </div>
        <div className='summary__container-price-explanation'>
            <div className='summary__container-price-explanation-title-description'>
                <div className='summary__container-price-explanation-title'>
                    <h4 className='summary__price-explanatin-title'>¿Por qué un precio tan accesible para tanto valor?</h4>
                </div>
                <div className='summary__container-price-explanation-description'>
                    <p className='summary__price-explanation-description'>Mi misión es que más personas tengan acceso a la PNL auténtica, tal y como fue concebida originalmente, para que puedan aplicarla efectivamente y generar cambios reales en sí mismos y en quienes los rodean.</p>
                </div>
            </div>
        </div>
        <div className='summary__container-warning-card'>
            <div className='summary__container-warning-card-title'>
                <h5 className='summary__warning-card-title'><i className="bi bi-exclamation-triangle"></i>IMPORTANTE<i className="bi bi-exclamation-triangle"></i></h5>
            </div>
            <div className='summary__container-warning-card-subtitle'>
                <p className='summary__warning-card-subtitle'>ESTE PROGRAMA NO ESTARÁ DISPONIBLE TODO EL TIEMPO</p>
            </div>
            <div className='summary__container-warning-list'>
                <ul className='summary__warning-list'>
                    <li className="summary__warning-list-item">Las puertas se abren el 6 de agosto y se cierran el 15 de agosto.</li>
                    <li className="summary__warning-list-item">Los cupos son limitados.</li>
                </ul>
            </div>
        </div>
        <div className='summary__container-msg'>
            <p className="summary__msg">
                Si sabes que podrías impactar más, pero sientes que aún no tienes las herramientas para lograrlo con precisión… este programa es justo lo que necesitas.
            </p>
            <p className="summary__msg">
                <span className='summary__msg-b'>Inscríbete hoy y conoce la PNL como nunca antes te la enseñaron.</span> 
            </p>
        </div>
        <div className='summary__container-image'>
            <img className='summary__image' src={Image11} alt='11' />
        </div>
        <div className='summary__container-btn'>
            <Enroll />
        </div>
    </div>
  )
}

export default Summary