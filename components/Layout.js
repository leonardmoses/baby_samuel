import Header from "./Header";

const Layout = ({children}) => {
    return ( 
        <div>
            <header/>
            { children }
        </div>
     );
}
 
export default Layout;