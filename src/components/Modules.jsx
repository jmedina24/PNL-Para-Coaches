import React from "react";
import "../css/modules.css";

const Modules = () => {
  return (
    <div className="modules">
      <div className="modules__subContainer">
        <div className="modules__container-title">
          <h3 className="modules__title">MÓDULOS DEL PROGRAMA</h3>
        </div>
        <div className="main__container-cards">
          <div className="main__card">
            <div className="main__card-container-title">
              <h5 className="main__card-title">
                MÓDULO I: Introducción a la PNL
              </h5>
            </div>
            <div className="main__card-container-description">
              <p className="main__card-description">
                Comprenderás los orígenes y fundamentos de la Programación
                Neuro-Lingüística y adoptarás las creencias y actitudes
                esenciales que permiten aplicarla con efectividad en ti mismo y
                en tus procesos de coaching.
              </p>
            </div>
            <div className="main__card-container-list">
              <ul className="main__card-list">
                <li className="main__card-list-item">
                  ¿Cuándo, cómo y por qué surgió la PNL?
                </li>
                <li className="main__card-list-item">
                  Las presuposiciones actualizadas de la PNL.
                </li>
                <li className="main__card-list-item">
                  Qué significa realmente “programar la mente” y cómo se logra.
                </li>
              </ul>
            </div>
          </div>
          <div className="main__card">
            <div className="main__card-container-title">
              <h5 className="main__card-title">
                MÓDULO II: Modelo extendido de cambio y objetivos bien formados
              </h5>
            </div>
            <div className="main__card-container-description">
              <p className="main__card-description">
                Incorporarás una estructura clara para comprender y guiar
                procesos de cambio, logrando conducir tus comportamientos hacia
                resultados específicos y ayudar a otros a alcanzar los suyos con
                precisión.
              </p>
            </div>
            <div className="main__card-container-list">
              <ul className="main__card-list">
                <li className="main__card-list-item">
                  Entorno ➡ programas ➡ comportamientos ➡ resultados ➡
                  bienestar.
                </li>
                <li className="main__card-list-item">
                  Origen ➡ causas ➡ síntomas ➡ objetivos ➡ efectos en un proceso
                  de cambio.
                </li>
                <li className="main__card-list-item">
                  Diseño neuro-lingüístico de objetivos.
                </li>
              </ul>
            </div>
          </div>
          <div className="main__card">
            <div className="main__card-container-title">
              <h5 className="main__card-title">
                MÓDULO III: Explorando el mapa
              </h5>
            </div>
            <div className="main__card-container-description">
              <p className="main__card-description">
                Descubrirás cómo filtramos, procesamos y codificamos la
                información para identificar patrones y estructuras internas en
                tus intervenciones.
              </p>
            </div>
            <div className="main__card-container-list">
              <ul className="main__card-list">
                <li className="main__card-list-item">
                  Esquema de Paul Watzlawick: realidad 1 vs. realidad 2.
                </li>
                <li className="main__card-list-item">
                  Representaciones mentales (VAKOG) y cómo configuran nuestra
                  experiencia.
                </li>
                <li className="main__card-list-item">
                  Submodalidades: la estructura interna y “divisa” de la
                  experiencia.
                </li>
              </ul>
            </div>
          </div>
          <div className="main__card">
            <div className="main__card-container-title">
              <h5 className="main__card-title">
                MÓDULO IV: Metamodelo del lenguaje y diseño de preguntas
              </h5>
            </div>
            <div className="main__card-container-description">
              <p className="main__card-description">
                Aprenderás a identificar y transformar patrones lingüísticos, y
                a diseñar preguntas estratégicas que influyan en las estructuras
                mentales que sostienen problemas y limitaciones.
              </p>
            </div>
            <div className="main__card-container-list">
              <ul className="main__card-list">
                <li className="main__card-list-item">
                  Metamodelo del lenguaje: hacia adentro y hacia afuera.
                </li>
                <li className="main__card-list-item">
                  Eliminaciones, distorsiones y generalizaciones en el discurso.
                </li>
                <li className="main__card-list-item">
                  Preguntas cargadas y argumentos disfrazados de preguntas.
                </li>
              </ul>
            </div>
          </div>
          <div className="main__card">
            <div className="main__card-container-title">
              <h5 className="main__card-title">
                MÓDULO V: Estrategias mentales – Cómo hacemos lo que hacemos
              </h5>
            </div>
            <div className="main__card-container-description">
              <p className="main__card-description">
                Comprenderás de qué están hechos los programas mentales y cómo
                operan, para identificarlos, intervenirlos y reprogramarlos con
                precisión.
              </p>
            </div>
            <div className="main__card-container-list">
              <ul className="main__card-list">
                <li className="main__card-list-item">
                  Introducción al modelo POPS y el funcionamiento de las
                  estrategias mentales.
                </li>
                <li className="main__card-list-item">
                  Cómo identificar la secuencia interna detrás de cualquier
                  comportamiento.
                </li>
                <li className="main__card-list-item">
                  Aplicaciones prácticas en aprendizaje, motivación y toma de
                  decisiones.
                </li>
                <li className="main__card-list-item">
                  Reprogramación de estrategias ineficaces para generar nuevos
                  resultados.
                </li>
              </ul>
            </div>
          </div>
          <div className="main__card">
            <div className="main__card-container-title">
              <h5 className="main__card-title">
                MÓDULO VI: Técnicas prácticas de PNL
              </h5>
            </div>
            <div className="main__card-container-description">
              <p className="main__card-description">
                Aprenderás técnicas esenciales de PNL para generar cambios
                personales y acompañar procesos de otros, integrando lo
                aprendido hasta volverlo parte de tu estilo de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
