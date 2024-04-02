import {
  MobileReceipts,
  MobileInventory,
  MobileFunctions,
  MobileReports,
} from "../images";

export const summaryData = [
  {
    tag: "comprobantes",
    title: "Boletas, Facturas y más ¡en segundos!",
    description:
      "Despídete de los talonarios y de la compleja página web SUNAT, con solo unos clics podrás generar los comprobantes más necesarios.",
    items: [
      "Boletas y Facturas",
      "Guías de Remisión",
      "Notas de Crédito y Débito",
      "Notas de Venta",
    ],
    images: [MobileReceipts],
    reverse: true,
  },
  {
    tag: "inventario",
    title: "Administra el inventario de tus productos",
    description:
      "¿Alguna vez te has preguntado cuántos productos te quedan?… ¡No más! Con el Control de existencias conocerás el detalle de tu inventario en todo momento.",
    items: [
      "Catálogo de productos",
      "Lector de códigos de barra",
      "Tipos y cantidad de unidades",
      "Calculadora de IGV",
    ],
    images: [MobileInventory],
    reverse: false,
  },
  {
    tag: "reportes",
    title: "Mantente informado sobre tus ventas",
    description:
      "Nuestra amplia gama de informes te permitirá supervisar los ingresos de tu negocio.",
    items: [
      "Reporte de Ventas",
      "Reporte de Inventario",
      "Reporte de Vendedores",
      "Reporte para el Contador",
    ],
    images: [MobileReports],
    reverse: true,
  },
  {
    tag: "características",
    title: "Ahorra tiempo y dinero",
    description:
      "¡Despídete de sistemas y equipos adicionales! Aquí encontrarás mucho más sin costo extra.",
    items: [
      "Cotizaciones",
      "Registro de gastos",
      "Registro de clientes y proveedores",
      "Personalización de comprobantes",
    ],
    images: [MobileFunctions],
    reverse: false,
  },
];
