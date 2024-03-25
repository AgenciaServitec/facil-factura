import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faMobileAlt,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles";
import { rgba } from "polished";
import { WrapperComponent } from "../../components";

export const Requirements = () => {
  return (
    <Container>
      <WrapperComponent>
        <div className="requirements">
          <div className="requirements__title">
            <h2>¿Requisitos? ¡Solo 3! 👇🏼</h2>
          </div>
          <ul className="requirements__list">
            <li className="requirements__list__list-item">
              <div className="item__icon">
                <div className="one_circle">
                  <div className="two_circle">
                    <FontAwesomeIcon
                      icon={faIdCard}
                      size="1x"
                      className="icon"
                    />
                  </div>
                </div>
              </div>
              <div className="item__text">
                <h3>RUC activo</h3>
                <p>Ya sea RUC 10 o 20 💪🏼</p>
              </div>
            </li>
            <li className="requirements__list__list-item">
              <div className="item__icon">
                <div className="one_circle">
                  <div className="two_circle">
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      size="1x"
                      className="icon"
                    />
                  </div>
                </div>
              </div>
              <div className="item__text">
                <h3>Un Celular</h3>
                <p>O una Computadora 💻</p>
              </div>
            </li>
            <li className="requirements__list__list-item">
              <div className="item__icon">
                <div className="one_circle">
                  <div className="two_circle">
                    <FontAwesomeIcon icon={faWifi} size="1x" className="icon" />
                  </div>
                </div>
              </div>
              <div className="item__text">
                <h3>Acceso a internet</h3>
                <p>Para sincronizar tu información 😉</p>
              </div>
            </li>
          </ul>
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    padding: 3em 1em;
    background: ${theme.colors.light};
    .requirements {
      margin: auto;
      &__title {
        h2 {
          font-size: 2.5em;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2em;
        }
      }
      &__list {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3em;
        width: 97%;
        margin: auto;
        ${mediaQuery.minTablet} {
          gap: 7em;
          width: 75%;
        }
        &__list-item {
          min-width: 10em;
          max-width: 13em;
          .item__icon {
            display: grid;
            place-items: center;
            margin-bottom: 1em;
            .one_circle {
              width: 4.3em;
              height: 4.3em;
              border-radius: 50%;
              background: ${rgba(theme.colors.primary, 0.09)};
              display: grid;
              place-items: center;
              .two_circle {
                width: 3.4em;
                height: 3.4em;
                border-radius: 50%;
                background: ${rgba(theme.colors.primary, 0.2)};
                display: grid;
                place-items: center;
                .icon {
                  color: ${theme.colors.secondary};
                  font-size: 2em;
                }
              }
            }
          }
          .item__text {
            text-align: center;
            display: grid;
            gap: 0.5em;
            h3 {
              font-size: 1.4em;
              font-weight: 700;
            }
            p {
              font-size: 1em;
              font-weight: 300;
            }
          }
        }
      }
    }
  `}
`;
