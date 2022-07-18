import React from "react";
import AntdModal from "antd/lib/modal";

// interface Props {
//   closable: boolean;
//   centered: boolean;
//   footer: null;
//   children: JSX.Element;
// }

export const Modal = ({
  closable = false,
  centered = true,
  footer = null,
  children,
  ...props
}) => (
  <AntdModal closable={closable} centered={centered} footer={footer} {...props}>
    {children}
  </AntdModal>
);
