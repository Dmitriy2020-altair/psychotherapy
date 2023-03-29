import React from "react";
import { useTranslation } from "react-i18next";
import MetaTitle from "src/shared/titles/Meta";
import { Avatar, AvatarWarpper, MainPageWrapper, QuoteBlock, QuoteBlockWrapper } from "../styles/home/StyledMainBlock";

const MainBlock: React.FC = () => {
  const { t } = useTranslation(['home'])
  const description = t('pageMetaData.description');
  const title = `${t('navigation:home')} | ${t('pageMetaData.fullName')}`

  return (
    <MainPageWrapper>
      <QuoteBlockWrapper>
        <MetaTitle
          title={title}
          description={description}
        />
        <QuoteBlock  >
          {t('quote')}
        </QuoteBlock>
        < AvatarWarpper>
          <Avatar alt="Yulia's picture" src="/images/yulia.jpg" />
        </AvatarWarpper>
      </QuoteBlockWrapper >
    </MainPageWrapper>
  )
}

export default MainBlock;