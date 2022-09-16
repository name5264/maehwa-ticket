import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3.5rem;
  font-family: ${({ theme }) => theme.font.title.toFontName()};
  font-weight: ${({ theme }) => theme.font.title.toWeight()};
  margin-bottom: 25px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
`;
