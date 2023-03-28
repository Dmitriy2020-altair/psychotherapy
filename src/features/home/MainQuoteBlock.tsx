import React from "react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarWarpper, QuoteBlock, QuoteBlockWrapper } from "../styles/home/StyledQuoteBlock";

const MainQuoteBlock: React.FC = () => {
  const { t } = useTranslation(['home'])

  return (
    <QuoteBlockWrapper>
      <QuoteBlock  >
        {t('quote')}
      </QuoteBlock>
      < AvatarWarpper>
        <Avatar alt="Yulia's picture" src="/images/yulia.jpg" />
      </AvatarWarpper>
    </QuoteBlockWrapper>
  )
}

export default MainQuoteBlock;