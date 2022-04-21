import React, {useCallback, useEffect, useState} from 'react'
import clock from '../assets/profile/clock.png'
import policy from '../assets/profile/policy.png'
import trophy from '../assets/profile/trophy.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {BiographyFetch} from "../components/profile/BiographyFetch";
import {useAuth} from "../hooks/auth.hook";
import axios from "axios";
import {ProfileCompany} from "../components/user/ProfileCompany";
import {ProfileUser} from "../components/user/ProfileUser";
import {useHttp} from "../hooks/http.hook";

export const User = () => {
    const accessTokenObj = JSON.parse(localStorage.getItem("userData"));
    const {loading, request} = useHttp();
    const [is_company, setIs_company] = useState(false);

    const fetch = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz/profile/info', 'GET', null, {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+ accessTokenObj.token
            })
            if(fetched.is_company === true){
                setIs_company(true)
            }
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetch();
    }, [fetch])

    if(loading){
        return(
            <>
                <div style={{height:1000, background:'white'}}>123</div>
            </>
            )
    }

    if(is_company && !loading){
        return(<>
            <ProfileCompany/>
        </>)
    }



    return(
        <>
            <ProfileUser/>
        </>
    )
}
