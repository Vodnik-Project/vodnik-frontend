import { FunctionComponent } from "react";
import BrandSlogan from "./brandSlogan";
import GetStartButtton from "./getStart";
import IntroducingButton from "./introducing";

import style from './main.module.css'

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
  return (
    <div className={style.container}>
      <section className={style.section}>
        <div className={style.leftDiv}> 
            <BrandSlogan/>
            <div className={style.container2}>
              <GetStartButtton/>
              <IntroducingButton />
            </div>
        </div>
        <div className={style.rightDiv}></div>
      </section>
    </div>
  );
};

export default Main;
