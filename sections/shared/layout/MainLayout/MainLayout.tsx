import { FC, ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className="wrapper">{children}</div>
    <Footer />
  </>
);

export default MainLayout;
