import styled, { css } from "styled-components";
import { WrapperComponent } from "../../components";
import { useDevice } from "../../hooks";
import { CarouselBrands } from "./CarouselBrands";

export const BrandsSection = () => {
  const { isMobile } = useDevice();

  return (
    <Container>
      <WrapperComponent>
        <div className="content">
          <h2>Ellos confían en nosotros 👍🏼</h2>
          <CarouselBrands isMobile={isMobile} />
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    padding: 5em 0;
    .content {
      width: 90%;
      margin: 0 auto;
      background-color: ${theme.colors.light};
      .carousel-component {
        .react-multi-carousel-track {
          display: flex;
          div {
            width: 7.5em;
            height: 7.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 90%;
              height: 90%;
              object-fit: contain;
            }
          }
        }
        .image-shadow {
          filter: drop-shadow(0 0 0 black);
        }
      }
      h2 {
        font-size: 2.7em;
        font-weight: 700;
        text-align: center;
        padding-bottom: 1em;
      }
    }
  `}
`;
