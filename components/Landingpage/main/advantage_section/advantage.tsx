import { FunctionComponent } from "react";
import Image from "next/image";

import style from './style.module.css'

import parse from 'html-react-parser'

interface AdvantageProps {
    src: string,
    header: string,
    text: string,
}

const Advantage: FunctionComponent<AdvantageProps> = ({src, header, text}) => {
  return (
    <div className={style.advantageContainer}>
      <Image src={src} alt='svgImage' className={style.image}/>
      <h1 className={style.header}>{header}</h1>
      <p className={style.text}>{parse(text)}</p>
    </div>
  );
};

export default Advantage;
