import {NavLink, useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";

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
            <div className={transparent === true ? 'row navbar' : 'row navbar-filled'}>
                <div className="col s12">
                    <div>
                        <ul className="right">
                            <li className="navli"><NavLink to="/"><span>Home</span></NavLink></li>
                            <li className="navli"><NavLink to="/about"><span>About</span></NavLink></li>
                            <li className="navli" style={{marginRight:100}}><NavLink to="/register"><span>Register</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
