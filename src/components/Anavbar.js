import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export const Anavbar = () => {
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();


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
