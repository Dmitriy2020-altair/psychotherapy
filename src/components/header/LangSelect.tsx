import i18next from 'i18next';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LanguageOption,
  LanguageSelect,
  LanguageSelectContainer,
  LanguageSelectLabel,
  LanguageSelectLabelWrapper,
} from '../styles/header/StyledLangSelect.styled';
import Flags from 'country-flag-icons/react/3x2'

const LangSelect: React.FC = () => {
  const { t } = useTranslation(['header']);
  const [selectedLanguage, setSelectedLanguage] = useState('ua');

  const isoCountryCode = useMemo(() => {
    if (selectedLanguage === 'en') {
      return 'GB'
    }
    return selectedLanguage.toUpperCase()
  }, [selectedLanguage]);

  const Flag = Flags[isoCountryCode];

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang) {
      setSelectedLanguage(storedLang);
    }
  }, [])

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    i18next.changeLanguage(newLanguage)
    setSelectedLanguage(newLanguage);
  };

  return (
    <LanguageSelectContainer>
      <LanguageSelectLabelWrapper>
        <LanguageSelectLabel htmlFor="language-select">{t('langOptions.label')}</LanguageSelectLabel>
        <Flag width={20} />
      </LanguageSelectLabelWrapper>
      <LanguageSelect value={selectedLanguage} onChange={handleChange} id="language-select">
        <LanguageOption value="en">{t('langOptions.english')}</LanguageOption>
        <LanguageOption value="ua">{t('langOptions.ukrainian')}</LanguageOption>
      </LanguageSelect>
    </LanguageSelectContainer>
  );
};

export default LangSelect