import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import ROUTES from "src/routes/constants";
import { Nav } from "../styles/navigation/StyledNavigation";


const Navigation: React.FC = () => {
  const { t } = useTranslation(['navigation']);

  return (
      <Nav>
        <ul>
          <li>
            <Link to={ROUTES.home}>{t('home')}</Link>
          </li>
          <li>
            <Link to={ROUTES.about}>{t('about')}</Link>
          </li>
          <li>
            <Link to={ROUTES.contacts}>{t('contacts')}</Link>
          </li>
        </ul>
      </Nav>
  );
}

export default Navigation;