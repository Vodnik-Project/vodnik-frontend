import { FunctionComponent } from "react";
import style from './navbar.module.css'
import Logo from "./logo";
import Title from "./title";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className={style.container}>
      <Logo />
      <Title />
    </div>
  );
};

export default Navbar;
