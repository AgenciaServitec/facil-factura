import { mediaQuery } from "../../styles";
import { Tag } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

export const ItemSummaryAppTwo = ({
  tag,
  title,
  description,
  items,
  images,
}) => {
  return (
    <Container>
      <div className="item-carousel-text">
        <Tag
          bordered={false}
          color="processing"
          className="item-carousel-text__tag"
          style={{
            fontWeight: "700",
            padding: ".2em .7em",
            textTransform: "uppercase",
          }}
        >
          {tag}
        </Tag>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color="#54cf62"
                className="icon"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="item-carousel-image">
        <img src={images[0]} alt={`Imagen de ${tag}`} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    gap: 1em;
    padding: 1em;
    ${mediaQuery.minTablet} {
      flex-direction: row-reverse;
      gap: 2em;
    }

    .item-carousel-text {
      color: ${theme.colors.tertiary};
      height: 23em;
      flex: 1 1 0;
      text-align: center;
      ${mediaQuery.minTablet} {
        height: auto;
        flex: 2 1 0;
        text-align: left;
      }

      &__tag {
        font-size: 0.8em;
        ${mediaQuery.minDesktop} {
          font-size: 1em;
        }
      }

      h2 {
        font-size: 1.5em;
        font-weight: 700;
        line-height: 1.2;
        margin: 0.5em 0;

        ${mediaQuery.minDesktop} {
          font-size: 2.7em;
        }
      }

      p {
        font-weight: 300;
        color: ${theme.colors.font2};
        margin-bottom: 0.5em;
        ${mediaQuery.minDesktop} {
          font-size: 1.2em;
        }
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: 400;
        text-align: left;
        ${mediaQuery.minDesktop} {
          font-size: 1.2em;
        }
        li {
          display: flex;
          align-items: center;
          gap: 0.5em;
        }
      }
    }

    .item-carousel-image {
      background-color: ${theme.colors.quaternary};
      border-radius: 1em;
      padding: 2em 3em 0;
      flex: 1 1 0;
      ${mediaQuery.minTablet} {
        align-self: flex-start;
      }

      img {
        width: 90%;
        margin: 0 auto;
      }
    }
  `}
`;
