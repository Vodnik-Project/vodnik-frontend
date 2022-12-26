import Image from "next/image";
import { FunctionComponent } from "react";

import user from '../../../public/photo.webp'

interface UserProps {
    
}
 
const User: FunctionComponent<UserProps> = () => {
    return <div>
        <Image src={user}  alt={"user-photo"} width={60} />
    </div>;
}
 
export default User;