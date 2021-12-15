import Header from "./Header.js";

const Layout = ({children}) => {
    return ( 
        <div>
            <Header/>
            { children }
        </div>
     );
}
 
export default Layout;