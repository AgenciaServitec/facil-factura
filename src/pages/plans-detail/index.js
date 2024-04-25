import { useEffect } from "react";
import { HomePagePlans } from "../home/HomePagePlans";
import { PlanDetailsTable } from "../../data-list";
import { WrapperComponent } from "../../components";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles";
import { useQuery } from "../../hooks";

export const PlansDetail = () => {
  const { planType } = useQuery();

  useEffect(() => {
    const tablePlan = document.getElementById("plan-details-table");
    planType && tablePlan.scrollIntoView({ behavior: "smooth" });
  }, [planType]);

  return (
    <Container>
      <WrapperComponent>
        <div className="promotion-title">
          El descuento del 30% solo esta disponible para los siguientes planes:{" "}
          <strong>Plan Popular</strong> y <strong>Plan Control</strong>
        </div>
        <HomePagePlans />
        <div className="content">
          <PlanDetailsTable planType={planType} />
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    padding: 3em 0;

    .promotion-title {
      text-align: center;
      color: red;
      padding: 0 1em;
    }

    .content {
      width: 90%;
      margin: 0 auto;

      ${mediaQuery.minDesktop} {
        width: 80%;
      }
    }

    .ant-table-thead {
      .ant-table-cell {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        text-align: center;
      }
    }
    .ant-table-tbody {
      .ant-table-row {
        &:hover .ant-table-cell {
          background-color: transparent;
        }
        &:hover .cell-bg {
          background-color: ${theme.colors.quaternary};
        }
      }
      .cell-bg {
        background-color: ${theme.colors.quaternary};
      }
    }

    .plan-cell {
      &__title {
        color: ${theme.colors.tertiary};
        font-weight: 700;
      }
      &__description {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 0.9em;
      }
    }

    .item-cell {
      font-size: 1.5em;
    }

    .icon {
      font-size: 1.5em;
    }
  `}
`;
