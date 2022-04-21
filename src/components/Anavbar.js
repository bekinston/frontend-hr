import {NavLink} from "react-router-dom";
import logo from "../assets/logo.svg";
import logodark from "../assets/logodark.svg";


export const Anavbar = () => {


    return(
        <>
            <div className='navigation-filled'>
                <img src={logodark} style={{position:'absolute', left:40, top:10, height:30}}/>
                <ul>
                    <li><NavLink to="/" style={{ textDecoration: 'none' }}><span>Home</span></NavLink></li>
                    <li><NavLink to="/about" style={{ textDecoration: 'none' }}><span>About</span></NavLink></li>
                    <li><NavLink to="/vacancies" style={{ textDecoration: 'none' }}><span>Vacancies</span></NavLink></li>
                    <li><NavLink to={'/profile'} style={{ textDecoration: 'none' }}><span>Profile</span></NavLink></li>
                </ul>
            </div>
        </>

    )
}
