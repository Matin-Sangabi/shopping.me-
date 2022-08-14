import { Fragment } from "react";
import Navigation from "../components/navigation/navigation";


const Layout = ({children}) => {
    return ( 
        <Fragment>
            <Navigation/>
            <div className="container mx-auto max-w-screen-xl">
                {children}
            </div>
        </Fragment>
     );
}
 
export default Layout;