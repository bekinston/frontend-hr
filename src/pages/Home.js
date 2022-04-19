import React from 'react'
import {Login} from "../components/Login";
import {useAuth} from "../hooks/auth.hook";
import {Loader} from "../components/utils/Loader";
import home from '../assets/home/homeimg.png';
import hot from '../assets/home/hothot.png';
import home1 from '../assets/home/homeimg1.png';
import home2 from '../assets/home/homeimg2.png';
import home3 from '../assets/home/homeimg3.png';
import tds from '../assets/partners/tds.png';
import airastana from '../assets/partners/airastana.png';
import sdu from '../assets/partners/sdu.png';
import {HotListingJobFetch} from "../components/home-content-blocks/HotListingJobFetch";
import { useLocation, NavLink } from "react-router-dom";


export const Home = () => {
    const {token, login, logout, ready} = useAuth()
    const isAuthenticated = !!token

    if (!ready){
        return <Loader/>
    }

    const Redirect = (location)=>{

    }


    return(
        <div>
            {!isAuthenticated && <Login/>}
            <div>

                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingRight:'15%', paddingLeft:'15%', marginTop:80}}>
                    <div style={{width:300}}>
                        <img src={home} style={{height:300}}/>
                    </div>
                    <div style={{width:450, marginLeft:60}}>
                        <h2 style={{color:'#03157A'}}>Make a great Career</h2>
                        <p style={{marginTop:20}}>Enjoin community and start your successful career with us today! Here you will find experienced  friendly atmosphere and develop yourself!</p>
                        <button onClick={()=>{}} style={{marginTop:20}} className='button-filled-blue'>Know more</button>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingRight:'10%', paddingLeft:'10%', marginTop:140}}>
                    <div>
                        <h2 style={{color:'#03157A'}}>Hot listing Job</h2>
                        <HotListingJobFetch />
                        <button onClick={()=>{}} style={{marginTop:20}} className='button-filled-blue'>View more</button>
                    </div>
                    <div>
                        <img src={hot} style={{height:400}}/>
                    </div>
                </div>

                <div style={{marginBottom:200, marginTop:140}}>
                    <h2 style={{color:'#03157A', width:'100%', textAlign:'center'}}>Our Partners</h2>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingRight:'5%', paddingLeft:'5%', marginTop:20}}>
                        <img src={tds} style={{width:100}}/>
                        <img src={airastana} style={{width:200}}/>
                        <img src={sdu} style={{width:200}}/>
                        <img src={tds} style={{width:100}}/>
                        <img src={airastana} style={{width:200}}/>
                        <img src={sdu} style={{width:200}}/>
                    </div>
                </div>

                <div style={{marginBottom:100, marginTop:100}}>
                    <h2 style={{paddingLeft:'10%', paddingRight:'10%' ,color:'#03157A'}}>For Company</h2>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingRight:'5%', paddingLeft:'5%'}}>

                        <div style={{padding:20}}>
                            <img src={home1} style={{height:300}}/>
                            <div style={{marginLeft:45}}>
                                <p style={{fontSize:22, color:'#03157A', marginTop:20}}>Сonduct the initial selection of employees online</p>
                                <button onClick={()=>{}} style={{marginTop:20}} className='button-filled-blue'>Create Test</button>
                            </div>

                        </div>
                        <div style={{padding:20}}>
                            <img src={home2} style={{height:300}}/>
                            <p style={{fontSize:22, color:'#03157A', marginTop:20}}>Convenient search for the employees you need </p>
                            <button style={{marginTop:20}}  className='button-filled-blue'>Find Empoyee</button>
                        </div>
                        <div style={{padding:20}}>
                            <img src={home3} style={{height:300, marginTop:20}}/>
                            <p style={{fontSize:22, color:'#03157A'}}>Create and promote your vacancies for fast recruitment</p>
                            <button onClick={()=>{}} style={{marginTop:20}}  className='button-filled-blue'>Upload vacancy</button>
                        </div>

                    </div>
                </div>

                <div style={{background:`linear-gradient(90deg, #174FF1 3.32%, #6ACEE2 100%)`, display:'flex', alignItems:'center', paddingRight:'20%', paddingLeft:'20%'}}>
                    <div style={{marginRight:60, marginTop:100, marginBottom:100}}>
                        <h2 style={{color:'white'}}>Get to start your JobBook right now!</h2>
                        <p style={{color:'white'}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div>
                        <button onClick={()=>{}} className={'button-filled-white'}>start</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
