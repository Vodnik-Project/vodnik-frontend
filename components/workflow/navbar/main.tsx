import { FunctionComponent } from "react";
import Mode from "./mode";
import Logo from "../../Landingpage/navbar/logo";
import Search from "./search";
import User from "./user";
import Title from "./title";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div>
      <div>
        <Logo />
        <Title />
        <Search />
      </div>
      <div>
        <Mode />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
