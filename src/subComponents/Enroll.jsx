import React from 'react';
import Image5 from '../images/5.png';
import '../css/btnBePart.css';

const Enroll = () => {
    const handleClick = () => {
        const url = `https://wa.link/szq624`;
        window.open(url, '_blank');
    };
  return (
    <div className='main__container-btn'>
        <button className='main__btn' onClick={handleClick}>
            <img className='main__btn-img' src={Image5} alt='Imagen botón' />
        </button>
    </div>
  )
}

export default Enroll