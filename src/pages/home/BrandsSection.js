import styled, { css } from "styled-components";
import { Brand1, Brand2, Brand3, Brand4 } from "../../images";
import { WrapperComponent } from "../../components";
import { mediaQuery } from "../../styles";

export const BrandsSection = () => {
  return (
    <Container>
      <WrapperComponent>
        <div className="content">
          <div>
            <img
              className="image-shadow"
              src={Brand1}
              alt="Logo de Alvillantas"
            />
          </div>
          <div>
            <img src={Brand2} alt="Logo Hankook Alvillantas" />
          </div>
          <div>
            <img
              className="image-shadow"
              src={Brand3}
              alt="Logo de Servitec Perú"
            />
          </div>
          <div>
            <img src={Brand4} alt="Logo de Servitec Software" />
          </div>
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    padding: 3em 0;
    .content {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      gap: 1em;
      > div {
        width: 9em;
        ${mediaQuery.minDesktop} {
          width: 14em;
        }
        img {
          width: 100%;
        }
        .image-shadow {
          filter: drop-shadow(0 0 0 black);
        }
      }
    }
  `}
`;
