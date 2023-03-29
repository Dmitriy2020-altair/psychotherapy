import React from 'react';
import { ErrorHeading, ErrorMessage, ErrorPageContainer } from './StyledErrorPage';

const ErrorPage: React.FC = () => {
  return (
    <ErrorPageContainer>
      <ErrorHeading>Oops, something went wrong!</ErrorHeading>
      <ErrorMessage>Please refresh the page or try again later.</ErrorMessage>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
