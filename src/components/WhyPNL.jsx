import React from 'react'
import '../css/whyPNL.css';

const WhyPNL = () => {
  return (
    <div className='whyPNL__container'>
        <div className='whyPNL__container-title'>
            <h2 className='whyPNL__title'>¿POR QUÉ PROGRAMACIÓN NEURO-LINGÜÍSTICA?</h2>
        </div>
        <div className='whyPNL__container-text-card'>
            <div className='whyPNL__container-text'>
                <p className="whyPNL__text">
                    La PNL es un modelo <span className='whyPNL__text-bi'>-y una tecnología de intervención-</span> basado en la presuposición operativa de que todo comportamiento tiene una estructura que puede ser descrita, aprendida y modificada <span className='whyPNL__text-i'>(reprogramada).</span> 
                </p>
                <p className="whyPNL__text">
                    Te permite descubrir qué es eso “invisible” que cada persona hace ‘dentro de su cabeza’ para pensar, sentir, decidir y actuar como lo hace. 
                </p>
                <p className="whyPNL__text">
                    La PNL no pretende dar una explicación de por qué se generan estas estructuras, sino describir cómo funcionan y ofrece un conjunto de herramientas y técnicas para intervenir eficazmente en ellas.
                </p>
                <p className="whyPNL__text">
                    <span className='whyPNL__text-bu'>En síntesis, es una tecnología para reestructurar la experiencia humana desde su arquitectura interna.</span>
                </p>
            </div>
            <div className='whyPNL__container-card'>
                <div className='whyPNL__card-title-container'>
                    <h5 className='whyPNL__card-title'>Con la PNL serás capaz de:</h5>
                </div>
                <div className='whyPNL__card-container-list'>
                    <ul className='whyPNL__card-list'>
                        <li className="whyPNL__card-item">
                            Comprender cómo cada cliente estructura internamente su realidad...
                        </li>
                        <li className="whyPNL__card-item">
                            Interpretar con precisión su lenguaje verbal y no verbal...
                        </li>
                        <li className="whyPNL__card-item">
                            Diseñar preguntas de precisión que generen impacto profundo...
                        </li>
                        <li className="whyPNL__card-item">
                            Comunicarte de forma persuasiva, profunda e hipnótica...
                        </li>
                        <li className="whyPNL__card-item">
                            Identificar, sembrar y cambiar creencias con efectividad...
                        </li>
                        <li className="whyPNL__card-item">
                            Detectar los ‘programas mentales’ que impiden el cambio... y
                        </li>
                        <li className="whyPNL__card-item">
                            Rediseñar dichos programas para que tus clientes logren sus objetivos con facilidad.
                        </li>
                    </ul>
                    <div className='whyPNL__container-conclusion'>
                        <p className='whyPNL__conclusion'>
                            Porque no basta con escuchar activamente sus palabras.<br />
                            <span className='whyPNL__conclusion-red-text'>Necesitas saber lo que están haciendo en su mente mientras te las dicen.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyPNL