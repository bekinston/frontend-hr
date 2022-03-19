export const Login = () => {
    return(
        <>
            <div className="row">
                <div className="col s12 mainwindow">
                        <div className="loginwindow col l4 m8 s12 offset-l2">
                            <h3 className="loginheader">Lorem ipsum, or lipsum as it is sometimes know! </h3>
                            <input className="box-input" placeholder="Login"/>
                            <input className="box-input" placeholder="Password" name="password" type="password"/>
                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in checkbox-blue-grey"/>
                                    <span className="whitespan">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </span>
                                </label>
                            </p>
                            <div className = "mainwindowaction">
                                <div className="left">
                                    <button className="button-filled">Log In</button>
                                </div>
                                <div className="right">
                                    <button className="button-outlined">Register</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>



        </>
    )
}