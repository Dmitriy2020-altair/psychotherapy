import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from '../pages';
import { Errors } from '../shared';
import ROUTES from './constants';


export default function AppRoutes() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Errors.Boundary>
        <Routes>
          <Route path={ROUTES.home} element={<Pages.Home />} />
          <Route path={ROUTES.about} element={<Pages.About />} />
          <Route path={ROUTES.contacts} element={<Pages.Contacts />} />
        </Routes >
      </Errors.Boundary >
    </Suspense >
  );
}
