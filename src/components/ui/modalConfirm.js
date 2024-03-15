import Modal from "antd/lib/modal";

export const modalConfirm = ({
  centered = true,
  title = "¿Estás seguro de que quieres eliminar?",
  okText = "SI",
  cancelText = "NO",
  okButtonProps = {
    type: "primary",
    danger: true,
  },
  ...props
}) =>
  Modal.confirm({
    centered,
    okText,
    cancelText,
    okButtonProps,
    title,
    ...props,
  });
