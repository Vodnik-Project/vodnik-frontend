import Image from "next/image";
import { FunctionComponent } from "react";

import style from "./landingPage.module.css";
import Main from "./main/main_section";
import Navbar from "./Navbar/navbar";

import shadow from '../../public/shadow.svg'

interface laningPageProps {}

const laningPage: FunctionComponent<laningPageProps> = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.navbarWrapper}>
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default laningPage;
