import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "src/hooks/useLocalStorage";
import {
  AllowCookieButton,
  CookieConsentMessage,
  CookieConsentWrapper
} from "../styles/header/StyledCookieConsent.styled";

const CookieConsent: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [allowCookies, setAllowCookies] = useLocalStorage('allowCookies', false)
  const { t } = useTranslation(['header']);

  useEffect(() => {
    setShowCookieConsent(!allowCookies);
  }, [allowCookies]);

  const handleAllowCookies = () => {
    setAllowCookies(true);
    setShowCookieConsent(false);
  };

  return (
    showCookieConsent ?
      <CookieConsentWrapper>
        <CookieConsentMessage>
          {t('cookieConsent.text')}
        </CookieConsentMessage>
        <AllowCookieButton
          onClick={handleAllowCookies}
        >
          {t('cookieConsent.buttonText')}
        </AllowCookieButton>
      </CookieConsentWrapper>
      :
      null
  );
}

export default CookieConsent;