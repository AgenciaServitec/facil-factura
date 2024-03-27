import { isBoolean } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { Table } from "../components";

export const PlanDetailsTable = ({ planType }) => {
  const dataSource = [
    {
      key: "1",
      id: "micro",
      comparacionDePlanes: [
        "Comprobantes/mes",
        "Boletas y Facturas",
        "Guías de Remisión",
        "Notas de Crédito y Débito",
      ],
      micro: 200,
      emprende: 400,
      planControl: 500,
      bacan: 650,
      super: 800,
      mega: 1200,
    },
    {
      key: "2",
      id: "",
      comparacionDePlanes: ["Notas de Venta"],
      micro: "Ilimitado",
      emprende: "Ilimitado",
      planControl: "Ilimitado",
      bacan: "Ilimitado",
      super: "Ilimitado",
      mega: "Ilimitado",
    },
    {
      key: "3",
      id: "",
      comparacionDePlanes: [
        "+ Ticketera 🖨️",
        "Tamaño portátil",
        "Batería de larga duración",
        "Incluye 4 contómetros",
        "Conexión Bluetooth y USB para PC",
      ],
      micro: false,
      emprende: false,
      planControl: true,
      bacan: true,
      super: true,
      mega: true,
    },
    {
      key: "4",
      id: "",
      comparacionDePlanes: [
        "Inventario",
        "Catálogo de productos",
        "Lector de códigos de barra",
        "Tipos y cantidad de unidades",
        "Calculadora de IGV",
      ],
      micro: true,
      emprende: true,
      planControl: true,
      bacan: true,
      super: true,
      mega: true,
    },
    {
      key: "5",
      id: "",
      comparacionDePlanes: [
        "Reportes",
        "Reporte de Ventas",
        "Reporte de Inventario",
        "Reporte de Vendedores",
        "Reporte para el Contador",
      ],
      micro: true,
      emprende: true,
      planControl: true,
      bacan: true,
      super: true,
      mega: true,
    },
    {
      key: "6",
      id: "",
      comparacionDePlanes: [
        "Registros",
        "Cotizaciones",
        "Gastos y compras",
        "Lista de clientes",
        "Lista de proveedores",
      ],
      micro: true,
      emprende: true,
      planControl: true,
      bacan: true,
      super: true,
      mega: true,
    },
    {
      key: "7",
      id: "",
      comparacionDePlanes: [
        "Personalización",
        "Datos de tu negocio",
        "Logo en comprobantes",
        "Mensaje extra en comprobantes",
      ],
      micro: true,
      emprende: true,
      planControl: true,
      bacan: true,
      super: true,
      mega: true,
    },
    {
      key: "8",
      id: "",
      comparacionDePlanes: [
        "+ Funcionalidades",
        "Envío de comprobantes a SUNAT",
        "Anulaciones",
        "Consulta de RUC o DNI",
        "Hasta 5 usuarios",
        "Hasta 4 dispositivos por usuario",
      ],
      micro: true,
      emprende: true,
      planControl: true,
      bacan: true,
      super: true,
      mega: true,
    },
  ];
  const columns = [
    {
      title: "Comparación de planes",
      dataIndex: "comparacionDePlanes",
      key: "comparacionDePlanes",
      align: "start",
      render: (_, plan) => {
        return (
          <WrapperCell className="plan-cell">
            <p className="plan-cell__title">{plan.comparacionDePlanes[0]}</p>
            <ul className="plan-cell__description">
              {plan.comparacionDePlanes.slice(1).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </WrapperCell>
        );
      },
    },
    {
      title: "Micro",
      dataIndex: "micro",
      key: "micro",
      align: "center",
      className: planType === "micro" ? "cell-bg" : "inherit",
      render: (_, plan) => {
        return includeBenefit(_);
      },
    },
    {
      title: "Emprende",
      dataIndex: "emprende",
      key: "emprende",
      align: "center",
      className: planType === "emprende" ? "cell-bg" : "inherit",
      render: (_) => includeBenefit(_),
    },
    {
      title: "Plan Control",
      dataIndex: "planControl",
      key: "plan-control",
      align: "center",
      className: planType === "plan-control" ? "cell-bg" : "inherit",
      render: (_) => includeBenefit(_),
    },
    {
      title: "Bacán",
      dataIndex: "bacan",
      key: "bacan",
      align: "center",
      className: planType === "bacan" ? "cell-bg" : "inherit",
      render: (_) => includeBenefit(_),
    },
    {
      title: "Súper",
      dataIndex: "super",
      key: "super",
      align: "center",
      className: planType === "super" ? "cell-bg" : "inherit",
      render: (_) => includeBenefit(_),
    },
    {
      title: "Mega",
      dataIndex: "mega",
      key: "mega",
      align: "center",
      className: planType === "mega" ? "cell-bg" : "inherit",
      render: (_) => includeBenefit(_),
    },
  ];

  const includeBenefit = (cellValue = false) => {
    if (isBoolean(cellValue))
      return (
        <WrapperCell>
          {cellValue ? (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "yellowgreen" }}
              className="icon"
            />
          ) : (
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "red" }}
              className="icon"
            />
          )}
        </WrapperCell>
      );
    return <WrapperCell className="item-cell">{cellValue}</WrapperCell>;
  };

  const WrapperCell = styled.div`
    ${({ theme }) => css`
    `}
  `;

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};
