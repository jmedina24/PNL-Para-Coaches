import React from "react";
import Enroll from "../subComponents/Enroll";
import "../css/faqs.css";

const FAQs = () => {
  return (
    <div className="faqs">
      <div className="faqs__subContainer">
        <div className="faqs__container-title">
          <h2 className="faqs__title">PREGUNTAS FRECUENTES</h2>
        </div>
        <div className="faqs__container-menu">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ¿NECESITO SER COACH O TENER EXPERIENCIA PREVIA PARA HACER ESTE
                  PROGRAMA?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  ¿Necesito ser coach o tener experiencia previa para hacer este
                  programa? No, este es un programa apto para cualquier persona
                  independientemente de aquello a lo que se dedica en la vida…
                  TODOS estamos inmersos cotidianamente, por el hecho de ser
                  humanos, en el rubro del comportamiento y los procesos
                  mentales.
                  <br />
                  <br />
                  Un vendedor, un padre, una madre, un emprendedor, un líder
                  empresarial, un profesor, un médico, un conferencista, un
                  estudiante tiene que ser capaz de llevar a cabo conductas
                  específicas (y es que no hay de otra) para lograr o no sus
                  objetivos y para influir en la conducta de otros… Por lo
                  tanto, el programa es apto para cualquier persona interesada
                  en el cambio personal y en comprender cómo funciona la mente
                  humana desde la PNL. Solo necesitás curiosidad, compromiso y
                  ganas de aprender.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ¿QUÉ PASA SI NO PUEDO ASISTIR A LAS CLASES EN VIVO?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  No te preocupes. Todas las clases quedan grabadas y vas a
                  poder acceder a ellas siempre que lo necesites.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ¿CUÁNTO TIEMPO TENGO ACCESO A LAS CLASES Y LOS MATERIALES?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Vas a tener acceso por tiempo ilimitado a las grabaciones y al
                  manual del programa, para que puedas repasar todo a tu ritmo.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  ¿CUÁNDO COMIENZAN LAS CLASES Y EN QUÉ DÍA Y HORARIO SE
                  IMPARTEN?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="accordion-body-list">
                    <li className="accordion-body-item">
                      Las clases comienzan el 30 de agosto.
                    </li>
                    <li className="accordion-body-item">
                      El programa incluye 6 SESIONES GRUPALES EN VIVO (6
                      módulos).
                    </li>
                    <li className="accordion-body-item">
                      El horario es de 9:30 a 12:00 horas (Chile).
                    </li>
                    <li className="accordion-body-item">
                      Además tendremos 2 encuentros extra de preguntas y
                      demostraciones en fecha y horario a coordinar.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  ¿ENTREGAN CERTIFICADO AL FINALIZAR?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Sí. Al completar el programa vas a recibir un certificado de
                  participación avalado por Miguel Ramírez.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  ¿QUÉ MÉTODOS DE PAGO ACEPTAN?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h5 className="inside-chile">Dentro de Chile</h5>
                  <ul>
                    <li>Transferencia electrónica</li>
                    <li>Mercado Pago hasta 3 cuotas sin interés.</li>
                  </ul>
                  <h5 className="inside-chile">Fuera de Chile</h5>
                  <ul>
                    <li>PayPal</li>
                    <li>Western Unión</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  TODAVÍA NO SÉ SI EL PROGRAMA ES PARA MÍ
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  No te preocupes, si lo necesitás podés escribirnos haciendo{" "}
                  <a
                    href="https://wa.link/szq624"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click aquí
                  </a>
                  , y con gusto te asesoraremos.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faqs__container-btn">
          <Enroll />
        </div>
        <div className="faqs__container-social-media">
          <a
            href="https://www.instagram.com/miguelrpnl?igsh=cXFkbDVwNDN1NjY3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a
            href="https://wa.link/szq624"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
