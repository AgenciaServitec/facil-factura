import { isBoolean } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Table } from "../components";
import { ourPlans } from "../data-list";

export const PlanDetailsTable = ({ planType }) => {
  const findPlanById = (planId) =>
    ourPlans.find((plan) => plan.id === planId)?.tableDetails || "";

  const getPlansWithData = (fieldType) => {
    const rowData = [];

    ["micro", "popular", "planControl"].map(
      (plan) => (rowData[plan] = findPlanById(plan)?.[fieldType])
    );

    return rowData;
  };

  const dataSource = [
    {
      key: "1",
      id: "tickets",
      comparacionDePlanes: [
        "Comprobantes/unidad",
        "Boletas y Facturas",
        "Guías de Remisión",
        "Notas de Crédito y Débito",
      ],
      ...getPlansWithData("vouchers"),
    },
    {
      key: "2",
      id: "micro",
      comparacionDePlanes: ["Sucursales"],
      ...getPlansWithData("branchOfficesNumber"),
    },
    {
      key: "3",
      id: "branchOffices",
      comparacionDePlanes: ["Almacenes"],
      ...getPlansWithData("wareHousesNumber"),
    },
    {
      key: "4",
      id: "usersNumber",
      comparacionDePlanes: ["Usuarios"],
      ...getPlansWithData("usersNumber"),
    },
    {
      key: "5",
      id: "inventory",
      comparacionDePlanes: [
        "Inventario",
        "Kardex Valorizado",
        "Gestion de categorias",
        "Lo más vendido",
      ],
      ...getPlansWithData("inventory"),
    },
    {
      key: "6",
      id: "searchByRucAndDni",
      comparacionDePlanes: ["Busqueda por RUC o DNI"],
      ...getPlansWithData("searchByRucAndDni"),
    },
    {
      key: "7",
      id: "reports",
      comparacionDePlanes: ["Reportes", "Top clientes", "Top colaboradores"],
      ...getPlansWithData("reports"),
    },
    {
      key: "8",
      id: "accountsByPayment",
      comparacionDePlanes: ["Cuentas por pagar"],
      ...getPlansWithData("accountsByPayment"),
    },
    {
      key: "9",
      id: "salesManagement",
      comparacionDePlanes: ["Gestion de Ventas"],
      ...getPlansWithData("salesManagement"),
    },
    {
      key: "10",
      id: "warehouseInputsAndOutputs",
      comparacionDePlanes: ["Ingresos y Salidas de Almacén"],
      ...getPlansWithData("warehouseInputsAndOutputs"),
    },
    {
      key: "11",
      id: "transferBetweenWarehouses",
      comparacionDePlanes: ["Traslado entre almacénes"],
      ...getPlansWithData("transferBetweenWarehouses"),
    },
    {
      key: "12",
      id: "pettyCash",
      comparacionDePlanes: ["Caja chica"],
      ...getPlansWithData("pettyCash"),
    },
    {
      key: "13",
      id: "purchasingManagement",
      comparacionDePlanes: ["Gestion de Compras"],
      ...getPlansWithData("purchasingManagement"),
    },
    {
      key: "14",
      id: "supplierManagement",
      comparacionDePlanes: ["Gestion de Proveedores "],
      ...getPlansWithData("supplierManagement"),
    },
    {
      key: "15",
      id: "referenceGuides",
      comparacionDePlanes: ["Guías de Remisión "],
      ...getPlansWithData("referenceGuides"),
    },
    {
      key: "16",
      id: "accounting",
      comparacionDePlanes: [
        "Contabilidad",
        "Libro Electrónico de Compras",
        "Libro Electrónico de Ventas",
        "Reporte detalle ventas",
      ],
      ...getPlansWithData("accounting"),
    },
    {
      key: "17",
      id: "customers",
      comparacionDePlanes: ["Clientes"],
      ...getPlansWithData("customers"),
    },
    {
      key: "18",
      id: "ballotSummary",
      comparacionDePlanes: ["Resumen de boletas "],
      ...getPlansWithData("ballotSummary"),
    },
    {
      key: "19",
      id: "accountsReceivable",
      comparacionDePlanes: ["Cuentas por cobrar "],
      ...getPlansWithData("accountsReceivable"),
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
      title: "Popular",
      dataIndex: "popular",
      key: "popular",
      align: "center",
      className: planType === "popular" ? "cell-bg" : "inherit",
      render: (_) => includeBenefit(_),
    },
    {
      title: "Plan Control",
      dataIndex: "planControl",
      key: "planControl",
      align: "center",
      className: planType === "plan-control" ? "cell-bg" : "inherit",
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
