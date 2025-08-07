import React from 'react'
import Image7 from '../images/7.png';
import Image8 from '../images/8.png';
import WhatsAppImage from '../images/WhatsApp.webp';
import Enroll from '../subComponents/Enroll';
import '../css/whatIncludes.css';

const WhatIncludes = () => {
  return (
    <div className='whatIncludes__container'>
        <div className='whatIncludes__container-title-valued'>
            <h2 className='whatIncludes__title'>¿QUÉ MÁS INCLUYE EL PROGRAMA?</h2>
            <p className='whatIncludes__valued'>(Valorado en 497 USD)</p>
        </div>
        <div className='whatIncludes__container-content'>
            <div className='whatIncludes__container-content-title-description'>
                <h6 className='whatIncludes__content-title'>
                    ✅ Clases en vivo con Miguel Ramírez
                </h6>
                <p className='whatIncludes__content-description'>
                    Entrenamiento intensivo donde vas a comprender cómo aplicar la PNL desde sus bases reales, en procesos de coaching, cambio personal o acompañamiento a otros.
                </p>
            </div>
            <div className='whatIncludes__container-content-title-description'>
                <h6 className='whatIncludes__content-title'>
                    ✅ Grabaciones completas del programa
                </h6>
                <p className='whatIncludes__content-description'>
                    Acceso ilimitado a las grabaciones de todas las clases para que puedas repasar el contenido cuando lo necesites, a tu ritmo y las veces que quieras.
                </p>
            </div>
            <div className='whatIncludes__container-content-title-description'>
                <h6 className='whatIncludes__content-title'>
                    ✅ Manual del programa descargable
                </h6>
                <p className='whatIncludes__content-description'>
                    Material de apoyo exclusivo para que no solo aprendas, sino que tengas una guía clara para aplicar la PNL con orden y estructura.
                </p>
            </div>
        </div>
        <div className='whatIncludes__container-moreInfo'>
            <div className='whatIncludes__moreInfo-container-title'>
                <h4 className='whatIncludes__more-Info-title'>Y ADEMÁS VAS A RECIBIR ACCESO A LOS SIGUIENTES BONOS EXCLUSIVOS:</h4>
                <p className='whatIncludes__description'>(Sólo por esta edición)</p>
            </div>
            <div className='whatIncludes__moreInfo-card-container'>
                <div className='whatIncludes__moreInfo-card'>
                    <div className='whatIncludes__moreInfo-container-bonusNumber'>
                        <h3 className='whatIncludes__moreInfo-bonusNumber'>🎁 BONO #1:</h3>
                    </div>
                    <div className='whatIncludes__moreInfo-container-bonusName-value'>
                        <h3 className='whatIncludes__moreInfo-bonusName'>CURSO GRABADO: “CÓMO RECUPERAR TU AUTOESTIMA CON PNL”</h3>
                        <p className='whatIncludes__moreInfo-bonusValue'>(Valorado en 67 USD)</p>
                    </div>
                    <div className='whatIncludes__moreInfo-container-bonusDescription'>
                        <p className='whatIncludes__moreInfo-bonusDescription'>Las personas con "problemas de autoestima" suelen ser víctimas de sus propios procesos mentales. En las 10 lecciones de este curso aprenderás una metodología para que tomes control sobre ellos.</p>
                    </div>
                    <div className='whatIncludes__moreInfo-container-image'>
                        <img className='whatIncludes__moreInfo-image' src={Image7} alt='Imagen 7' />
                    </div>
                </div>
                <div className='whatIncludes__moreInfo-card'>
                    <div className='whatIncludes__moreInfo-container-bonusNumber'>
                        <h3 className='whatIncludes__moreInfo-bonusNumber'>🎁 BONO #2:</h3>
                    </div>
                    <div className='whatIncludes__moreInfo-container-bonusName-value'>
                        <h3 className='whatIncludes__moreInfo-bonusName'>ENCUENTROS EXCLUSIVOS: 2 SESIONES EXTRA DE PREGUNTAS Y DEMOSTRACIONES</h3>
                        <p className='whatIncludes__moreInfo-bonusValue'>(Valorado en 140 USD)</p>
                    </div>
                    <div className='whatIncludes__moreInfo-container-bonusDescription'>
                        <p className='whatIncludes__moreInfo-bonusDescription'>Espacios adicionales (2) en vivo con Miguel para profundizar, preguntar y fortalecer tu comprensión práctica.</p>
                    </div>
                    <div className='whatIncludes__moreInfo-container-image'>
                        <img className='whatIncludes__moreInfo-image' src={Image8} alt='Imagen 8' />
                    </div>
                </div>
                <div className='whatIncludes__moreInfo-card'>
                    <div className='whatIncludes__moreInfo-container-bonusNumber'>
                        <h3 className='whatIncludes__moreInfo-bonusNumber'>🎁 BONO #3:</h3>
                    </div>
                    <div className='whatIncludes__moreInfo-container-bonusName-value'>
                        <h3 className='whatIncludes__moreInfo-bonusName'>ACCESO A LA COMUNIDAD PRIVADA DE WHATSAPP</h3>
                        <p className='whatIncludes__moreInfo-bonusValue'>(Valorado en 47 USD)</p>
                    </div>
                    <div className='whatIncludes__moreInfo-container-bonusDescription'>
                        <p className='whatIncludes__moreInfo-bonusDescription'>Acompañamiento cercano durante el programa, donde vas a poder compartir experiencias, hacer preguntas y recibir apoyo directo tanto de Miguel como del grupo.</p>
                    </div>
                    <div className='whatIncludes__moreInfo-container-image'>
                        <img className='whatIncludes__moreInfo-image' src={WhatsAppImage} alt='Imagen de WhatsApp' />
                    </div>
                </div>
            </div>
        </div>
        <div className='whatIncludes__container-enroll'>
            <Enroll />
        </div>
    </div>
  )
}

export default WhatIncludes