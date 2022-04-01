import React from 'react'
import {Login} from "../components/Login";
import homeimg1 from "../assets/home/homeimg1.png"
import {HotListingJobFetch} from "../components/home-content-blocks/HotListingJobFetch";
import {useAuth} from "../hooks/auth.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/utils/Loader";

export const Home = () => {
    const {token, login, logout, ready} = useAuth()
    const isAuthenticated = !!token

    if (!ready){
        return <Loader/>
    }



    return(
        <>

                <div>
                    {!isAuthenticated && <Login/> }
                    <div className="container">
                        <div className="row">

                            <div className="col l12" style={{marginTop:50, marginBottom:50}}>
                                <div className="col l6">
                                    <img src={homeimg1} className="responsive-img"/>
                                </div>
                                <div className="col l6" style={{marginTop:90}}>
                                    <h3 className="homeheader" style={{marginBottom:20}}>Make a great Career</h3>
                                    <p className="hometext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                    <button className="button-filled-blue">Know more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        </>
    )
}
