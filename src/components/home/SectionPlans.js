import styled from "styled-components";
import { ImgPlan1, ImgPlan2, ImgPlan3, ImgPlan4 } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const SectionPlans = () => {
  return (
    <Container>
      <div className="first-content">
        <h2 className="title">Nuestros planes</h2>
        <p>
          Hemos creado diversos tipos de planes para satisfacer todo tipo de
          necesidades Escoja el plan que más le convenga
        </p>
      </div>
      <div className="plans">
        <img src={ImgPlan1} alt="planes" title="planes" />
        <img src={ImgPlan2} alt="planes" title="planes" />
        <img src={ImgPlan3} alt="planes" title="planes" />
        <img src={ImgPlan4} alt="planes" title="planes" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 1em;
  margin: 2.5em 0;
  background-color: #01d5ff;
  border-radius: 0;

  .first-content {
    text-align: center;
    .title {
      color: ${({ theme }) => theme.colors.white};
      margin: 2rem 0;
      font-size: 2.6rem;
      font-weight: 800;
      text-align: center;
    }
  }
  .plans {
    padding: 1em 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    justify-items: center;
    ${mediaQuery.minDesktop} {
      grid-template-columns: 1fr 1fr;
    }
    img {
      margin-top: 2.4em;
      width: 100%;
      max-width: 25em;
      border-radius: 1em;
    }
  }
`;
