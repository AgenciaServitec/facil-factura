import React from "react";
import styled from "styled-components";
import { AboutUs, Carousel, SectionPlans, Services } from "../../components";
import { FormContact, WrapperComponent } from "../../components/ui";

export const Home = ({
  onClickVisibleFormContact,
  visibleFormContact,
  onEventGaClickButton,
  onEventGaClickVideos,
}) => {
  return (
    <>
      <Container>
        <Carousel
          onClickVisibleFormContact={onClickVisibleFormContact}
          onEventGaClickButton={onEventGaClickButton}
        />
        <WrapperComponent>
          <AboutUs
            onClickVisibleFormContact={onClickVisibleFormContact}
            onEventGaClickButton={onEventGaClickButton}
          />
          {/*<VideoSection*/}
          {/*  onClickVisibleFormContact={onClickVisibleFormContact}*/}
          {/*  onEventGaClickButton={onEventGaClickButton}*/}
          {/*  onEventGaClickVideos={onEventGaClickVideos}*/}
          {/*/>*/}
          <Services
            onClickVisibleFormContact={onClickVisibleFormContact}
            onEventGaClickButton={onEventGaClickButton}
          />
          <SectionPlans />
        </WrapperComponent>
      </Container>
      <FormContact
        visibleFormContact={visibleFormContact}
        onClickVisibleFormContact={onClickVisibleFormContact}
        onEventGaClickButton={onEventGaClickButton}
      />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
