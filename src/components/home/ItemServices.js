import styled from "styled-components";

export const ItemServices = ({ img, title, content }) => {
  return (
    <Container>
      <img src={img} width="100%" height="100%" alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
    </Container>
  );
};

const Container = styled.div`
  background: rgba(0, 191, 230, 0.42);
  border-radius: 1rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  img {
    width: 50%;
    height: auto;
  }
  h3 {
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;
  }
  p {
    text-align: center;
  }
`;
