import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './header/header.component';
import Footer from './footer/footer.component';
import Grid from './grid/grid.component';
import GlobalStyle from '../styles/global';

import {
  LayoutContainer,
  PageContent,
} from './layout.styled';

export interface LayoutProps {
  children: ReactNode,
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <LayoutContainer>
      <Head>
        <title>Porkpress Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Header />
      <PageContent>
        { props.children }
      </PageContent>
      <Footer />
    </LayoutContainer>
  );
}