import styled from "styled-components";

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.title.toFontName()};
  font-weight: ${({ theme }) => theme.font.title.toWeight()};
  font-size: 2.5rem;
  margin-bottom: 60px;
`;

export const Ticket = styled.div`
  width: 95%;
  background-color: tomato;
  margin: 0 15px;
`;
