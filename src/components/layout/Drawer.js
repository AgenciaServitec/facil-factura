import React from "react";
import DrawerAntd from "antd/lib/drawer";
import styled from "styled-components";
import { mediaQuery } from "../../styles";
import { useNavigate } from "react-router";

export const Drawer = ({
  visibleDrawer,
  onSetVisibleDrawer,
  onSetVisibleFormContact,
}) => {
  const navigate = useNavigate();
  return (
    <ComponentDrawerAntd
      title={null}
      placement="right"
      onClose={() => onSetVisibleDrawer(false)}
      open={visibleDrawer}
    >
      <MenuItem onClick={() => onSetVisibleDrawer(false)}>
        <span onClick={() => navigate("/")}>Inicio</span>
      </MenuItem>
      <MenuItem onClick={() => onSetVisibleDrawer(false)}>
        <span onClick={() => navigate("/plans-detail")}>Precios</span>
      </MenuItem>
      <MenuItem
        onClick={() => {
          onSetVisibleDrawer(false);
          onSetVisibleFormContact(true);
        }}
      >
        <span>Contácto</span>
      </MenuItem>
    </ComponentDrawerAntd>
  );
};

const ComponentDrawerAntd = styled(DrawerAntd)`
  color: #000;

  .ant-drawer-content-wrapper {
    width: 90% !important;
    ${mediaQuery.minTablet} {
      width: 40% !important;
    }
  }
  .ant-drawer-header {
    .ant-drawer-close {
      color: #000;
    }
  }
  .ant-drawer-header,
  .ant-drawer-content {
    background: #fff;
  }
`;

const MenuItem = styled.div`
  margin-bottom: 1.5rem;
  a,
  span {
    cursor: pointer;
    color: #000;
    font-size: 1.7rem;
    font-weight: 700;
  }
`;
