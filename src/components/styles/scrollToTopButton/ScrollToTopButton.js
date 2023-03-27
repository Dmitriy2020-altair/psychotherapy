import styled from "styled-components";

export const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${props => props.theme.colors.primary_blue};
  color: #e4e3e3;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 30px;
  cursor: pointer;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  &:hover {
    background-color: #005fa3;
  }
`;