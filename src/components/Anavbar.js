import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {Loader} from "./utils/Loader";
import {useAuth} from "../hooks/auth.hook";


export const Anavbar = () => {
    const {token, login, logout, ready} = useAuth()
    const auth = useContext(AuthContext);
    const history = useNavigate();

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        window.location.reload(false);
}

    return(
        <>
            <div className="row navbar">
                <div className="col s12">
                    <div>
                        <ul className="right">
                            <p>еще в работе</p>
                            <button onClick={logoutHandler}>logout</button>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
