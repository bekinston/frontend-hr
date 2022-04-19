import {NavLink} from "react-router-dom";


export const Anavbar = () => {


    return(
        <>
            <div className='navigation-filled'>
                <ul>
                    <li><NavLink to="/" style={{ textDecoration: 'none' }}><span>Home</span></NavLink></li>
                    <li><NavLink to="/about" style={{ textDecoration: 'none' }}><span>About</span></NavLink></li>
                    <li><NavLink to="/tests" style={{ textDecoration: 'none' }}><span>Tests</span></NavLink></li>
                    <li><NavLink to="/vacancies" style={{ textDecoration: 'none' }}><span>Vacancies</span></NavLink></li>
                    <li><NavLink to={'/profile'} style={{ textDecoration: 'none' }}><span>Profile</span></NavLink></li>
                </ul>
            </div>
        </>

    )
}
