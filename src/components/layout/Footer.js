import React from "react";
import styled from "styled-components";
import { WrapperComponent } from "../ui";
import { ImgLogoFacturaFacil } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faEnvelope,
  faHeart,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { mediaQuery } from "../../styles";
import { contactData } from "../../config";

export const Footer = () => (
  <Container id="footer">
    <WrapperComponent>
      <div className="main-footer">
        <div className="flex-item">
          <ul className="brand-item">
            <li>
              <img
                src={ImgLogoFacturaFacil}
                alt="Facil factura"
                className="item-logo"
              />
            </li>
            <li>
              <p>
                <span>
                  Fácil factura La solución completa para tu facturación
                  electrónica, impulsa tu negocio con facilidad y eficiencia.
                </span>
              </p>
            </li>
            <li>
              <div className="social-icons">
                <a
                  className="item"
                  href={contactData.socialLinks.tiktok}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTiktok} className="icon" />
                </a>
                <a
                  className="item"
                  href={contactData.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                </a>
                <a
                  className="item"
                  href={contactData.socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                </a>
                <a
                  className="item"
                  href={`mailto:${contactData.emails.sales}`}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="grid-wrapper">
          <div className="grid-item">
            <ul className="simple-list">
              <li>
                <strong>Políticas y condiciones</strong>
              </li>
              <li>
                <a
                  href="https://facilfactura.pe/facturacion/terminoslegales/terminos_del_servicio"
                  target="_blank"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="https://facilfactura.pe/facturacion/terminoslegales/terminos_del_servicio"
                  target="_blank"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className="grid-item">
            <ul className="list-with-icon help-list">
              <li>
                <strong>Ayuda</strong>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=+51972252744&text=Hola,+necesito+soporte+técnico+por+favor&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> Soporte
                  Técnico
                </a>
              </li>
              {/*<li>*/}
              {/*  <a href="#">*/}
              {/*    <FontAwesomeIcon icon={faBookOpen} className="icon" />*/}
              {/*    Libro de reclamaciones*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li>
                <span>
                  <FontAwesomeIcon icon={faCalendar} className="icon" />
                  Lunes - Domingos: 9:00 am - 6:00 pm
                </span>
              </li>
            </ul>
          </div>
          <div className="grid-item">
            <ul className="list-with-icon contact-list">
              <li>
                <strong>Contácto</strong>
              </li>
              <li>
                <a href={`tel:+51${contactData.numbers.phone[0]}`}>
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  (+51) {contactData.numbers.phone[0]}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactData.emails.sales}`} rel="noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  contactos@servitec-peru.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/VY4eWmsWgVAb3gyp7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
                  Ca. Nestor Bermudez 113, Esquina con Av. Fernando Teran, Chorrillos - Lima
                </a>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faLocation} className="icon" />
                  Chorrillos, Lima - Perú
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        © Copyright 2022 - Fácil factura - Servitec / Diseñado con
        <FontAwesomeIcon icon={faHeart} className="icon" />
        por{" "}
        <a href="https://agenciaservitec.com" target="_blank" rel="noreferrer">
          Agencia Servitec
        </a>
      </div>
    </WrapperComponent>
  </Container>
);

const Container = styled.footer`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1em;
    li {
      font-weight: 400;
    }
    li:first-child {
      font-weight: 600;
      margin-bottom: 0.8em;
    }
  }

  .main-footer {
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 1em;
    padding: 2em 1em;
    ${mediaQuery.minDesktop} {
      padding: 2em 1em;
      flex-direction: row;
      justify-content: space-between;
    }

    .flex-item {
      width: 100%;
      max-width: 22em;
      .brand-item {
        padding: 1em;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 1em;
        li {
          display: flex;
          justify-content: start;
        }

        li .item-logo {
          width: 13em;
          height: auto;
          object-fit: contain;
        }
        li p {
          text-align: left;
          color: inherit;
          font-size: 0.9em;
        }
        li .social-icons {
          display: flex;
          gap: 1em;
          .item {
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
            color: inherit;
            border: 1px solid #fff;
            padding: 0.1em;
            display: grid;
            place-items: center;
            &:hover {
              color: ${({ theme }) => theme.colors.black};
              background: ${({ theme }) => theme.colors.primary};
            }
            .icon {
              font-size: 1.2em;
            }
          }
        }
      }
    }

    .grid-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1em;
      width: 100%;
      ${mediaQuery.minDesktop} {
        width: 67%;
      }

      .grid-item {
        padding: 1em;
      }

      .simple-list {
        color: inherit;
        a {
          font-size: 0.9em;
          text-decoration: none;
          color: inherit;
          &:hover {
            text-decoration: underline;
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }

      .list-with-icon {
        color: inherit;
        span {
          font-size: 0.9em;
          .icon {
            font-size: 1.1em;
            margin-right: 0.7em;
          }
        }
        a {
          font-size: 0.9em;
          text-decoration: none;
          color: inherit;
          text-align: left;
          &:hover {
            text-decoration: underline;
            color: ${({ theme }) => theme.colors.primary};
          }
          .icon {
            font-size: 1.1em;
            margin-right: 0.7em;
          }
        }
      }
    }
  }
  .bottom-footer {
    text-align: center;
    font-size: 0.8em;
    padding: 0 1em 2em 1em;
    .icon {
      margin: 0 0.3em;
      color: red;
    }
    a {
      color: yellow;
      text-decoration: none;
    }
  }
`;
