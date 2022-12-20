import { FunctionComponent } from "react";

import style from './navbar.module.css'
interface TitleProps {
    
}
 
const Title: FunctionComponent<TitleProps> = () => {
    return <h1 className={style.title}>Vodnik</h1>;
}
 
export default Title;