import React, { useState } from "react";
import styled from "styled-components";
import { useDevice } from "../../hooks";
import { Drawer } from "./Drawer";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router";
import { FormContact } from "../ui";
import { PromotionComponent } from "./PromotionComponent";

export const BaseLayout = ({ children }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [visibleFormContact, setVisibleFormContact] = useState(false);

  const onNavigateGoTo = (pathname = "/") => navigate(pathname);

  const isHomePage = window.location.pathname === "/";

  return (
    <Container>
      {isHomePage && <PromotionComponent />}
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
