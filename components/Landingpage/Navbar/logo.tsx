import Image from "next/image";
import { FunctionComponent } from "react";

import logo from '../../../public/logo.svg'

interface LogoProps {

}

const Logo: FunctionComponent<LogoProps> = (props) => {
  return (
    <Image src={logo} width={70} alt={"vodnik logo"} />
  );
};

export default Logo;
