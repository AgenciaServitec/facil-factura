import styled, { css } from "styled-components";
import { ScreenDesktop2 } from "../../images";
import { WrapperComponent } from "../../components";
import { mediaQuery } from "../../styles";

export const DesktopSection = () => {
  return (
    <Container>
      <WrapperComponent>
        <div className="content">
          <img
            src={ScreenDesktop2}
            alt="Imagen de la vista de Facil Factura en una computadora."
          />
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    background-color: white;
    padding: 3em 0;
    .content {
      width: 90%;
      margin: 0 auto;
      ${mediaQuery.minTablet} {
        width: 70%;
      }
    }

    img {
      width: 100%;
    }
  `}
`;
