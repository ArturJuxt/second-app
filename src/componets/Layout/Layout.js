import React from "react";
import './Layout.css';
import Aux from "../../hoc/Aux";

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, sideDrawer, Backdrop</div>
      <main className='content'>{props.children}</main>
    </Aux>
  );
};

export default Layout;
