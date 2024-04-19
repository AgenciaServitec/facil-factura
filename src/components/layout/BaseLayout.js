import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { useDevice } from "../../hooks";
import { Drawer } from "./Drawer";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router";
import { FormContact } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const BaseLayout = ({ children }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [visibleFormContact, setVisibleFormContact] = useState(false);

  const onNavigateGoTo = (pathname = "/") => navigate(pathname);

  return (
    <Container>
      {createPortal(
        <PromotionContainer>
          <div />
          <div>
            <span>
              Quiero mi descuento del 30% por ser uno de los primeros 100
              clientes nuevos. <a href="#">Click aqui!</a>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faXmark} size="lg" className="icon" />
          </div>
        </PromotionContainer>,
        document.getElementById("promotion-wrapper")
      )}
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        onSetVisibleFormContact={setVisibleFormContact}
      />
      <Header
        isMobile={isMobile}
        onNavigateGoTo={onNavigateGoTo}
        onSetVisibleFormContact={setVisibleFormContact}
        onSetVisibleDrawer={setVisibleDrawer}
      />
      <main className="body">{children}</main>
      <Footer />
      <FormContact
        visibleFormContact={visibleFormContact}
        onClickVisibleFormContact={setVisibleFormContact}
      />
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
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const PromotionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.6em;
  text-align: center;
  background: forestgreen;
  font-size: 1em;
  color: #fff;

  div:nth-child(2) {
    span {
      cursor: pointer;

      &:hover {
        color: #e8e7e7;
      }
      a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
      }
    }
  }

  div:last-child {
    padding: 0 1em;

    .icon {
      cursor: pointer;
    }
  }
`;
