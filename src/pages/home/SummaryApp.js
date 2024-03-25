import { WrapperComponent } from "../../components";
import styled, { css } from "styled-components";
import { summaryData } from "../../data-list";
import { mediaQuery } from "../../styles";
import { CarouselSummaryApp } from "./CarouselSummaryApp";
import { ItemSummaryApp } from "./ItemSummaryApp";
import { ItemSummaryAppTwo } from "./ItemSummaryAppTwo";

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
          <div className="content__title">
            <h2>Tu gestión empresarial 📱</h2>
            <span>(ahora al alcance de un clic en tu PC y en tu móvil)</span>
          </div>
          <CarouselSummaryApp autoplay>
            {summaryData.map(
              ({ tag, title, description, items, images, reverse }) => {
                return (
                  <>
                    {reverse ? (
                      <ItemSummaryApp
                        key={tag}
                        tag={tag}
                        title={title}
                        description={description}
                        items={items}
                        images={images}
                      />
                    ) : (
                      <ItemSummaryAppTwo
                        key={tag}
                        tag={tag}
                        title={title}
                        description={description}
                        items={items}
                        images={images}
                      />
                    )}
                  </>
                );
              }
            )}
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
      padding: 2em 0;

      &__title {
        text-align: center;
        margin-bottom: 2em;
        h2 {
          font-size: 2.7em;
          font-weight: 700;
        }
        span {
          font-size: 1.2em;
          font-weight: 500;
        }
      }
    }

    .ant-carousel .slick-dots-bottom {
      bottom: -2em;
    }

    .slick-dots {
      margin: 1.5rem auto 2rem auto;
      li.slick-active {
        width: auto !important;
        button {
          background-color: ${theme.colors.primary};
        }
      }
      li {
        width: auto !important;
        margin: 0 7px;
        button {
          width: 14px !important;
          height: 14px !important;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  `}
`;
