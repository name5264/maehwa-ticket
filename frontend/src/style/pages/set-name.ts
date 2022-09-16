import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: ${({ theme }) => theme.color.text.toRGB()};
`;

export const SubTitle = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 15px;
  color: ${({ theme }) => theme.color.text.toRGBA(0.5)};
  text-align: center;
  line-height: 1.8rem;
  margin-bottom: 50px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.toRGBA(0.6)};
  height: 25px;
  text-align: center;

  &::placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.color.text.toRGBA(0.5)};
    font-family: "Noto Sans KR";
  }
`;

export const SetButton = styled.button`
  border: none;
  padding: 0 20px;
  height: 35px;
  border-radius: 40px;
  margin-left: 15px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.point.toRGB()};
  color: ${({ theme }) => theme.color.background.toRGB()};
`;
