import styled, { css } from "styled-components";
import { WrapperComponent } from "../../components";
import { LogoVerificadoSunat, LogoIsoiec } from "../../images";
import { lighten } from "polished";

export const VerifiedSection = () => {
  return (
    <Container>
      <WrapperComponent>
        <div className="content">
          <img src={LogoVerificadoSunat} alt="sunat logo" />
          <img src={LogoIsoiec} alt="isoiec logo" />
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${lighten(0.1, theme.colors.quaternary)};
    padding: 3em 0;
    .content {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 2em;
      img {
        width: 11em;
        &:last-child {
          width: 8em;
        }
      }
    }
  `}
`;
