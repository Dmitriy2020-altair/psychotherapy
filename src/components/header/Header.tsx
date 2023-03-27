import React from "react";
import { Container } from "../styles/Container.styled";
import {
  ContactsWrapper,
  ControlsWrapper,
  EmailAdressWrapper,
  ContactIconWrapper,
  PhoneNumberWrapper,
  StyledHeader,
  UpperHeader,
  UpperHeaderInner,
  SocialWrapper,
  SocialIconWrapper
} from "../styles/header/StyledHeader.styled";
import LangSelect from "./LangSelect";
import Toggle, { ToggleProps } from "./Toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Contacts } from "../../constants/config";
import CookieConsent from "./CookieConsent";

const Header: React.FC<ToggleProps> = ({ toggleTheme }) => {

  return (
    <StyledHeader>
      <CookieConsent />
      <UpperHeader>
        <Container>
          <UpperHeaderInner>
            <ContactsWrapper>
              <PhoneNumberWrapper href={`tel:${Contacts.phone}`}>
                <ContactIconWrapper>
                  <FontAwesomeIcon icon={faPhone} />
                </ContactIconWrapper>
                {Contacts.phone}
              </PhoneNumberWrapper>
              <EmailAdressWrapper href={`mailto:${Contacts.email}`}>
                <ContactIconWrapper>
                  <FontAwesomeIcon icon={faEnvelope} />
                </ContactIconWrapper>
                {Contacts.email}
              </EmailAdressWrapper>
            </ContactsWrapper>
            <SocialWrapper>
              <SocialIconWrapper target="_blank" href={Contacts.instagram}>
                <FontAwesomeIcon
                  color="#833AB4"
                  size="2x"
                  icon={faInstagram}
                />
              </SocialIconWrapper>
              <SocialIconWrapper target="_blank" href={Contacts.facebook}>
                <FontAwesomeIcon
                  color="#1877f2"
                  size="2x"
                  icon={faFacebook}
                />
              </SocialIconWrapper>
              <SocialIconWrapper target="_blank" href={`tg://user?id=${Contacts.telegramId}`}>
                <FontAwesomeIcon
                  color="#0088cc"
                  size="2x"
                  icon={faTelegram}
                />
              </SocialIconWrapper>
            </SocialWrapper>
            <ControlsWrapper>
              <LangSelect />
              <Toggle toggleTheme={toggleTheme} />
            </ControlsWrapper>
          </UpperHeaderInner>
        </Container >
      </UpperHeader>
    </StyledHeader >
  );
};

export default Header;
