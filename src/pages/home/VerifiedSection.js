import styled, { css } from "styled-components";
import { WrapperComponent } from "../../components";
import { LogoVerificadoSunat, LogoIsoiec } from "../../images";

export const VerifiedSection = () => {
  return (
    <Container>
      <WrapperComponent>
        <div className="content">
          <img src={LogoVerificadoSunat} />
          <img src={LogoIsoiec} />
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
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 2em;
      img {
        width: 11em;
        &:last-child{
          width: 8em;
        }
      }
    }
  `}
`;
