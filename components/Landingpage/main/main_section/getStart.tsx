import { FunctionComponent } from "react";

import style from './main.module.css'

interface GetStartButttonProps {
    
}
 
const GetStartButtton: FunctionComponent<GetStartButttonProps> = () => {
    return <button className={style.getStartButton} type="button">Get Start</button>;
}
 
export default GetStartButtton;