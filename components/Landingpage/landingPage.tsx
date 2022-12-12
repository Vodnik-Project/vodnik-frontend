import { FunctionComponent } from "react";

import style from "./landingPage.module.css";
import Main from "./main";
import Navbar from "./Navbar/navbar";

interface laningPageProps {}

const laningPage: FunctionComponent<laningPageProps> = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.navbarWrapper}>
        <Navbar />
      </div>
      <div className={style.navbarWrapper}>
        <Main />
      </div>
    </div>
  );
};

export default laningPage;
