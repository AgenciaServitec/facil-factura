import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ImgLogoFacturaFacil } from "../../images";
import { useDevice } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "./Drawer";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Button, WrapperComponent } from "../ui";
import { useNavigate } from "react-router";
import { mediaQuery } from "../../styles";

export const BaseLayout = ({ children }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const onClickVisibleFormContact = () => setVisibleDrawer(!visibleDrawer);

  const isAbsoluteHeader = window.location.pathname === "/";

  return (
    <Container isAbsoluteHeader={isAbsoluteHeader}>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        onClickVisibleFormContact={onClickVisibleFormContact}
      />
      <header className="header">
        <WrapperComponent>
          <>
            {isMobile ? (
              <div className="menu-mobile">
                <div className="item-logo">
                  <img
                    src={ImgLogoFacturaFacil}
                    alt="Logo Servitec Facil Factura"
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </div>
                <div
                  className="icon-bar"
                  onClick={() => setVisibleDrawer(true)}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    size="2x"
                    style={{ color: "#000", fontSize: "1.7em" }}
                  />
                </div>
              </div>
            ) : (
              <div className="menu-list">
                <div className="logo-wrapper">
                  <Link to="/">
                    <img
                      src={ImgLogoFacturaFacil}
                      alt="Logo Servitec Facil Factura"
                    />
                  </Link>
                </div>
                <nav className="list-wrapper">
                  <ul>
                    <li>
                      <span onClick={() => navigate("/")}>Inicio</span>
                    </li>
                    <li>
                      <a href="#">Nosotros</a>
                    </li>
                    <li>
                      <a href="#">Servicios</a>
                    </li>
                  </ul>
                </nav>
                <div className="btn-wrapper">
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ padding: "0 1.7em" }}
                  >
                    Contácto
                  </Button>
                </div>
              </div>
            )}
          </>
        </WrapperComponent>
      </header>
      <main className="body">{children}</main>
      <Footer />
      {/*<ButtonsFloating*/}
      {/*  onEventGaClickButton={eventGaClickButton}*/}
      {/*  bottom="15%"*/}
      {/*  message="Estoy+interesado+más+información"*/}
      {/*/>*/}
      {/*<ButtonFloatingContact*/}
      {/*  onClickVisibleFormContact={onClickVisibleFormContact}*/}
      {/*/>*/}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme, isAbsoluteHeader }) => css`
    width: 100%;
    min-height: 100vh;
    height: auto;
    position: relative;
    overflow: hidden;

    .header {
      width: 100%;
      background-color: transparent;
      padding: 0.8em 1em;
      position: ${isAbsoluteHeader ? "absolute" : "relative"};
      z-index: 700;
      right: 0;
      left: 0;
      top: 0;
      ${mediaQuery.minDesktop} {
        padding: 1.3em 2em;
      }

      .menu-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;

        .logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: start;
          img {
            width: 12em;
            height: auto;
            object-fit: contain;
          }
        }

        .list-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2em;
          padding: 0.7em 1em;
          background-color: #fff;
          box-shadow: 0 1px 3px 0 #ccc;
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            width: auto;
            display: flex;
            align-items: center;
            gap: 2rem;
            li {
              min-width: 7em;
              text-align: center;
              a,
              span {
                color: #000;
                text-decoration: none;
                transition-duration: 0.3s;
              }
              a:hover,
              span:hover {
                cursor: pointer;
                color: ${theme.colors.primary};
              }
            }
          }
        }
        .btn-wrapper {
          display: flex;
          align-items: center;
          justify-content: end;
        }
      }

      .menu-mobile {
        width: 100%;
        color: #000;
        display: flex;
        justify-content: space-between;
        .item-logo {
          display: flex;
          align-items: center;
          justify-content: start;
          img {
            width: 60%;
            max-width: 220px;
          }
        }

        .icon-bar {
          width: auto;
          height: 100%;
          padding: 0.7rem 0.1rem 0.7rem 1.7rem;
        }
      }
    }
  `}
`;
