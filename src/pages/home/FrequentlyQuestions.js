import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, WrapperComponent } from "../../components";
import { theme, Col, Row } from "antd";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/mediaQuery";

export const FrequentlyQuestions = () => {
  const { token } = theme.useToken();

  const getItems = () => [
    [
      {
        key: "1",
        label: "¿Puedo afiliarme teniendo RUC?",
        children: (
          <p className="response_question">
            ¡Claro que sí! Si tienes un RUC activo, independientemente del
            régimen al que pertenezcas, puedes unirte a nuestra plataforma.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "2",
        label: "¿Se puede utilizar el servicio fuera de Lima Metropolitana?",
        children: (
          <p className="response_question">
            En este momento, nuestros servicios están disponibles únicamente en
            la zona de Lima Metropolitana.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "3",
        label: "¿Puedo acceder a su servicio desde mi computadora?",
        children: (
          <p className="response_question">
            ¡Absolutamente! Aunque muchos emprendedores prefieren utilizar
            nuestra aplicación móvil, también puedes acceder y trabajar desde tu
            computadora sin ningún problema. Además, toda la información que
            ingreses se sincronizará en tiempo real.
          </p>
        ),
        style: panelStyle,
      },
    ],
    [
      {
        key: "4",
        label: "¿Ya no necesitaré un contador?",
        children: (
          <p className="response_question">
            Nuestra aplicación simplifica y automatiza el proceso de emisión de
            comprobantes, pero aún necesitarás realizar tus declaraciones. Para
            ayudarte con esto, te enviaremos un reporte especial cada mes que
            podrás entregar a tu contador.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "5",
        label: "¿Ofrecen descuentos si me suscribo por un año completo?",
        children: (
          <p className="response_question">
            ¡Sí, claro! Si decides suscribirte por un año completo, recibirás un
            descuento de S/50 en tu cuota de activación, además de los
            descuentos de hasta S/198.80 que se aplican a los planes anuales.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "6",
        label: "¿Mis comprobantes serán enviados a SUNAT?",
        children: (
          <p className="response_question">
            ¡Exactamente! Todos los comprobantes que emitas a través de nuestra
            aplicación serán enviados automáticamente a SUNAT. Además, cualquier
            anulación que realices también será comunicada automáticamente.
          </p>
        ),
        style: panelStyle,
      },
    ],
  ];

  const panelStyle = {
    marginBottom: 20,
    background: "#fff",
    borderRadius: "1em",
    border: "none",
    fontSize: "1.3em",
    fontWeight: 700,
  };

  return (
    <Container>
      <WrapperComponent>
        <div className="content">
          <h2>Preguntas frecuentes 📝</h2>
          <Row gutter={[20, 20]} wrap={true}>
            <Col xs={24} md={12}>
              <Collapse
                bordered={false}
                defaultActiveKey={[]}
                expandIconPosition="end"
                accordion
                size="large"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      style={{ fontSize: "1em", color: "#053B63" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ fontSize: "1em", color: "#053B63" }}
                    />
                  )
                }
                style={{
                  background: "transparent",
                }}
                items={getItems(panelStyle)[0]}
              />
            </Col>
            <Col xs={24} md={12}>
              <Collapse
                bordered={false}
                defaultActiveKey={[]}
                expandIconPosition="end"
                accordion
                size="large"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      style={{ fontSize: "1em", color: "#053B63" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ fontSize: "1em", color: "#053B63" }}
                    />
                  )
                }
                style={{
                  background: "transparent",
                }}
                items={getItems(panelStyle)[1]}
              />
            </Col>
          </Row>
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    padding: 3em 1em;
    .content {
      width: 90%;
      margin: 0 auto;

      ${mediaQuery.minDesktop} {
        width: 80%;
      }

      h2 {
        font-size: 2.7em;
        font-weight: 700;
        text-align: center;
        padding-bottom: 1em;
      }

      .response_question {
        font-size: 0.9em;
        font-weight: 400;
        color: ${theme.colors.font2};
      }
    }
  `}
`;
