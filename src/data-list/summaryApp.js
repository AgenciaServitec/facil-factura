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
      "Dile adiós a los talonarios y a la complicada web SUNAT, solo con un par de clics podrás emitir los comprobantes más solicitados.",
    items: [
      "Boletas y Facturas",
      "Guías de Remisión",
      "Notas de Crédito y Débito",
      "Notas de Venta",
    ],
    images: [MobileReceipts],
    reverse: true
  },
  {
    tag: "inventario",
    title: "Controla el stock de tus productos",
    description:
      "¿Te ha pasado que no sabías cuántos artículos te quedaban?… ¡Eso nunca más! Con el Control de inventario sabrás el detalle de tu stock en todo momento.",
    items: [
      "Catálogo de productos",
      "Lector de códigos de barra",
      "Tipos y cantidad de unidades",
      "Calculadora de IGV",
    ],
    images: [MobileInventory],
    reverse: false
  },
  {
    tag: "reportes",
    title: "Mantente al día con tus ventas",
    description:
      "Nuestra gran variedad de reportes te ayudarán a controlar los ingresos de tu emprendimiento.",
    items: [
      "Reporte de Ventas",
      "Reporte de Inventario",
      "Reporte de Vendedores",
      "Reporte para el Contador",
    ],
    images: [MobileReports],
    reverse: true
  },
  {
    tag: "+ funcionalidades",
    title: "Ahorro, ahorro y más ahorro",
    description:
      "¡Olvídate de sistemas y equipos adiciones! Aquí tenemos mucho más para ti sin costo adicional.",
    items: [
      "Cotizaciones",
      "Registro de gastos",
      "Registro de clientes y proveedores",
      "Personalización de comprobantes",
    ],
    images: [MobileFunctions],
    reverse: false
  },
];