import React from "react";
import { useTranslation } from "react-i18next";
import { NotFoundText, NotFoundTitle, NotFoundWrapper } from "./StyledNotFoundPage";

export const NotFound: React.FC = () => {
  const { t } = useTranslation(['navigation']);

  return (
    <NotFoundWrapper>
      <NotFoundTitle>{t('notFound.title')}</NotFoundTitle>
      <NotFoundText>{t('notFound.text')}</NotFoundText>
    </NotFoundWrapper>
  );
};
