import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPlus,
  faPlusCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { Button, Tag } from "../ui";
import { lighten, rgba } from "polished";
import { Link } from "react-router-dom";
import { setLocalField } from "../../utils";

export const PlanCard = ({
  type,
  plan,
  planType,
  onSetPlanType,
  onNavigateGoTo,
}) => {
  const getIconType = (type) => {
    switch (type) {
      case "check":
        return (
          <FontAwesomeIcon
            icon={faCheckCircle}
            color="#54cf62"
            className="icon"
          />
        );
      case "cross":
        return (
          <FontAwesomeIcon icon={faXmarkCircle} color="red" className="icon" />
        );
      case "plus":
        return (
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="#54cf62"
            className="icon"
          />
        );
      default:
        return (
          <FontAwesomeIcon
            icon={faCheckCircle}
            color="#54cf62"
            className="icon"
          />
        );
    }
  };

  const isSelectedPlan = planType === plan.id;

  const onPlanRequest = (plan) => {
    setLocalField("plan", plan);
    onNavigateGoTo(`/request-plan?planType=${plan.id}`);
  };

  return (
    <Container type={type} planType={plan.type} isSelectedPlan={isSelectedPlan}>
      <div className="top-header">
        <div className="card-title">
          <h3 className="strong-sm">{plan.name}</h3>
          {plan?.tag && (
            <Tag bordered={false} color={plan.tag.type} className="tag">
              {plan.tag.value}
            </Tag>
          )}
        </div>
        {plan?.titleLegend && <span>{plan?.titleLegend}</span>}
      </div>
      <div className="price-item">
        <div className="price">
          {plan?.prices && <h3>S/ {plan.prices.value}</h3>}
          <span>/mes</span>
        </div>
        {plan?.prices?.priceByYear && (
          <div className="legend-item">{`Pago total: S/${plan.prices.priceByYear} /año`}</div>
        )}
      </div>
      <div className="plan-list">
        <ul>
          {plan.benefitsList.map((benefit, index) => (
            <li key={index} className={benefit.bold && "strong-sm"}>
              {getIconType(benefit.type)}
              {benefit.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-card">
        {type === "selection" ? (
          !isSelectedPlan && (
            <Button
              type="primary"
              size="middle"
              onClick={() => onSetPlanType(plan.id)}
            >
              Seleccionar
            </Button>
          )
        ) : (
          <Button
            type="primary"
            size="middle"
            onClick={() => onPlanRequest(plan)}
          >
            Solicitar PLAN
          </Button>
        )}
      </div>
      <div className="bottom-footer">
        <div className="description-item">
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <Link to={`/plans-detail?planType=${plan.id}`}>
            Más detalles del Plan
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme, planType = "normal", isSelectedPlan = false }) => css`
    width: 100%;
    min-height: 26em;
    min-width: 12em;
    height: auto;
    background: ${planType === "normal"
      ? theme.colors.light
      : lighten(0.11, theme.colors.quaternary)};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    padding: 1em;
    border-radius: 0.7em;
    font-size: 17px;
    border: 1.3px solid transparent;
    color: ${theme.colors.font1};

    ${isSelectedPlan &&
    css`
      background: ${rgba(theme.colors.success, 0.3)};
      border: 1.3px solid ${theme.colors.success};
    `}

    .top-header {
      display: grid;
      gap: 0.3em;
      margin-bottom: 1.5em;

      .card-title {
        display: flex;
        align-items: center;
        h3 {
          font-size: 1.4em;
          font-weight: 600;
          color: inherit;
        }

        .tag {
          height: 2.1em;
          font-size: 0.6em;
          display: flex;
          place-items: center;
          padding: 0.1em 0.5em;
          margin: 0.5em;
          font-weight: 700;
        }
      }

      span {
        font-size: 0.8em;
        font-weight: 400;
      }
    }

    .price-item {
      display: grid;
      gap: 0.3em;
      margin-bottom: 1.5em;

      span {
        font-size: 0.8em;
        font-weight: 400;
      }

      .price {
        display: flex;
        align-items: center;
        gap: 0.3em;

        h3 {
          font-size: 1.7em;
          font-weight: 900;
          color: inherit;
        }
      }

      .legend-item {
        font-size: 0.8em;
        font-weight: 400;
      }
    }

    .plan-list {
      margin-bottom: 1.5em;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 0.5em;

        li {
          display: grid;
          gap: 0.8em;
          grid-template-columns: 0.9em 1fr;
          font-size: 0.83em;
          text-align: left;

          .icon {
            font-size: 1.1em;
          }
        }
      }
    }

    .footer-card {
      display: flex;
      justify-content: center;
      margin-bottom: 1.5em;
    }

    .bottom-footer {
      display: grid;
      place-items: center;

      .description-item {
        display: flex;
        gap: 0.5em;
        font-size: 0.9em;
        cursor: pointer;

        &:hover {
          color: ${theme.colors.secondary};
        }

        .icon {
          font-size: 1.1em;
          font-weight: 800;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      }
    }
  `}
`;
