import React from "react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarWarpper, QuoteBlock, QuoteBlockWrapper } from "../styles/home/StyledQuoteBlock";

type MainQuoteBlockProps = {
  blue_gradient: string;
}

const MainQuoteBlock: React.FC<MainQuoteBlockProps> = ({ blue_gradient }) => {
  const { t } = useTranslation(['home'])

  return (
    <QuoteBlockWrapper>
      <QuoteBlock blue_gradient={blue_gradient} >
        {t('quote')}
      </QuoteBlock>
      < AvatarWarpper>
        <Avatar alt="Yulia's picture" src="/images/yulia.jpg" />
      </AvatarWarpper>
    </QuoteBlockWrapper>
  )
}

export default MainQuoteBlock;