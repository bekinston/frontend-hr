import {NavLink} from "react-router-dom";


export const Anavbar = () => {


    return(
        <>
            <div className='row navbar-filled-nav'>
                <div className="col s12">
                    <div>
                        <ul className="right">
                            <li className="navli"><NavLink to="/"><span>Home</span></NavLink></li>
                            <li className="navli"><NavLink to="/about"><span>About</span></NavLink></li>
                            <li className="navli"><NavLink to="/tests"><span>Tests</span></NavLink></li>
                            <li className="navli"><NavLink to="/vacancies"><span>Vacancies</span></NavLink></li>
                            <li className="navli" style={{marginRight:100}}><NavLink to={'/profile'}><span>Profile</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
