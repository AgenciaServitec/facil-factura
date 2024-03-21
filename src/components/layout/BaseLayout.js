import React, { useState } from "react";
import styled from "styled-components";
import { ImgLogoFacturaFacil } from "../../images";
import { useAnalyticsEventTracker, useDevice } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "./Drawer";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Button, WrapperComponent } from "../ui";
import { useNavigate } from "react-router";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const BaseLayout = ({ children }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const onClickVisibleFormContact = () => setVisibleDrawer(!visibleDrawer);

  return (
    <Container>
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
                    style={{ color: "#000" }}
                  />
                </div>
              </div>
            ) : (
              <div className="menu-list">
                <div className="logo-img">
                  <Link to="/">
                    <img
                      src={ImgLogoFacturaFacil}
                      alt="Logo Servitec Facil Factura"
                    />
                  </Link>
                </div>
                <nav className="list">
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
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={{ padding: "0 1em" }}
                >
                  Contácto
                </Button>
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
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
  overflow: hidden;

  .header {
    width: 100%;
    background-color: transparent;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    ${mediaQuery.minDesktop} {
      position: absolute;
      z-index: 700;
      right: 0;
      left: 0;
      top: 0;
      padding: 3em 2em;
    }

    .menu-list {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-img {
        img {
          width: 10em;
        }
      }

      .list {
        display: flex;
        align-items: center;
        border-radius: 2em;
        padding: 0.625em 1em;
        background-color: #fff;
        box-shadow: 0 1px 3px 0 #ccc;
        ul {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0;
          margin: 0;
          a,
          span {
            color: #000;
            text-decoration: none;
            transition-duration: 0.3s;
          }
          a:hover,
          span:hover {
            cursor: pointer;
            color: #23d3f9;
          }
        }
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

  .footer {
    width: 100%;
    height: auto;
    padding: 1rem;
    background: black;
    color: #fff;
  }
`;
