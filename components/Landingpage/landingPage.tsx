import Image from "next/image";
import { FunctionComponent } from "react";

import style from "./landingPage.module.css";

import Main from "./main/main_section";
import Navbar from "./navbar/navbar";
import AdvantageMain from "./main/advantage_section/main";

import shadow from '../../public/shadow.svg'

interface laningPageProps {}

const laningPage: FunctionComponent<laningPageProps> = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.navbarWrapper}>
        <Navbar />
        <Main />
        <h1 className={style.text}>All you need to <br /> create & track and share tasks</h1>
        <AdvantageMain />
      </div>
    </div>
  );
};

export default laningPage;
