import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0d9ff;
  background-color: #fff;

  @media (max-width: 600px) {
    background-color: #fff;
    border-top: 1px solid #f0d9ff;
  }
`;

export const LogoContainer = styled(Link)`
  width: 30%;
  padding: 20px;
  text-decoration: none;
`;

export const OptionsContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    height: 75px;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #f0d9ff;
    z-index: 1;
    justify-content: space-between;
  }
`;

export const OptionLink = styled(Link)`
  padding: 0px 15px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  color: ${props => props.theme.$dark};
  @media (max-width: 600px) {
    ${props => (props.signout ? "justify-self: right;" : "")}
  }
`;

export const OptionTabsContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 0 2px #ccc;
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

export const OptionTab = styled.p`
  text-align: center;
  width: 200px;
  padding: 15px 0;
  cursor: pointer;
  ${({ active }) =>
    active
      ? `
    background-color: #333;
    color: #ccc;
  `
      : `background-color: #eee;`}

  border-right: 1px solid #ccc;
  transition: background-color 0.3s ease-in;

  &:last-of-type {
    border: none;
  }

  &:hover {
    color: #eee;
    background-color: #888;
  }

  @media (max-width: 600px) {
    width: 25vw;
  }
`;
