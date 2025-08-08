import React from "react";
import "../css/main.css";
import ImageEdition from "../images/1.png";
import BtnBePart from "../subComponents/BtnBePart";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container-title">
        <h1 className="main__title">
          <span className="main__title-bg">PNL</span> PARA <br />
          <span className="main__coaches">
            COACHE
            <span className="main__s-wrapper">
              S
              <img
                src={ImageEdition}
                alt="Decoración"
                className="main__image-float"
              />
            </span>
          </span>
        </h1>
        
      </div>
      <div className="main__container-text">
            <p className="main__text">
                Lo que nadie te enseñó y <span className="main__text-bu">necesitas  comprender</span> para generar cambios de verdad
            </p>
        </div>
      <div className="main__container-card">
        <p className="main__card-text">
          Como coach, seguramente ya te diste cuenta de que en la mayoría de
          programas abundan los "qué", pero escasean los "cómo".
        </p>
        <p className="main__card-text">
          <span className="main__card-bi">
            Se enseñan herramientas, pero no el funcionamiento de los procesos
            mentales en los que éstas han de aplicarse,
          </span>{" "}
          y mucho menos se entrenan las habilidades necesarias para usar dichas
          herramientas con verdadera precisión.
        </p>
        <p className="main__card-text">
          ¿El resultado? Coaches que no logran impactar, procesos que se
          estancan, y clientes que{" "}
          <span className="main__text-i">-aunque quieren-</span> no consiguen
          cambiar de verdad.
        </p>
        <p className="main__card-text">
          Y para resolver <span className="main__text-i">(y evitar)</span> esto
          diseñé PNL para Coaches.
        </p>
      </div>
      <div className="main__container-text">
        <p className="main__text-description">
          Un programa online que ha reunido a profesionales, coaches y
          psicoterapeutas de más de 8 países de habla hispana.
        </p>
      </div>
      <div className="main__btn">
        <BtnBePart />
      </div>
    </div>
  );
};

export default Main;
