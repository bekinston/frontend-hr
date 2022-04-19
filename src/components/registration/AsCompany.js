import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {OptionsFetch} from "./OptionsFetch";
import {OptionsList} from "./OptionsList";
import {useNavigate} from "react-router-dom";
import {Loader} from "../utils/Loader";
import {AuthContext} from "../../context/AuthContext";
import {useAuth} from "../../hooks/auth.hook";

export const AsCompany = () => {
    const navigate = useNavigate();
    const {token, login, logout, ready} = useAuth();
    const auth = useContext(AuthContext);


    const [confirm, setConfirm] = useState({
        confirm_password:''
    })

    const [cities, setCities] = useState();

    const [data, setData] = useState({
        is_company:true,
        company_id: '',
        company_name:'',
        phone_number:'',
        username:'',
        city:'',
        address:'',
        password:'',
    })

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value})
    }

    const confirmHandler = event => {
        setConfirm({ ...confirm, [event.target.name]: event.target.value})
    }


    const Login = async() => {
        axios.post("http://hr-backend.jcloud.kz/auth/", {username: data.username, password: data.password})
            .then((response) => {
                console.log(response.data);
                auth.login(response.data.token);
                navigate('/profile');
            }, (error) => {
                console.log(error)
            })
    }

    const Register = async() => {
        if(data.password === confirm.confirm_password){
            await axios.post("http://hr-backend.jcloud.kz/registration/", {...data})
                .then(async (response) => {
                    console.log(response)
                    if(!ready){
                        return <Loader/>
                    }
                    await Login();
                }, (error) => {
                    if(error.response){
                        console.log(error.response.data);
                    }
                })
        }else{
        }
    }


    return(
        <>
            <div>
                <div style={{display:'flex', marginLeft:20, marginRight:20, width:800, justifyContent:'space-between'}}>
                    <div>
                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>Company ID</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="company_id"
                                type="text"
                                name="company_id"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>Number</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="phone_number"
                                type="text"
                                name="phone_number"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>City</label>
                            <div style={{marginTop:20}}>
                                <select
                                        className="browser-default select" onChange={changeHandler} name='city'>
                                    <OptionsFetch/>
                                </select>
                            </div>
                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>Password</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="password"
                                type="password"
                                name="password"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>Company Name</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="company_name"
                                type="text"
                                name="company_name"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>E-mail</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="username"
                                type="text"
                                name="username"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>

                            <label className='input-label'>Address</label>
                            <div style={{marginTop:10}}>
                                <input
                                    style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                    id="address"
                                    type="text"
                                    name="address"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                            </div>



                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>Confirm Password</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="confirm_password"
                                type="password"
                                name="confirm_password"
                                className="yellow-input"
                                onChange={confirmHandler}
                            />
                        </div>
                        <div className='right' style={{display:'flex',marginTop:60, marginBottom:50, justifyContent:'flex-end', width:'85%'}}>
                            <button className='button-filled-blue' onClick={Register}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
