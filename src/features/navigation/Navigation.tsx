import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
import ROUTES from "src/routes/constants";
import { Nav, NavWrapper } from "../styles/navigation/StyledNavigation";


const Navigation: React.FC = () => {
  const { t } = useTranslation(['navigation']);
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>('home');

  useEffect(() => {
    const pathname = location.pathname.slice(1);
    setActivePage(pathname || 'home');
  }, [location]);

  return (
    <NavWrapper>
      <Nav>
        <ul>
          <li className={activePage === 'home' ? 'active' : ''}>
            <Link to={ROUTES.home}>{t('home')}</Link>
          </li>
          <li className={activePage === 'about' ? 'active' : ''}>
            <Link to={ROUTES.about}>{t('about')}</Link>
          </li>
          <li className={activePage === 'contacts' ? 'active' : ''}>
            <Link to={ROUTES.contacts}>{t('contacts')}</Link>
          </li>
        </ul>
      </Nav>
    </NavWrapper>
  );
}

export default Navigation;