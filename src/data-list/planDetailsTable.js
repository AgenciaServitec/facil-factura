import { isBoolean } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
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
      planPro: 650,
    },
    {
      key: "2",
      id: "",
      comparacionDePlanes: ["Notas de Venta"],
      micro: "Ilimitado",
      emprende: "Ilimitado",
      planControl: "Ilimitado",
      planPro: "Ilimitado",
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
      planPro: true,
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
      planPro: true,
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
      planPro: true,
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
      planPro: true,
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
      planPro: true,
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
      planPro: true,
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
          <div className="plan-cell">
            <p className="plan-cell__title">{plan.comparacionDePlanes[0]}</p>
            <ul className="plan-cell__description">
              {plan.comparacionDePlanes.slice(1).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
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
      title: "Plan Pro",
      dataIndex: "planPro",
      key: "plan-pro",
      align: "center",
      className: planType === "plan-pro" ? "cell-bg" : "inherit",
      render: (_) => includeBenefit(_),
    },
  ];

  const includeBenefit = (cellValue = false) => {
    if (isBoolean(cellValue))
      return (
        <div>
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
        </div>
      );
    return <div className="item-cell">{cellValue}</div>;
  };

  return (
    <Table
      key={planType}
      id="plan-details-table"
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      rowClassName={() => "row-item"}
    />
  );
};
