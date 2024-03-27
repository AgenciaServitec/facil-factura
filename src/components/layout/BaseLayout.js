import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useDevice } from "../../hooks";
import { Drawer } from "./Drawer";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router";

export const BaseLayout = ({ children }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const onClickVisibleFormContact = () => setVisibleDrawer(!visibleDrawer);
  const onNavigateGoTo = (pathname = "/") => navigate(pathname);

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        onClickVisibleFormContact={onClickVisibleFormContact}
      />
      <Header
        isMobile={isMobile}
        onNavigateGoTo={onNavigateGoTo}
        onSetVisibleDrawer={setVisibleDrawer}
      />
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
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    height: auto;
    position: relative;
    overflow: hidden;
  `}
`;
