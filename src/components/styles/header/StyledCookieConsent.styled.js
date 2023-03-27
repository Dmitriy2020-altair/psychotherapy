import styled from 'styled-components'

export const CookieConsentWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(219, 215, 215, 0.8);
  padding: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  z-index: 100;
  backdrop-filter: blur(2px);
`;

export const CookieConsentMessage = styled.p`
  font-size: 1.2rem;
  padding: 0 2%;
  width: 70%;
  margin: 0 auto;
`;

export const AllowCookieButton = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin: 20px 0;
  padding: 15px 25px;
  background-color: ${props => props.theme.colors.primary_blue};
  color: '#2f2f2f';
  transition: 0.2s linear;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  &:active {
    opacity: 0.5;
  }
`