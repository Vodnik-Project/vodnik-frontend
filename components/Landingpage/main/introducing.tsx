import Image from "next/image";
import { FunctionComponent } from "react";
import play from "../../../public/Play.svg";

import style from './main.module.css'

interface IntroducingButtonProps {}

const IntroducingButton: FunctionComponent<IntroducingButtonProps> = () => {
  return (
    <div className={style.introducing}>
      <Image src={play} alt={"play button"} width={62} />
      <h2 className={style.introducingText}>Introducing</h2>
    </div>
  );
};

export default IntroducingButton;
