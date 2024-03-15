import React from "react";
import AntdModal from "antd/lib/modal";

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
