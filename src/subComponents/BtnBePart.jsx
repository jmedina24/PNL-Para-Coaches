import React from 'react'
import ImageBtn from '../images/4.png';
import '../css/btnBePart.css';

const BtnBePart = () => {

    const handleClick = () => {
        const url = `https://wa.link/szq624`;
        window.open(url, '_blank');
    };

  return (
    <div className='main__container-btn'>
        <button className='main__btn' onClick={handleClick}>
            <img className='main__btn-img' src={ImageBtn} alt='Imagen botón' />
        </button>
    </div>
  )
}

export default BtnBePart