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
  onSetStepNumber,
  isMobile,
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
        </div>
        {plan?.titleLegend && <span>{plan?.titleLegend}</span>}
      </div>
      <div className="prices-items">
        <div className="prices-items__content">
          <div className="prices">
            {plan?.prices && (
              <div className="items">
                {plan?.discount && (
                  <div className="old-price-with-discount">
                    <h3 className="old-price">
                      S/ {plan.prices.value.toFixed(2)}
                    </h3>
                    <Tag bordered={false} color={plan.tag.type} className="tag">
                      -{" "}
                      {plan?.discount.type === "fixed"
                        ? `S/ ${plan?.discount.value}`
                        : `${plan?.discount.value}%`}
                    </Tag>
                  </div>
                )}
                <h3 className="total-neto">S/ {plan?.totalNeto.toFixed(2)}</h3>
              </div>
            )}
            {plan?.prices && <span>/ {plan.prices.type}</span>}
          </div>
          {plan?.prices?.priceByYear && (
            <div className="legend-item">{`Pago total: S/${plan.prices.priceByYear} /año`}</div>
          )}
        </div>
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
              onClick={() => {
                const btnContinue = document.getElementById(
                  "btn-request-plan-continue"
                );
                btnContinue &&
                  btnContinue.scrollIntoView({ behavior: "smooth" });

                if (isMobile) {
                  onSetPlanType(plan.id);
                  return onSetStepNumber();
                }

                return onSetPlanType(plan.id);
              }}
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
    min-height: 41em;
    min-width: 12em;
    height: auto;
    background: ${planType === "normal"
      ? theme.colors.light
      : lighten(0.11, theme.colors.quaternary)};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    padding: 1em;
    border-radius: 0.7em;
    font-size: 17px;
    border: 1px solid transparent;
    color: ${theme.colors.font1};

    ${isSelectedPlan &&
    css`
      background: ${rgba(theme.colors.success, 0.3)};
      border: 1px solid ${theme.colors.success};
    `}

    .top-header {
      display: grid;
      gap: 0.3em;
      margin-bottom: 1em;

      .card-title {
        display: flex;
        align-items: center;
        h3 {
          font-size: 1.4em;
          font-weight: 600;
          color: inherit;
          margin-bottom: 0.3em;
        }
      }

      span {
        font-size: 0.8em;
        font-weight: 400;
      }
    }

    .prices-items {
      display: flex;
      gap: 0.3em;
      margin-bottom: 1em;
      min-height: 3.3em;
      align-items: center;

      &__content {
        span {
          font-size: 0.8em;
          font-weight: 400;
          margin-bottom: 0.3em;
        }

        .prices {
          display: flex;
          align-items: end;
          gap: 0.3em;

          .items {
            .old-price-with-discount {
              display: flex;
              align-items: center;

              .tag {
                height: 1.7em;
                font-size: 0.6em;
                display: flex;
                place-items: center;
                padding: 0.1em 0.5em;
                margin: 0.5em;
                font-weight: 700;
              }
              .old-price {
                font-weight: 500;
                font-size: 0.9em;
                text-decoration: line-through;
                margin-bottom: 0;
              }
            }
            .total-neto {
              font-size: 1.7em;
              font-weight: 900;
              color: inherit;
              margin-bottom: 0;
            }
          }
        }

        .legend-item {
          font-size: 0.8em;
          font-weight: 400;
        }
      }
    }

    .plan-list {
      margin-bottom: 1em;

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
      margin-bottom: 1em;
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
