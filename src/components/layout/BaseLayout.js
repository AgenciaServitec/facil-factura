import React, {useState} from "react";
import styled from "styled-components";
import {ImgLogoFacturaFacil} from "../../images";
import {useAnalyticsEventTracker, useDevice} from "../../hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Drawer} from "./Drawer";
import {Link} from "react-router-dom";
import {Footer} from "./Footer";
import {ButtonsFloating, WrapperComponent} from "../ui";
import {useNavigate} from "react-router";

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
                  <FontAwesomeIcon icon={faBars} size="2x" />
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
                    <span onClick={() => navigate("/")}>
                      <li>INICIO</li>
                    </span>
                    <a href="#about-us">
                      <li>NOSOTROS</li>
                    </a>
                    <a href="#services">
                      <li>SERVICIOS</li>
                    </a>
                    <span onClick={() => onClickVisibleFormContact()}>
                      <li>CONTÁCTO</li>
                    </span>
                  </ul>
                </nav>
              </div>
            )}
          </>
        </WrapperComponent>
      </header>
      <main className="body">{children}</main>
      <Footer
        onEventGaClickIcon={eventGaClickIcon}
        onEventGaClickLink={eventGaClickLink}
      />
      <ButtonsFloating onEventGaClickButton={eventGaClickButton} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
  padding-top: 5rem;

  .header {
    position: fixed;
    z-index: 100;
    width: 100%;
    //max-width: 1250px;
    height: auto;
    background: #fff;
    margin: auto;
    padding: 1rem ;
    padding-top: 1.5rem;
    display: grid;
    grid-area: auto;
    box-shadow: 0 6px 8px 0 rgb(12 0 46 / 6%);    
    right: 0;
    left: 0;
    top: 0;

    .menu-list {
      display: flex;

      .logo-img {
        width: 40%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
          width: 14rem;
        }
      }

      .list {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0;
          margin: 0;
          li {
            color: #000;
            font-weight: bold;
            font-size: 1.1rem;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease-in-out;
            margin-left: 1.5rem;
            cursor: pointer;
          }
          li:hover {
            color: #4cc2c0;
            border-bottom: 2px solid #4cc2c0;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }

    .menu-mobile {
      width: 100%;
      color: #000;
      display: grid;
      grid-template-columns: 85% 1fr;
      .item-logo {
        display: flex;
        align-items: center;
        justify-content: start;
        img {
          width: 65%;
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
