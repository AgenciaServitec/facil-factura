import React, { useRef } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import { ImgAbout } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui";
import { useHorizontalSlideAnimation } from "../../hooks";

export const AboutUs = ({ onClickVisibleFormContact }) => {
  const elementRef = useRef(null);
  const animationProps = useHorizontalSlideAnimation(elementRef);

  return (
    <Container id="about-us">
      <div className="content-items">
        <article className="content">
          <div className="heading">
            <h2 className="title">ÚNETE A NOSOTROS</h2>
          </div>
          <p className="description">
            NO ESPERES NI DUDES MAS Y EMPECEMOS CON TU SISTEMA DE FACTURACIÓN
            ELECTRÓNICA PARA TU EMPRESA.
          </p>
          <div className="list-about">
            <ul>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} color="#009FBF" />
                <span>Altas comisiones</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} color="#009FBF" />
                <span>Productos de calidad y con precios cómodos.</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} color="#009FBF" />
                <span>Capacitación con nuestros expertos en ventas</span>
              </li>
            </ul>
          </div>
          <div className="button">
            <Button
              text="Consigue una Cotización"
              type="secondary"
              onClick={() => onClickVisibleFormContact(true)}
            />
          </div>
        </article>
        <article className="content-img">
          <animated.img
            className="image-bg"
            src={ImgAbout}
            alt="offers"
            title="offers"
            ref={elementRef}
            style={{
              ...animationProps,
            }}
          />
        </article>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1.2rem;
  color: #000;
  ${mediaQuery.minTablet} {
    padding: 3rem 4rem;
  }

  .content-items {
    display: grid;
    grid-template-columns: 1fr;
    padding: 3rem 0.5rem;
    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr;
    }
    .title {
      color: rgba(0, 0, 0, 0.94);
      font-weight: 800;
      margin-bottom: 2rem;
      font-size: 2.4rem;
    }
    .description {
      color: #2f2c2c;
      max-width: 40rem;
      font-weight: 500;
      font-size: 1.2rem;
    }
    .list-about {
      margin: 1rem 1.5rem;
      ul {
        li {
          width: auto;
          background: transparent;
          color: #2f2c2c;
          list-style: none;
          margin-bottom: 0.5rem;
          svg {
            margin-right: 0.7rem;
          }
        }
      }
    }
    .content-img {
      margin-top: 1rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
        height: auto;
        object-fit: contain;
      }
    }
  }
`;
