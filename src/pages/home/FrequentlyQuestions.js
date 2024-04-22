import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, WrapperComponent } from "../../components";
import { Col, Row } from "antd";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles";

export const FrequentlyQuestions = () => {
  const getItems = () => [
    [
      {
        key: "1",
        label: "¿Ustedes Manejan Multiples Precios por Cada Producto?",
        children: (
          <p className="response_question">
            Sí, actualmente manejamos varios precios por cada producto, si tú
            eres un distribuidor estamos seguros que esta característica te
            encantará.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "2",
        label:
          "¿Si ya estoy utilizando otro sistema, ¿puedo empezar con ustedes sin problemas?",
        children: (
          <p className="response_question">
            Sí, puedes empezar con nosotros sin problemas y podrás continuar con
            la numeración de tus comprobantes electrónicos. Nosotros nos
            encargaremos de subir el listado de tus productos a nuestros
            sistemas, lo único que necesitamos es el listado de tus productos en
            Excel.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "3",
        label: "¿Puedo acceder a su servicio desde mi celular?",
        children: (
          <p className="response_question">
            ¡Absolutamente! Aunque muchos emprendedores prefieren utilizar
            nuestra aplicación en laptop, también puedes acceder y trabajar
            desde tu celular sin ningún problema. Además, toda la información
            que ingreses se sincronizará en tiempo real.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "4",
        label: "¿Ustedes son Proveedores Autorizados por SUNAT?",
        children: (
          <p className="response_question">
            Si, somos proveedores autorizados por SUNAT desde el 26 de
            Septiembre del 2019 mediante resolución N° 064-005-0002737.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "5",
        label: "¿Puedo cambiar de Plan luego de afiliarme?",
        children: (
          <p className="response_question">
            ¡Claro que sí! Sabemos que hay meses que vendes más y otros menos,
            por lo que podrás cambiar tu Plan al comienzo de cada mes sin ningún
            problema. Solo comunícate con nuestro servicio al cliente desde{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=+51972252744&text=Hola,+necesito+soporte+técnico+por+favor&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              aquí
            </a>
            .
          </p>
        ),
        style: panelStyle,
      },
    ],
    [
      {
        key: "5",
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
        key: "6",
        label: "¿Brindan algún descuento?",
        children: (
          <p className="response_question">
            El único descuento que tenemos es el descuento de 30% para los 30
            primeros.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "7",
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
      {
        key: "8",
        label:
          "¿Tendré que Pagar Costos de Instalación y/o Comprar Equipos Especiales?",
        children: (
          <p className="response_question">
            No tendrás que pagar costos de instalación y tampoco es necesario
            comprar equipos costosos para iniciar con la emisión de tus
            comprobantes electrónicos.
          </p>
        ),
        style: panelStyle,
      },
      {
        key: "9",
        label: "¿Ustedes utilizan contratos que me amarren por 6 o 12 meses?",
        children: (
          <p className="response_question">
            Nosotros no utilizamos contratos que te amarren a nuestro servicio,
            con nosotros puedes pagar de forma mensual, cada dos meses, tres
            meses, etc. No tienes obligación de renovar el servicio si no estás
            contento, en caso decidas cambiarte de servicio podrás llevar los
            datos de tus productos y comprobantes sin problemas.
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
          <h2>Preguntas frecuentes 🤔</h2>
          <Row gutter={[20, 20]} wrap={true}>
            <Col xs={24} md={12}>
              <Collapse
                accordion
                bordered={false}
                defaultActiveKey={[]}
                expandIconPosition="end"
                className="question-collapse"
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
      .ant-collapse-header {
        color: #000;
        font-size: 1em;
      }
      .response_question {
        font-size: 0.9em;
        font-weight: 400;
        color: ${theme.colors.font2};
      }
    }
  `}
`;
