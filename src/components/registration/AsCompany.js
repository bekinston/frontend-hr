import React, {useEffect, useState} from "react";
import axios from "axios";
import {OptionsFetch} from "./OptionsFetch";
import {OptionsList} from "./OptionsList";
import {useNavigate} from "react-router-dom";

export const AsCompany = () => {
    const navigate = useNavigate();

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

    const getCities = async() => {
        await axios.get("http://hr-backend.jcloud.kz/properties/cities/", )
            .then((response) => {
                setCities(response.data)
            }, (error) => {
                console.log(error)
            })
    }


    const Register = async() => {
        await axios.post("http://hr-backend.jcloud.kz/registration/", {...data})
            .then((response) => {
                console.log(response)
                navigate('/');
            }, (error) => {
                console.log(error)
            })
    }


    return(
        <>
            <div>
                <div className='col l4 m6 s12 left'>
                    <div style={{marginTop:30}}>
                        <label className='input-label'>Company ID</label>
                        <input
                            style={{marginTop:10}}
                            id="company_id"
                            type="text"
                            name="company_id"
                            className="yellow-input"
                            onChange={changeHandler}
                        />
                    </div>

                    <div style={{marginTop:30}}>
                        <label className='input-label'>Number</label>
                        <input
                            style={{marginTop:10}}
                            id="phone_number"
                            type="text"
                            name="phone_number"
                            className="yellow-input"
                            onChange={changeHandler}
                        />
                    </div>

                    <div style={{marginTop:35}}>
                        <label className='input-label'>City</label>
                        <div style={{marginTop:12}}>
                            <select className="browser-default select" onChange={changeHandler} name='city'>
                                <OptionsFetch/>
                            </select>
                        </div>
                    </div>


                    <div style={{marginTop:40}}>
                        <label className='input-label'>Password</label>
                        <input
                            style={{marginTop:10}}
                            id="password"
                            type="text"
                            name="password"
                            className="yellow-input"
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className = 'col l4 m6 s12 offset-l1 offset-m1'>
                    <div style={{marginTop:30}}>
                        <label className='input-label'>Company Name</label>
                        <input
                            style={{marginTop:10}}
                            id="last_name"
                            type="text"
                            name="last_name"
                            className="yellow-input"
                            onChange={changeHandler}
                        />
                    </div>

                    <div style={{marginTop:30}}>
                        <label className='input-label'>E-mail</label>
                        <input
                            style={{marginTop:10}}
                            id="username"
                            type="text"
                            name="username"
                            className="yellow-input"
                            onChange={changeHandler}
                        />
                    </div>

                    <div style={{marginTop:30}}>

                        <label className='input-label'>Address</label>
                        <div style={{marginTop:10}}>
                            <input
                                style={{marginTop:10}}
                                id="address"
                                type="text"
                                name="address"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                        </div>



                    </div>

                    <div style={{marginTop:30}}>
                        <label className='input-label'>Confirm Password</label>
                        <input
                            style={{marginTop:10}}
                            id="confirm_password"
                            type="text"
                            name="confirm_password"
                            className="yellow-input"
                            onChange={confirmHandler}
                        />
                    </div>
                    <div className='right' style={{marginTop:60, marginBottom:50}}>
                        <button className='button-filled-blue' onClick={Register}>Confirm</button>
                    </div>

                </div>
            </div>
        </>
    )
}
