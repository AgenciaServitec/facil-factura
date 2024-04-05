import { isBoolean } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Table } from "../components";
import { ourPlans } from "../data-list";

export const PlanDetailsTable = ({ planType }) => {
  const findPlanById = (planId) =>
    ourPlans.find((plan) => plan.id === planId) || "";

  const dataSource = [
    {
      key: "1",
      id: "",
      comparacionDePlanes: [
        "Comprobantes/mes",
        "Boletas y Facturas",
        "Guías de Remisión",
        "Notas de Crédito y Débito",
      ],
      micro: findPlanById("micro").tableDetails.amountTikectsByMonth,
      emprende: findPlanById("emprende").tableDetails.amountTikectsByMonth,
      planControl: findPlanById("plan-control").tableDetails.amountTikectsByMonth,
      planPro: findPlanById("plan-pro").tableDetails.amountTikectsByMonth,
    },
    {
      key: "2",
      id: "micro",
      comparacionDePlanes: ["Notas de Venta"],
      micro: findPlanById("micro").tableDetails.noteSales,
      emprende: findPlanById("emprende").tableDetails.noteSales,
      planControl: findPlanById("plan-control").tableDetails.noteSales,
      planPro: findPlanById("plan-pro").tableDetails.noteSales,
    },
    {
      key: "3",
      id: "emprende",
      comparacionDePlanes: [
        "+ Ticketera 🖨️",
        "Tamaño portátil",
        "Batería de larga duración",
        "Incluye 4 contómetros",
        "Conexión Bluetooth y USB para PC",
      ],
      micro: findPlanById("micro").tableDetails.ticketera,
      emprende: findPlanById("emprende").tableDetails.ticketera,
      planControl: findPlanById("plan-control").tableDetails.ticketera,
      planPro: findPlanById("plan-pro").tableDetails.ticketera,
    },
    {
      key: "4",
      id: "plan-control",
      comparacionDePlanes: [
        "Inventario",
        "Catálogo de productos",
        "Lector de códigos de barra",
        "Tipos y cantidad de unidades",
        "Calculadora de IGV",
      ],
      micro: findPlanById("micro").tableDetails.inventory,
      emprende: findPlanById("emprende").tableDetails.inventory,
      planControl: findPlanById("plan-control").tableDetails.inventory,
      planPro: findPlanById("plan-pro").tableDetails.inventory,
    },
    {
      key: "5",
      id: "plan-prop",
      comparacionDePlanes: [
        "Reportes",
        "Reporte de Ventas",
        "Reporte de Inventario",
        "Reporte de Vendedores",
        "Reporte para el Contador",
      ],
      micro: findPlanById("micro").tableDetails.reports,
      emprende: findPlanById("emprende").tableDetails.reports,
      planControl: findPlanById("plan-control").tableDetails.reports,
      planPro: findPlanById("plan-pro").tableDetails.reports,
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
      micro: findPlanById("micro").tableDetails.register,
      emprende: findPlanById("emprende").tableDetails.register,
      planControl: findPlanById("plan-control").tableDetails.register,
      planPro: findPlanById("plan-pro").tableDetails.register,
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
      micro: findPlanById("micro").tableDetails.personalization,
      emprende: findPlanById("emprende").tableDetails.personalization,
      planControl: findPlanById("plan-control").tableDetails.personalization,
      planPro: findPlanById("plan-pro").tableDetails.personalization,
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
      micro: findPlanById("micro").tableDetails.functionalities,
      emprende: findPlanById("emprende").tableDetails.functionalities,
      planControl: findPlanById("plan-control").tableDetails.functionalities,
      planPro: findPlanById("plan-pro").tableDetails.functionalities,
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
