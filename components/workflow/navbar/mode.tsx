import { FunctionComponent } from "react";

import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
interface ModeProps {
    
}
 
const Mode: FunctionComponent<ModeProps> = () => {
    return <div>
        <BsMoonStarsFill />
        <BsFillSunFill />
    </div>;
}
 
export default Mode;