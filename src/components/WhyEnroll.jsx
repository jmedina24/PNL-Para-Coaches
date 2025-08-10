import React from "react";
import "../css/whyEnroll.css";
import WhyEnrollImage from "../images/10.png";

const WhyEnroll = () => {
  return (
    <div className="whyEnroll__container">
      <div className="whyEnroll__subContainer">
        <div className="whyEnroll__container-title">
          <h2 className="whyEnroll__title">¿POR QUÉ DEBERÍAS INSCRIBIRTE?</h2>
        </div>
        <div className="whyEnroll__container-cards">
          <div className="whyEnroll__card">
            <p className="whyEnroll__card-text">
              ✅Porque vas a comprender lo que VERDADERAMENTE es la Programación
              Neuro-Lingüística (PNL) más allá de las técnicas, lejos de los
              mitos pseudocientíficos y las “recetas mágicas” que
              lamentablemente la mayoría de los institutos, libros y personas
              promocionan en la actualidad.
            </p>
          </div>
          <div className="whyEnroll__card">
            <p className="whyEnroll__card-text">
              ✅Porque te voy a mostrar la PNL real, como fue originalmente
              diseñada: una poderosa y revolucionaria tecnología mental y
              lingüística con la que podrás identificar, describir, comprender y
              modificar los procesos mentales que promueven los resultados que
              tú y cualquier persona obtiene.
            </p>
          </div>
          <div className="whyEnroll__card">
            <p className="whyEnroll__card-text">
              ✅Porque vas a descubrir, además, qué la hace tan efectiva en
              ámbitos como el: coaching, la terapia, el cambio personal, las
              ventas, la gestión emocional, el liderazgo, el cambio de
              creencias, el desarrollo de hábitos y más…
            </p>
          </div>
          <div className="whyEnroll__card">
            <p className="whyEnroll__card-text">
              ✅Porque si trabajas con personas, necesitas saber cómo hacen lo
              que hacen dentro de su cabeza: cómo piensan, cómo sienten y
              estructuran internamente su experiencia para lograr (o no) sus
              objetivos en determinados contextos. Solo así podrás ayudarlos a
              transformarse realmente.
            </p>
          </div>
          <div className="whyEnroll__card">
            <p className="whyEnroll__card-text">
              <span className="whyEnroll__card-text-b">
                ✅Porque vas a preguntarte: “¿cómo es que nadie me enseñó esto
                antes?” … mientras te diviertes aprendiéndolo.
              </span>
            </p>
          </div>
        </div>
        <div className="whyEnroll__container-img">
          <img
            className="whyEnroll__img"
            src={WhyEnrollImage}
            alt="Imagen 10"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyEnroll;
