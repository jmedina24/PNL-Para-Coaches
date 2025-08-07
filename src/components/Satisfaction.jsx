import React from 'react'
import Image2 from '../images/2.png';
import Image3 from '../images/3.png';
import '../css/satisfaction.css';

const Satisfaction = () => {
  return (
    <div className='satisfaction'>
        <div className='satisfaction__container-image'>
            <img className='satisfaction__image' src={Image2} alt='2' />
        </div>
        <div className='satisfaction__container-text'>
            <p className='satisfaction__text'>
                Llevo más de 7 años aplicando, divulgando y enseñando PNL en contextos muy diversos.<br />He visto en clientes y alumnos cómo, cuando se entiende y aplica bien, transforma vidas profundamente. Por eso, si en 30 días —asistiendo a las sesiones y aplicando lo aprendido— no ves los resultados esperados, te devuelvo el 100% de tu inversión.
            </p>
        </div>
        <div className='satisfaction__container-rating-image'>
            <img className='satisfacition__rating-image' src={Image3} alt='3' />
        </div>
    </div>
  )
}

export default Satisfaction