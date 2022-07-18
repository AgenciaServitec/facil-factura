import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Result from "antd/lib/result";
import Button from "antd/lib/button";

export const Page404 = () => {
  const navigate = useNavigate();

  const navigateToInitialPage = () => navigate("/");

  return (
    <Container>
      <Result
        status="404"
        title="404"
        subTitle="Lo sentimos, la página que visistaste no existe."
        extra={
          <Button type="primary" onClick={() => navigateToInitialPage()}>
            Ir a pagina de inicio
          </Button>
        }
      />
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-result-title,
  .ant-result-subtitle {
    color: #fff !important;
  }

  .ant-result-extra {
    button {
      background: red;
      border-color: red;
    }
  }
`;
