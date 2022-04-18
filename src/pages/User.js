import React from 'react'
import clock from '../assets/profile/clock.png'
import policy from '../assets/profile/policy.png'
import trophy from '../assets/profile/trophy.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {BiographyFetch} from "../components/profile/BiographyFetch";

export const User = () => {
    return(
        <>
            <div className='card-back'>
                <p style={{color:'transparent'}}>123</p>
                <div className='card'>

                    <div style={{display:'flex', padding:30}}>
                        <div>
                            <img style={{width: 200, height:200, background:'black', borderRadius:100}}/>
                        </div>


                        <div style={{marginLeft:40, width:'100%'}}>

                            <h2>Megan Markle</h2>

                            <p style={{marginTop: 10, color:'grey'}}>Almaty, Kazakhstan</p>

                            <p style={{width:'140%', marginTop:20, color:'grey'}}>Creativity has been an integral part of my life
                                for as long as I can remember even as a child. I have always loved colour
                                in whatever medium I have chosen to work  MORE</p>

                            <div style={{width:'130%', display:'flex', justifyContent:'space-between', marginTop:20}}>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <img src={clock} style={{width:30, height:30}}/>
                                    <div style={{marginLeft:10}}>
                                        <h5>4+ Years Job</h5>
                                        <p style={{color:'grey', fontSize:12}}>Experienced</p>
                                    </div>
                                </div>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <img src={trophy} style={{width:30, height:30}}/>
                                    <div style={{marginLeft:10}}>
                                        <h5>6 Certificates</h5>
                                        <p style={{color:'grey', fontSize:12}}>Achieved</p>
                                    </div>
                                </div>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <img src={clock} style={{width:30, height:30}}/>
                                    <div style={{marginLeft:10}}>
                                        <h5>1 Internship</h5>
                                        <p style={{color:'grey', fontSize:12}}>Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{display:'flex', height:50, width:'100%', placeContent:'flex-end'}}>
                            <button style={{marginRight:20, width:170}} className='button-filled-blue'>Edit profile</button>
                            <button style={{width:170}} className='button-filled-blue'>Public view</button>
                        </div>
                    </div>

                    <div style={{display:'flex'}}>


                        <div style={{width:'70%', marginLeft:30, marginTop:40}}>
                            <Tabs selectedTabClassName="bg-white" TabClassName='bg-black'>
                                <TabList style={{marginBottom:40, borderWidth:1, borderColor:'#0016DC'}}>
                                    <Tab focus={false} style={{paddingLeft:30, paddingRight:30}}><p>Experience</p></Tab>
                                    <Tab focus={false} style={{paddingLeft:30, paddingRight:30}}><p>Skills</p></Tab>
                                    <Tab focus={false} style={{paddingLeft:30, paddingRight:30}}><p>Biography</p></Tab>
                                    <Tab focus={false} style={{paddingLeft:30, paddingRight:30}}><p>Passed Tests</p></Tab>
                                </TabList>

                                <TabPanel>
                                    <div className='profile-card'>
                                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <h2>Job Experience</h2>
                                            <button className='button-filled-blue'>Edit</button>
                                        </div>
                                        <div style={{marginTop:40}}>

                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className='profile-card'>
                                        Skills
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className='profile-card'>
                                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <h2>Biography</h2>
                                            <button className='button-filled-blue'>Edit</button>
                                        </div>
                                        <div style={{marginTop:40}}>
                                            <BiographyFetch/>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className='profile-card'>
                                        Passed Tests
                                    </div>
                                </TabPanel>
                            </Tabs>

                            <button style={{marginBottom:40, marginTop:30}} className='button-filled-blue'>logout</button>
                        </div>

                        <div style={{width:"30%", marginLeft:10, marginTop:50, alignContent:'center'}}>
                            <h3 style={{width:'100%', textAlign:'center'}}>SIMILAR PROFILES</h3>
                        </div>
                    </div>






                </div>
                <p style={{color:'transparent'}}>123</p>
            </div>
        </>
    )
}
