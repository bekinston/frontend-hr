import React, {useEffect, useState} from "react";
import axios from "axios";
import {OptionsFetch} from "./OptionsFetch";
import {OptionsList} from "./OptionsList";

export const AsEmployee = () => {

    const [confirm, setConfirm] = useState({
            confirm_password:''
    })

    const [cities, setCities] = useState();

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
            }, (error) => {
                console.log(error)
            })
    }


    return(
        <>
            <div>
                <form >
                <div className = 'col s6 left'>

                        <input name='first_name' onChange={changeHandler} placeholder='имя'/>
                        <input name='phone_number'onChange={changeHandler} placeholder='номер' required/>
                        <input name='username'onChange={changeHandler} placeholder='имаил' required/>
                        <input name='upload_cv'onChange={changeHandler} placeholder='этого нет' required/>
                        <input name='password'onChange={changeHandler} placeholder='пароль' required/>

                </div>

                <div className = 'col s6 right'>

                        <input name='last_name'onChange={changeHandler} placeholder='фамилия' required/>
                        <input name='birthday'onChange={changeHandler} type='date' required/>
                        <select className="browser-default" onChange={changeHandler} name='city'>
                            <OptionsFetch/>
                        </select>
                        <input name='upload_cetrificate'onChange={changeHandler} required/>
                        <input name='confirm_password'onChange={confirmHandler} placeholder='пароль' required/>


                </div>
            </form>

                <div className='center'>
                    <button style={{marginTop:20}} className='button-filled-blue' onClick={Register}>Confirm</button>
                </div>
            </div>
        </>
    )
}
