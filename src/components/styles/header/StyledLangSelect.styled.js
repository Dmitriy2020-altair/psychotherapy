import styled from 'styled-components';

export const LanguageSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const LanguageSelectLabelWrapper = styled.div`
  display: flex;
`

export const LanguageSelectLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin: 5px;
  color: ${props => props.theme.colors.text};
`;

export const LanguageSelect = styled.select`
  appearance: none;
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #333;
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.25);
  }

  &:hover {
    border-color: #3f51b5;
  }
`;

export const LanguageOption = styled.option`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #333;
`;

export const FlagIcon = styled.div`
`