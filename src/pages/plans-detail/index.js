import { HomePagePlans } from "../home/HomePagePlans";
import { PlanDetailsTable, planDetailsTable } from "../../data-list";
import { Table, WrapperComponent } from "../../components";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles";
import { useQueryString } from "../../hooks";

export const PlansDetail = () => {
  const [planType] = useQueryString("planType", "");

  return (
    <Container>
      <WrapperComponent>
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
          background-color: transparent !important;
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
