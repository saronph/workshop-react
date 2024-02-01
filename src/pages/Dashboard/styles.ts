import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

interface DashboardButtonProps {
  $typeNumber: number;
}

export const DashboardButton = styled.button<DashboardButtonProps>`
  padding: 16px;
  width: 10rem;
  background-color: #cccccc;
  /* background-color: ${(props) =>
    props.$typeNumber % 2 === 0 ? "blue" : "red"}; */

  border: 1px solid;
  border-radius: 16px;

  font-size: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  /* ${(props) =>
    props.$typeNumber % 2 === 0
      ? css`
          color: white;
          background-color: red;
        `
      : css`
          color: black;
          background-color: blue;
        `} */
`;
