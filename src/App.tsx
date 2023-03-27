import React, { useState } from 'react';
import GlobalStyels from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/styles/Theme.styled';
import Header from './components/header/Header';
import MainQuoteBlock from './components/home/QuoteBlock';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyels />
      <Header toggleTheme={toggleTheme} />
      <MainQuoteBlock blue_gradient={theme.colors.blue_gradient} />
      <ScrollToTopButton />
    </ThemeProvider>
  )
}