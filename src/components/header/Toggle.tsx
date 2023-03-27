import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ThemeIconWrapper,
  ThemeLabel,
  ToggleButton,
  ToggleInner,
  ToggleLabel,
  ToggleWrapper
} from '../styles/header/StyledToggle.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export type ToggleProps = {
  toggleTheme: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ toggleTheme }) => {
  const [active, setActive] = useState(false);
  const { t } = useTranslation(['header']);

  const handleClick = () => {
    const newActive = !active;
    setActive(newActive);
    toggleTheme(newActive);
  };

  return (
    <ToggleWrapper>
      <ToggleLabel>
        {t('themeToggler.label')}
        <ThemeIconWrapper>
          {active ?
            <FontAwesomeIcon color='#ffff00' icon={faSun} />
            :
            <FontAwesomeIcon color='#010727' icon={faMoon} />
          }
        </ThemeIconWrapper>
      </ToggleLabel>
      <ToggleInner>
        <ToggleButton active={active} onClick={handleClick}>
        </ToggleButton>
        <ThemeLabel>{active ? t('themeToggler.light') : t('themeToggler.dark')}</ThemeLabel>
      </ToggleInner>
    </ToggleWrapper>
  );
};

export default Toggle;
