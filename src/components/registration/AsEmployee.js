import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {OptionsFetch} from "./OptionsFetch";
import {OptionsList} from "./OptionsList";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {useAuth} from "../../hooks/auth.hook";
import {Loader} from "../utils/Loader";

export const AsEmployee = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const {ready} = useAuth()

    const [confirm, setConfirm] = useState({
            confirm_password:''
    })


    const [data, setData] = useState({
        is_company:false,
        first_name: '',
        last_name:'',
        phone_number:'',
        username:'',
        birthday:'',
        city:'',
        upload_cv:null,
        upload_certificate:null,
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
                            <label className='input-label'>First Name</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="first_name"
                                type="text"
                                required
                                name="first_name"
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
                            <label className='input-label'>Upload CV</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="upload_cv"
                                type="text"
                                name="upload_cv"
                                className="yellow-input"
                                //onChange={changeHandler}
                            />
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
                            <label className='input-label'>Last Name</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="last_name"
                                type="text"
                                name="last_name"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>Date of birth</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="birthday"
                                type="date"
                                name="birthday"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>

                            <label className='input-label'>City</label>
                            <div style={{marginTop:5}}>
                                <select className="browser-default select" onChange={changeHandler} name='city'>
                                    <OptionsFetch/>
                                </select>
                            </div>



                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>Upload Certificate</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="upload_cetrificate"
                                type="text"
                                name="upload_cetrificate"
                                className="yellow-input"
                                //onChange={changeHandler}
                            />
                        </div>

                        <div className='filter-input' style={{marginTop:30, width:'80%'}}>
                            <label className='input-label'>Confirm Password</label>
                            <input
                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                id="confirm_password"
                                type="password"
                                name="confirm_password"
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
