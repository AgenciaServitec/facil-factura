import React from "react";
import styled from "styled-components";
import {
  ImgFacturaService1,
  ImgFacturaService2,
  ImgFacturaService3,
  ImgFacturaService4,
  ImgFacturaService5,
  SeoTwo,
} from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { ItemServices } from "./ItemServices";

export const Services = ({
  onClickVisibleFormContact,
  onEventGaClickButton,
}) => {
  return (
    <Container id="services">
      <div className="content-items">
        <h2 className="title">Beneficios de usar nuestro servicios</h2>
        <div className="content-img">
          <ItemServices
            img={ImgFacturaService1}
            title="Economiza"
            content="Con la implementación de la facturación electrónica se reducen los costos de los procesos como impresión, traslado y almacenamiento."
          />
          <ItemServices
            img={ImgFacturaService2}
            title="Documentos electronicos"
            content="Conectado a la base de datos de la SUNAT para poder registrar clientes y/o proveedores."
          />
          <ItemServices
            img={ImgFacturaService3}
            title="Reportes Exclusivos"
            content="Acceso exclusivo al módulo de reportes donde podrás ver tus ventas diarias, mensuales y anuales."
          />
          <ItemServices
            img={ImgFacturaService4}
            title="Agiliza trámites"
            content="Este sistema viene de la mano con la inmediatez y eficiencia, pues se produce una mejora considerable en los tiempos de entrega."
          />
          <ItemServices
            img={ImgFacturaService5}
            title="Control de inventario"
            content="Servitec Facil Factura sincroniza automáticamente tu inventario, evita vender productos sin stock y olvídate del conteo manual de mercadería."
          />
          <ItemServices
            img={SeoTwo}
            title="Rápido y fácil de usar"
            content="Ingresa a tu sistema desde cualquier dispositivo con acceso a internet y listo. ¡Ya puedes comenzar a facturar y vender!"
          />
        </div>
        <div className="button">
          <Button
            text="¡Empezar Ahora!"
            type="primary"
            onClick={() => {
              onClickVisibleFormContact(true);
              onEventGaClickButton(
                "click-boton-empezar-ahora",
                "Click boton empezar ahora"
              );
            }}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1rem;
  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }

  .content-items {
    padding: 3rem 0;
    .title {
      color: rgba(0, 0, 0, 0.54);
      margin: 2rem 0;
      font-size: 2.4rem;
      font-weight: 800;
      text-align: center;
    }
    .content-img {
      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .button {
      padding-top: 1.4rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
