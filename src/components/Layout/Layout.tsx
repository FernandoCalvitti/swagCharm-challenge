import React from "react";
import Categories from "../Categories";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Categories />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
