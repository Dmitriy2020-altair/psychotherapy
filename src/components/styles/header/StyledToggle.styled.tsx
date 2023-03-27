import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -6px;
`

export const ToggleLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`

export const ToggleInner = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleButton = styled.div < { active: boolean } > `
  width: 30px;
  height: 16px;
  border-radius: 10px;
  background-color: ${({ active }) => active ? '#ffff00' : '#010727'};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: ${({ active }) => active ? 'flex-end' : 'flex-start'};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const ThemeIconWrapper = styled.span`
  margin-left: 5px;
`;

export const ThemeLabel = styled.span`
  color: ${props => props.theme.colors.text};
`
