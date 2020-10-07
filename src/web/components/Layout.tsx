import React, { ReactNode, FC } from 'react';

import TopBanner, {
  TopBannerProps,
} from '@skatteetaten/frontend-components/TopBanner';
import FooterContent from '@skatteetaten/frontend-components/FooterContent';

import './Layout.css';
import Typography from '@skatteetaten/frontend-components/Typography';

interface LayoutProps {
  title: TopBannerProps['title'];
  footer: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ title, footer, children }) => (
  <div className="layout">
    <TopBanner
      external
      homeText="Til skatteetaten.no"
      homeUrl="https://www.skatteetaten.no"
      title={title}
    />
    <div className="layout-content">
      <Typography>{children}</Typography>
    </div>
    <FooterContent>{footer}</FooterContent>
  </div>
);
