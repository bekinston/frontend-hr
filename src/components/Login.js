import React, {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../hooks/auth.hook";
import {Loader} from "./utils/Loader";



export const Login = () => {
    const auth = useContext(AuthContext);
    const {token, login, logout, ready} = useAuth()


    const [data, setData] = useState({
        username:'',
        password:'',
    })

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value})
    }

    const navigate = useNavigate();

    const Login = async() => {
        await axios.post("http://hr-backend.jcloud.kz/auth/", {...data})
            .then((response) => {
                console.log(response.data.token);
                auth.login(response.data.token);
                if(!ready){
                   return <Loader/>
                }
                navigate('/profile');
            }, (error) => {
                console.log(error)
            })
    }



    return(
        <>
            <div className="row">
                <div className="col s12 mainwindow">
                        <div className="loginwindow col l4 m8 s12 offset-l2">
                            <h3 className="loginheader">Lorem ipsum, or lipsum as it is sometimes know! </h3>
                            <input className="box-input" placeholder="Login" onChange={changeHandler} name='username'/>
                            <input className="box-input" placeholder="Password" onChange={changeHandler} name="password"/>
                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in checkbox-blue-grey"/>
                                    <span className="whitespan">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </span>
                                </label>
                            </p>
                            <div className = "mainwindowaction">
                                <div className="left">

                                    <Link to='/profile'><button className="button-filled" onClick={Login}>Log In</button></Link>
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
