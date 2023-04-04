import styled from 'styled-components';

export const StyledHeader = styled.section`
  width: 100%;
`

export const UpperHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.primary_grey};
`
export const UpperHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  @media (max-width: 865px) {
    flex-direction: column;
  }
`

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;

  @media (max-width: 865px) {
    width: 100%;
    margin-top: 15px;
  }

`
export const ContactsWrapper = styled.div`
  display: flex;

  @media (max-width: 865px) {
    flex-direction: column;
    align-items: center;
  }
`

export const PhoneNumberWrapper = styled.a`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: 0.3s ease-in-out;
  padding-top: 10px;

  &:hover {
    color: ${props => props.theme.colors.primary_dark_blue};
  }
`;

export const EmailAdressWrapper = styled.a`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: 0.3s ease-in-out;
  padding-top: 10px;
  margin-left: 15px;

  @media (max-width: 865px) {
    margin: 0 auto;
  }

  &:hover {
    color: ${props => props.theme.colors.primary_dark_blue};
  }
`;

export const ContactIconWrapper = styled.span`
  margin-right: 5px;
`
export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 865px) {
    width: 200px;
    margin: 15px auto 0 auto;
  }
`

export const SocialIconWrapper = styled.a`
  margin: 10px 30px 0 0;
  transition: 0.3s ease;

  @media (max-width: 865px) {
    margin: 0;
  }

  &:hover {
    opacity: 0.8;
  }
`
export const MainHeader = styled.section`
  text-align: center;
  width: 80vw;
  margin: 0 auto;
`

export const MainTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 1px;
  margin-bottom: 0;
  margin-top: 35px;
`

export const Slogan = styled.h4`
  color: ${props => props.theme.colors.text};
  margin: 5px 0 40px 0;
`
