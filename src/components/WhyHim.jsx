import React from 'react'
import Image12 from '../images/12.png';
import Image13 from '../images/13.png';
import '../css/whyHim.css';

const whyHim = () => {
  return (
    <div className='whyHim'>
        <div className='whyHim__container-title'>
            <h3 className='whyHim__title'>¿POR QUÉ MIGUEL RAMÍREZ?</h3>
        </div>
        <div className='whyHim__container-description-prev'>
            <p className='whyHim__description'>
                Miguel es ingeniero, conferencista y divulgador de la PNL. Está certificado como Practitioner & Master Practitioner of Neuro-Linguistic Programming™ por The Society of NLP ™ y el Dr. Richard Bandler® (mente creativa y co-creador de la PNL). 
            </p>
            <p className='whyHim__description'>
                Todas sus formaciones han sido impartidas por Master Trainers de PNL que han formado (o forman todavía) parte del Staff Internacional del Dr. Bandler. Entre los que destacan figuras como: Omar Fuentes, Xavi Pirla, Gabriel Guerrero, Juan A. Pérez, Daniel Velasco, Kate Benson y Owen Fitzpatrick.
            </p>
        </div>
        <div className='whyHim__container-images'>
            <img className='whyHim__image' src={Image13} alt='Imagen 13' />
            <img className='whyHim__image' src={Image12} alt='Imagen 12' />
        </div>
        <div className='whyHim__container-description-forw'>
            <p className='whyHim__description'>
                Ha organizado certificaciones y talleres en Chile de PNL, ventas, comunicación efectiva y pensamiento crítico, colaborando con referentes internacionales y participando como staff en varios de ellos.
            </p>
            <p className="whyHim__description">
                Miguel ha impartido conferencias y talleres en universidades, colegios, empresas y clubes deportivos en Chile, Argentina y Colombia, y sus programas online han llegado a participantes de más de siete países (Chile, Perú, México, España, Venezuela, Argentina, entre otros).
            </p>
            <p className="whyHim__description">
                En el ámbito del cambio personal, ha acompañado a cientos de personas a transformar patrones de conducta, superar problemas y lograr objetivos mediante el uso práctico y estratégico de la PNL. Además, ha asesorado a profesionales en oratoria, presentaciones públicas y comunicación orientada a resultados, y a la fecha ha publicado dos libros sobre PNL, desarrollo personal y lenguaje.
            </p>
        </div>
    </div>
  )
}

export default whyHim