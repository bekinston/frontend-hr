import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return(
        <>
            <div className="row navbar">
                <div className="col s12">
                    <div>
                        <ul className="right">
                            <li className="navli"><NavLink to="/"><span className="navspan">Home</span></NavLink></li>
                            <li className="navli"><NavLink to="/about"><span className="navspan">About</span></NavLink></li>
                            <li className="navli"><NavLink to="/register"><span className="navspan">Register</span></NavLink></li>
                            <li className="navli" style={{marginRight:100}}><NavLink to="/login"><span className="navspan">Login</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}