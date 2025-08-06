import React from 'react'
import Picture15 from '../images/15.png';
import Picture16 from '../images/16.png';
import Picture17 from '../images/17.png';
import Picture18 from '../images/18.png';
import Picture19 from '../images/19.png';
import Picture14 from '../images/14.png';
import '../css/workingTogether.css';

const WorkingTogether = () => {
  return (
    <div className='workingTogether__container'>
        <div className='workingTogether__container-title'>
            <h3 className='workingTogether__title'>LO QUE SUCEDE CUANDO TRABAJAMOS JUNTOS</h3>
        </div>
    <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Picture15} class="d-block w-100" alt="Imagen 15" />
    </div>
    <div class="carousel-item">
      <img src={Picture16} class="d-block w-100" alt="Imagen 16" />
    </div>
    <div class="carousel-item">
      <img src={Picture17} class="d-block w-100" alt="Imagen 17" />
    </div>
    <div class="carousel-item">
      <img src={Picture18} class="d-block w-100" alt="Imagen 18" />
    </div>
    <div class="carousel-item">
      <img src={Picture19} class="d-block w-100" alt="Imagen 19" />
    </div>
    <div class="carousel-item">
      <img src={Picture14} class="d-block w-100" alt="Imagen 14" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default WorkingTogether