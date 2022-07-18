import Modal from "antd/lib/modal";

// interface Props {
//     centered?: boolean;
//     title?: string;
//     okText?: string;
//     cancelText?: string;
//     okButtonProps?: BaseButtonProps;
//     onOk?: () => void;
//     content?: string;
// }

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
