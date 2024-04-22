import React, { useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { mediaQuery } from "../../styles";

export const PromotionComponent = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const onNavigateGoTo = (pathname) => navigate(pathname);

  return createPortal(
    <Container visible={visible}>
      <div />
      <div>
        <span>
          Quiero mi descuento del 30% por ser uno de los primeros 30 clientes
          nuevos.{" "}
          <span
            onClick={() => {
              setVisible(false);
              onNavigateGoTo("/plans-detail");
            }}
          >
            Click aqui!
          </span>
        </span>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faXmark}
          size="lg"
          className="icon"
          onClick={() => setVisible(false)}
        />
      </div>
    </Container>,
    document.getElementById("promotion-wrapper")
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: #f81414;
  font-size: 1em;
  color: #fff;
  width: 100%;

  ${({ visible }) => css`
    transition: all ease-in-out 0.5s;
    height: ${visible ? "3em" : "0px"};
    ${mediaQuery.minTablet} {
      ${({ visible }) => css`
        height: ${visible ? "2.2em" : "0px"};
      `}
    }
  `}
  div:nth-child(2) {
    span {
      cursor: pointer;

      &:hover {
        color: #e8e7e7;
      }

      a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
      }
    }
  }

  div:last-child {
    padding: 0 1em;

    .icon {
      cursor: pointer;
    }
  }
`;
