import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import theme from "./theme";

const noArrawsInput = css`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const noSelect = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const AnchorLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${theme.$primary};

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  ${({ noStyle }) =>
    noStyle
      ? `color: inherit;`
      : `color: ${theme.$primary};

  &:hover {
    text-decoration: underline;
  }`}
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  border: 1px solid #f2f2f2;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const Th = styled.th`
  ${props => props.border && `border: 1px solid #ddd;`}
  padding: 8px 20px;
`;

export const Td = styled.td`
  padding: 8px;
`;

export const TablesContainer = styled.div`
  display: flex;
  width: 680px;
  justify-self: flex-end;
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CartSpan = styled.span`
  padding: 5px 10px;
  background-color: #eee;
  cursor: pointer;
  user-select: none;
`;

export const CartInput = styled.input`
  padding: 5px 10px;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  border: none;
  width: 70px;
  ${noArrawsInput}
  text-align: center;
`;
