import React from 'react'
import NavBar from '../Components/Common/Navbar/NavBar';
const Layout = (props) => {
    return ( 
        <>
        
        <NavBar/>
        {props.children}

        <footer>
            this is a footer
        </footer>
        </>
     );
}
 
export default Layout;