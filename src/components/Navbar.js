import {NavLink, useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";
import logo from '../assets/logo.svg';
import logodark from '../assets/logodark.svg'


export const Navbar = () => {
    const [transparent, setTransparent] = useState(true);
    const location = useLocation();

    const changeColor = () => {
       if(location.pathname === '/'){
           setTransparent(true);
       }
       if(location.pathname === '/about'){
           setTransparent(false);
       }
       if(location.pathname === '/register'){
           setTransparent(false);
       }
    }

    useEffect(() => {
        console.log(location.pathname);
        changeColor();
    }, [location]);

    return(
        <>
            <div style={{display:'flex', justifyContent:'space-between'}} className={transparent === true ? 'navigation' : 'navigation-filled'}>

                {
                    transparent === true ? (<img src={logo} style={{position:'absolute', left:40, top:10, height:30}}/>) : (<img src={logodark} style={{position:'absolute', left:40, top:10, height:30}}/>)
                 }
                <ul>
                    <li><NavLink to="/" style={{ textDecoration: 'none' }}><span>Home</span></NavLink></li>
                    <li><NavLink to="/about" style={{ textDecoration: 'none' }}><span>About</span></NavLink></li>
                    <li style={{marginRight:40}}><NavLink to="/register" style={{ textDecoration: 'none' }}><span>Register</span></NavLink></li>
                </ul>
            </div>
        </>
    )
}
