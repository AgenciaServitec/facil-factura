import React, { useState } from "react";
import styled from "styled-components";
import { ImgLogoFacturaFacil } from "../../images";
import { useAnalyticsEventTracker, useDevice } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "./Drawer";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import {
  Button,
  ButtonFloatingContact,
  ButtonsFloating,
  WrapperComponent,
} from "../ui";
import { useNavigate } from "react-router";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const BaseLayout = ({ children, onClickVisibleFormContact }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const gaEventTrackerButtons = useAnalyticsEventTracker("Buttons");
  const gaEventTrackerIcons = useAnalyticsEventTracker("Icons");
  const gaEventTrackerLinks = useAnalyticsEventTracker("Links");

  const eventGaClickButton = (action, label) =>
    gaEventTrackerButtons(action, label);

  const eventGaClickIcon = (action, label) =>
    gaEventTrackerIcons(action, label);

  const eventGaClickLink = (action, label) =>
    gaEventTrackerLinks(action, label);

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
                      eventGaClickLink(
                        "click-link-logo-publicidad-google",
                        "Click link logo publicidad google"
                      );
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
                      onClick={() =>
                        eventGaClickLink(
                          "click-link-logo-publicidad-google",
                          "Click link logo publicidad google"
                        )
                      }
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
                <button onClick={() => onClickVisibleFormContact()}>
                  Contácto
                </button>
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
  ${mediaQuery.minDesktop} {
    /* padding-top: 5rem; */
  }

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
          width: 150px;
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

      button {
        background-image: linear-gradient(to right, #23d3f9 100%, #23d3f9);
        border: none;
        border-radius: 2em;
        color: #23d3f9;
        color: #fff;
        padding: 0.625em 3.5em;
        transition: background-image 0.3s ease-in-out;

        &:hover {
          background-image: linear-gradient(120deg, #02578b 25%, #23d3f9);
          cursor: pointer;
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
