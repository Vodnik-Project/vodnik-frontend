import { FunctionComponent } from "react";

import style from "./landingPage.module.css";
import Container from "./Navbar/container";




interface laningPageProps {}

const laningPage: FunctionComponent<laningPageProps> = () => {
  return (
    <div className={style.wrapper}>
        <Container />
    </div>
  );
};

export default laningPage;
