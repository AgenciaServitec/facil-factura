import {
  MobileReceipts,
  MobileInventory,
  MobileFunctions,
  MobileReports,
} from "../images";

export const summaryFeatures = [
  {
    tag: "comprobantes",
    title: "¡Boletas, Facturas y mucho más!",
    description:
      "Di adiós a los antiguos talonarios y al complicado proceso en la página web de SUNAT. Ahora, con tan solo unos simples clics, podrás generar los comprobantes que tanto necesitas de forma rápida y sencilla.",
    items: [
      "Boletas y Facturas",
      "Notas de Crédito y Débito",
      "Notas de Venta",
      "Guías de Remisión",
    ],
    images: [MobileReceipts],
    reverse: true,
  },
  {
    tag: "inventario",
    title: "Administra tu inventario de manera eficiente.",
    description:
      "¿Te has preguntado alguna vez cuántos productos te quedan? Con nuestro Control de Existencias, tendrás el detalle de tu inventario en todo momento, sin preocupaciones.",
    items: [
      "Lista de productos disponibles",
      "Códigos de barras",
      "Variaciones y cantidades de unidades",
      "Calculadora de IGV",
    ],
    images: [MobileInventory],
    reverse: false,
  },
  {
    tag: "reportes",
    title: "Permanece al tanto de tus ventas en todo momento.",
    description:
      "Con nuestra variedad de informes, podrás monitorear los ingresos de tu negocio de manera efectiva.",
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
    title: "Optimiza tu tiempo y ahorra dinero.",
    description:
      "Di adiós a sistemas y equipos adicionales. Aquí encontrarás mucho más sin costos extras.",
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
