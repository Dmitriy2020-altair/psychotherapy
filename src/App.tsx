import React, { useState } from 'react';
import GlobalStyels from './features/styles/Global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './features/styles/Theme.styled';
import Header from './features/header/Header';
import ScrollToTopButton from './features/scrollToTopButton/ScrollToTopButton';
import Navigation from './features/navigation/Navigation';
// import { Route, Routes } from 'react-router-dom';
// import MainQuoteBlock from './components/home/MainQuoteBlock';
import AppRoutes from './routes';

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyels />
      <Header toggleTheme={toggleTheme} />
      <Navigation />
      {/* <Routes>
        <Route path="/" element={<MainQuoteBlock />} />
      </Routes> */}
      <AppRoutes />
      <ScrollToTopButton />
    </ThemeProvider>
  )
}