import React from 'react'
import '../css/pnlOrigins.css';
import OriginsImage from '../images/9.png';

const PNLOrigins = () => {
  return (
    <div className='pnlOrigins__container'>
        <div className='pnlOrigins__container-title'>
            <h3 className='pnlOrigins__title'>MIS COMIENZOS CON LA PNL</h3>
        </div>
        <div className='pnlOrigins__container-text'>
            <p className="pnlOrigins__text">
                Comencé dando clases en la universidad sin haberme graduado todavía. En el año 2017, me enviaron a Iquique a competir en WorldSkills y además de subirme al podio, fui elegido para dar el discurso de cierre frente a más de 100 personas y varias cámaras de televisión… y aunque tuve menos de 5 minutos para preparar mi discurso, fue una locura lo que ocurrió después. Conferencias, muchas conferencias. Fui invitado por distintas universidades y colegios para hablar sobre la importancia de las llamadas “habilidades blandas”. 
            </p>
            <p className="pnlOrigins__text">
                Comencé a estudiar <span className='pnlOrigins__text-b'>Programación Neuro-Lingüística</span> con los mejores entrenadores del mundo. Organicé eventos y certificaciones de PNL, incluso llegué tiempo después a impartir un entrenamiento sobre cómo cambiar creencias junto a uno de los lingüistas más importantes del mundo de habla hispana, con quien también tuve un programa en YouTube.
            </p>
            <p className="pnlOrigins__text">
                <span className='pnlOrigins__text-b'>Acabé pronto convirtiéndome en uno de los divulgadores de la PNL más reconocido en países de habla hispana,</span> y desde entonces, he impartido decenas de cursos y programas que han ayudado a miles de personas a conseguir resultados con sus palabras… He aplicado lo que enseño en contextos educativos, deportivos y terapéuticos, y sobre ello hablo en los libros que he publicado a la fecha.
            </p>
        </div>
        <div className='pnlOrigins__container-image'>
            <img className='pnlOrigins__image' src={OriginsImage} alt='Orígenes de PNL' />
        </div>
    </div>
  )
}

export default PNLOrigins