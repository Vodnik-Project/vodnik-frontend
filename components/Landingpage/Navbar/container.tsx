import { FunctionComponent } from "react";
import style from './navbar.module.css'
import Logo from "./logo";
import Title from "./title";

interface ContainerProps {}

const Container: FunctionComponent<ContainerProps> = () => {
  return (
    <div className={style.container}>
      <Logo width={70} height={40} />
      <Title />
    </div>
  );
};

export default Container;
