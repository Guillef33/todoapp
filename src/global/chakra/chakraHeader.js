import React, { useState } from "react";

import NavBarContainer from "./NavBarContainer";
import Logo from "../../assets/favicon.ico";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
export default NavBar;
