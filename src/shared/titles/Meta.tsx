import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

type Props = {
  title: string;
  description?: string;
};

export const MetaTitle: React.FC<Props> = ({ title, description = '' }) => {

  return (
    < HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta name='robots' content='index,follow' />
      </Helmet>
    </ HelmetProvider>
  )
};

export default MetaTitle;
