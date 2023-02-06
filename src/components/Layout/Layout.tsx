import React from "react";
import Categories from "../Categories";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>layout</h1>
      <Header />
      <Categories />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
