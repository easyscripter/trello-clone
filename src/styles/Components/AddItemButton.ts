import styled from "styled-components";

type AddItemButtonPropsType = {
    dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonPropsType>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff2d;
  }
`;
