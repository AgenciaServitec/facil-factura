import styled from "styled-components";
import { Plans, WrapperComponent } from "../../components";
import { mediaQuery } from "../../styles/mediaQuery";
import { ourPlans } from "../../data-list";

export const HomePagePlans = () => {
  return (
    <Container>
      <WrapperComponent>
        <div className="plans">
          <div className="title-items">
            <h2>Planes que crecen contigo 🤝🏼</h2>
            <p>Sin contratos ni límites de montos a facturar.</p>
          </div>
          <div className="planes-wrapper">
            <Plans plans={ourPlans} />
          </div>
          <div className="legend-plans">
            <p>
              <strong>
                Cuota de activación desde el Plan Control o superior: S/50 (pago
                único).
              </strong>{" "}
              Planes válidos para Lima Metropolitana, Callao, Arequipa Ciudad,
              Cusco Ciudad y Huancayo. Si te encuentras en otra ubicación puedes
              ver los Planes que tenemos para ti desde <a href="#">aquí</a>. (*)
              Ticketera incluida a modo de préstamo durante tu periodo de
              afiliación al Plan Control o superior.
            </p>
          </div>
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.div`
  padding: 3em 1em;
  ${mediaQuery.minTablet} {
    padding: 3em 0;
  }
  .plans {
    .title-items {
      text-align: center;
      padding: 0 1em;
      margin-bottom: 2.5em;
      h2 {
        font-size: 2.5em;
        margin-bottom: 0.2em;
        font-weight: 700;
      }
      p {
        font-size: 1.5em;
        font-weight: 400;
      }
    }
    .planes-wrapper {
      margin-bottom: 2em;
      display: grid;
      place-items: center;
    }
    .legend-plans {
      p {
        width: 95%;
        margin: auto;
        text-align: center;
        font-size: 0.9em;
        font-weight: 300;
        ${mediaQuery.minMobile} {
          width: 75%;
        }
      }
    }
  }
`;
