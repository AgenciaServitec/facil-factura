import React from "react";
import styled from "styled-components";
import { LogoServitec, SvgEmail, SvgLocation, SvgPhone } from "../../images";
import {
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { WrapperComponent } from "../ui";
import { contactData } from "../../firebase";
import { capitalize } from "lodash";

export const Footer = ({ onEventGaClickIcon, onEventGaClickLink }) => (
  <Container id="footer">
    <WrapperComponent>
      <>
        <div className="item-logo-footer">
          <div className="item-logo">
            <img src={LogoServitec} alt="Logo publicidad google" />
          </div>
          <div className="item-text">
            <h1>Servitec Facil Factura</h1>
            <div>
              <span>
                Somos una empresa que brinda servicios informáticos de forma
                integral en la asesoría y consultoría en hardware y software,
                tanto para usuarios domésticos, negocios y empresas
                corporativas. Prestamos nuestros servicios en forma altamente
                personalizada, comprendiendo que cada empresa es única, creando
                una solución a la medida de tus necesidades. Logrando
                identificar y entender las necesidades de nuestros clientes para
                ofrecerle la mejor solución.
              </span>
            </div>
          </div>
        </div>
        <div className="items-socials">
          <ul>
            <li
              onClick={() =>
                onEventGaClickIcon(
                  "click-icon-wsp-941801827",
                  "Click icon wsp 941 801 827"
                )
              }
            >
              <a
                href="https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+producto+%2F+servicio&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li
              onClick={() =>
                onEventGaClickIcon(
                  "click-icon-email-contactos@servitec-peru.com",
                  "Click icon email contactos@servitec-peru.com"
                )
              }
            >
              <a
                href="mailto:contactos@servitec-peru.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li
              onClick={() =>
                onEventGaClickIcon(
                  "click-icon-facebook-servitec-chorrillos",
                  "Click icon facebook Servitec.chorrillos"
                )
              }
            >
              <a
                href="https://www.facebook.com/Servitec.chorrillos/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li
              onClick={() =>
                onEventGaClickIcon(
                  "click-icon-youtube-FNMfFy4iKvg",
                  "Click icon youtube https://youtu.be/FNMfFy4iKvg"
                )
              }
            >
              <a
                href="https://youtu.be/FNMfFy4iKvg"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
        <div className="items-contacts">
          <div className="item-contact">
            <div className="icon">
              <SvgPhone width="80px" />
            </div>
            <div
              className="content"
              onClick={() =>
                onEventGaClickLink(
                  "click-link-telefono-941801827",
                  "Click link telefono 941801827"
                )
              }
            >
              <a href="tel:+51941801827" target="_blank" rel="noreferrer">
                941 801 827
              </a>
              <p> Lun-Dom 9am-6pm</p>
            </div>
          </div>

          <div className="item-contact">
            <div className="icon">
              <SvgEmail width="80px" />
            </div>
            <div
              className="content"
              onClick={() =>
                onEventGaClickLink(
                  "click-link-email-contactos@servitec-peru.com",
                  "Click link email contactos@servitec-peru.com"
                )
              }
            >
              <a
                href="mailto:contactos@servitec-peru.com"
                target="_blank"
                rel="noreferrer"
              >
                contactos@servitec-peru.com
              </a>
              <p>Soporte en Linea</p>
            </div>
          </div>

          <div className="item-contact">
            <div className="icon">
              <SvgLocation width="80px" />
            </div>
            <div
              className="content"
              onClick={() =>
                onEventGaClickLink(
                  "click-link-ubicacion-EiSoB4t5tQ3rG5YU6",
                  "Click link ubicacion https://goo.gl/maps/EiSoB4t5tQ3rG5YU6"
                )
              }
            >
              <a
                href="https://goo.gl/maps/EiSoB4t5tQ3rG5YU6"
                target="_blank"
                rel="noreferrer"
              >
                Chorrillos, Perú
              </a>
              <p>Pastor Davila 117</p>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div>
            © Copyright 2022 - {capitalize(contactData.title)} / Diseñado con{" "}
            <FontAwesomeIcon icon={faHeart} color="red" /> por{" "}
            <a
              href={contactData.poweredBy.webUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                onEventGaClickLink(
                  "click-link-agencia-servitec",
                  "Click link AgenciaServitec"
                )
              }
            >
              {contactData.poweredBy.name}
            </a>
          </div>
        </div>
      </>
    </WrapperComponent>
  </Container>
);

const Container = styled.footer`
  width: 100%;
  height: auto;
  padding: 4rem 0 0 0;
  background: #093c6b;
  color: #fff;
  .item-logo-footer {
    margin: auto;
    .item-logo {
      display: flex;
      justify-content: center;
      img {
        display: none;
        width: 15rem;
        height: auto;
        margin: 0.3rem 0 1.2rem 0;
      }
    }
    .item-text {
      text-align: center;
      h1 {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 1rem;
        color: #fff;
      }
      div {
        width: 60%;
        margin: 0 auto;
        span {
          font-size: 0.8rem;
        }
      }
    }
  }

  .items-socials {
    width: 100%;
    margin: 3rem auto;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      &:after {
        content: "";
        width: 80%;
        //max-width: 30rem;
        height: 1px;
        background: #fff;
        bottom: 0;
        text-align: center;
        position: absolute;
        margin-top: 2rem;
      }
      li {
        margin-bottom: 1.7rem;
        a {
          color: #fff;
          padding: 0 1rem;
          font-size: 2.5rem;
          padding: 0 1rem;
        }
        &:last-child {
          span {
            border-right: none;
          }
        }
      }
    }
  }
  .items-contacts {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .item-contact {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 1rem;
      ${mediaQuery.minTablet} {
        grid-template-columns: 1fr auto;
      }
      .icon {
        font-size: 3rem;
      }
      .content {
        text-align: center;
        line-height: 3rem;
        p {
          opacity: 0.4;
        }
        a {
          font-size: 1.5rem;
          color: #fff;
        }
        a:hover {
          color: #4cc2c0;
        }
      }
    }
  }
  .bottom-footer {
    width: 100%;
    padding: 1.5rem;
    background: #093c6b;
    div {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      a {
        font-weight: 500;
        color: #4cc2c0;
      }
    }
  }
`;
