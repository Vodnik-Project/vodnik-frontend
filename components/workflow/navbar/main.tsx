import { FunctionComponent } from "react";
import Mode from "./mode";
import Logo from "./logo";
import Search from "./search";
import User from "./user";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return <div>
        <Logo />
        <Search />
        <Mode />
        <User />
    </div>;
}
 
export default Navbar;