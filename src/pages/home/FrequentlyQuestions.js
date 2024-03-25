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
        label: "¿Puedo afiliarme teniendo RUS?",
        children: (
          <p className="response_question">
            ¡Por supuesto! Todo RUC activo, y en cualquier régimen, puede
            trabajar con nosotros.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "2",
        label: "¿Llegan a todo el Perú?",
        children: (
          <p className="response_question">
            ¡Sí! pero ten en cuenta que los planes mostrados en esta página solo
            aplican para Lima Metropolitana, Arequipa Ciudad, Cusco Ciudad y
            Huancayo. Si te encuentras en otra ubicación puedes ver los Planes
            que tenemos para ti desde aquí.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "3",
        label: "¿Puedo usar su servicio desde mi computadora?",
        children: (
          <p className="response_question">
            ¡Claro que sí! Si bien el uso preferido de los emprendedores es
            desde la aplicación móvil, también podrás trabajar con tu
            computadora sin problemas. Además, toda tu información se
            sincronizará en tiempo real.
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
            Nuestra APP reemplaza y simplifica el tedioso sistema de emisión
            manual (o portal de SUNAT). Pero igualmente deberás realizar tus
            declaraciones, y para eso te enviaremos cada mes un reporte especial
            para tu contador.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "5",
        label: "¿Hay DSCTO si me suscribo por todo un año?",
        children: (
          <p className="response_question">
            ¡Claro que sí! Si decides suscribirte por todo un año tendrás un
            descuento de S/50 de tu cuota de activación, además del descuento de
            hasta S/198.80 que se aplica en los Planes anuales.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "6",
        label: "¿Mis comprobantes serán enviados a SUNAT?",
        children: (
          <p className="response_question">
            ¡Así es! Las boletas y facturas que emitas a través de nuestra APP
            serán enviadas automáticamente a SUNAT. Además, si realizas alguna
            anulación, esta también será comunicada.
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

      .response_question{
        font-size: .9em;
        font-weight: 400;
        color: ${theme.colors.font2}
      }
    }
  `}
`;
