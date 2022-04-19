import React, {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {Link, NavLink} from "react-router-dom";
import {useAuth} from "../hooks/auth.hook";
import {Loader} from "./utils/Loader";
import {Bb} from "./utils/Bb";

export const Login = () => {
    const auth = useContext(AuthContext);
    const {token, login, logout, ready} = useAuth();
    const isAuthenticated = !!token;

    const [data, setData] = useState({
        username:'',
        password:'',
    })
    const [disabled, setDisabled] = useState(false);

    const changeDisable = () => {
        if(disabled === false){
            setDisabled(true)
        }else{
            setDisabled(false);
        }
        console.log(disabled);
    }

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value})
    }

    const Login = async() => {
        await axios.post("http://hr-backend.jcloud.kz/auth/", {...data})
            .then((response) => {
                console.log(response.data.token);
                auth.login(response.data.token);
                if(!ready){
                   return <Loader/>
                }
                window.location.reload(false);
            }, (error) => {
                console.log(error)
            })
    }

    return(
        <>
            <div style={{background:'linear-gradient(90deg, #174FF1 3.32%, #6ACEE2 100%)', height:500}}>
                <div style={{ display:'flex'}}>
                    <div className='login'>
                        <h2 style={{zIndex:10}}>Make your dream come true with ENJOIN!</h2>
                        <div style={{width:400}}>
                            <input onChange={changeHandler} value={data.username} name='username' placeholder='Login' style={{width:'95%', marginBottom:20}}/>
                            <input onChange={changeHandler} value={data.password} name='password' placeholder='Password' type='password' style={{width:'95%', marginBottom:20}}/>
                            <input value='false' style={{marginRight:5}} defaultChecked={false} onChange={changeDisable} type='checkbox'/><span style={{alignSelf:'center'}}>By clicking Log In, you agree to our Terms, Data Policy and Cookies Policy.</span>
                            <div style={{display:'flex', justifyContent:'space-between', marginTop:30, width:'99%'}}>
                                <button disabled={!disabled} onClick={Login} style={{fontWeight:'lighter'}} className='button-filled-white'>Log In</button>
                                <NavLink to={'/register'}><button style={{fontWeight:'lighter'}} className='button-outlined-white'>Register</button></NavLink>
                            </div>
                        </div>
                    </div>
                    <Bb/>
                </div>
            </div>
        </>
    )
}

