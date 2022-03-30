import {NavLink} from 'react-router-dom'
import {useState} from "react";

export const Navbar = () => {
    const [transparent, setTransparent] = useState(true);




    return(
        <>
            <div className={transparent === true ? 'row navbar' : 'row navbar-filled'}>
                <div className="col s12">
                    <div>
                        <ul className="right">
                            <li className="navli"><NavLink to="/"><span onClick={()=>setTransparent(true)}>Home</span></NavLink></li>
                            <li className="navli"><NavLink to="/about"><span onClick={()=>setTransparent(false)}>About</span></NavLink></li>
                            <li className="navli" style={{marginRight:100}}><NavLink to="/register"><span onClick={()=>setTransparent(false)}>Register</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
