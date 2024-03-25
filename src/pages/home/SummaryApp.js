import { WrapperComponent } from "../../components";
import styled, { css } from "styled-components";
import { summaryApp } from "../../data-list";
import { theme } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { MovilPrueba } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { CarouselSummaryApp } from "./CarouselSummaryApp";
import { ItemSummaryApp } from "./ItemSummaryApp";

const contentStyle = {
  height: "100px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const SummaryApp = () => {
  return (
    <Container>
      <WrapperComponent>
        <div className="content">
          <CarouselSummaryApp autoplay>
            {summaryApp.map(({ tag, title, description, items }) => {
              return (
                <div className="carousel-item">
                  <ItemSummaryApp
                    tag={tag}
                    title={title}
                    description={description}
                    items={items}
                  />
                </div>
              );
            })}
          </CarouselSummaryApp>
        </div>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    .content {
      width: 90%;
      margin: 0 auto;
    }

    .carousel-item {
      /* min-height: 80vh; */
      &__content {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 1em;
        ${mediaQuery.minTablet} {
          flex-direction: row;
        }
      }
      &__text {
        color: ${theme.colors.font2};
        height: 23em;
        flex: 1 1 0;
        ${mediaQuery.minTablet} {
          height: auto;
        }

        h3 {
          font-size: 1.5em;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          color: ${theme.colors.tertiary};
          margin: 0.8em 0;

          ${mediaQuery.minDesktop} {
            font-size: 3em;
          }
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      }

      &__image {
        background-color: ${theme.colors.light};
        background-color: #fff;
        border-radius: 1em;
        padding: 1em 1em 0;
        flex: 1 1 0;
      }

      img {
        width: 60%;
        margin: 0 auto;
      }
    }
  `}
`;
