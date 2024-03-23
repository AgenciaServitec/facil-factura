import { theme } from "../../styles";
import { Tag } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { MovilPrueba } from "../../images";

export const ItemSummaryApp = ({ tag, title, description, items }) => {
  return (
    <div className="carousel-item__content">
      <div className="carousel-item__text">
        <Tag bordered={false} color={theme.colors.secondary} style={{fontSize: "1.2em", padding: ".2em .7em", textTransform: "uppercase"}}>
          {tag}
        </Tag>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {items.map((item) => (
            <li>
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
      <div className="carousel-item__image">
        <img src={MovilPrueba} alt="" />
      </div>
    </div>
  );
};
