import {NavLink} from 'react-router-dom'
import {useEffect, useState} from "react";

export const Navbar = () => {
    const[win, setWin] = useState('');
    const url = window.location.pathname;

    const [transparent, setTransparent] = useState(true);

    const Navback = () => {
        if(win === '/'){
            return setTransparent(true);
        }
        if(win === '/register'){
            return setTransparent(false);
        }
        if(win === '/about'){
            return setTransparent(false);
        }
    }

    useEffect(() => {
        Navback();
        setWin(url);
    });





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
