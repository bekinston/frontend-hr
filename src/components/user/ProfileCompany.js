import React, {useContext, useEffect, useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import axios from "axios";
import {VacanciesBlockFetch} from "../home-content-blocks/VacanciesBlockFetch";
import {AuthContext} from "../../context/AuthContext";
import {NavLink} from "react-router-dom";


export const ProfileCompany = () => {
    const [info, setInfo] = useState();
    const accessTokenObj = JSON.parse(localStorage.getItem("userData"));
    const auth = useContext(AuthContext);
    const [condidates, setCondidates] = useState([]);
    const [id, setId] = useState();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ accessTokenObj.token
    }

    const getInfo = async() => {
        await axios.get(`http://hr-backend.jcloud.kz/profile/info/` , {
            headers : headers
        })
            .then(async function (response) {
                setId(response.data.id);
                console.log(response.data);
                await axios.get(`http://hr-backend.jcloud.kz/profile/${response.data.id}/profiles/` , {
                    headers : headers
                })
                    .then(async function (response) {
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                await axios.get(`http://hr-backend.jcloud.kz/profile/${response.data.id}/` , {
                    headers : headers
                })
                    .then(async function (response) {
                        console.log(response.data);
                        setInfo(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                await axios.get(`http://hr-backend.jcloud.kz/profile/${response.data.id}/candidates` , {
                    headers : headers
                })
                    .then(async function (response) {
                        console.log(response.data);
                        setCondidates(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getInfo()
    }, [])


    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
    }




    return (
        <>
            {info !== undefined &&
                <div className='card-back'>
                    <p style={{color: 'transparent'}}>123</p>
                    <div className='card'>

                        <div style={{display: 'flex', padding: 30}}>
                            <div>
                                <img style={{width: 200, height: 200, background: 'black', borderRadius: 100}}/>
                            </div>


                            <div style={{marginLeft: 40, width: '100%'}}>

                                <h2>{info.company_name}</h2>

                                <p style={{marginTop: 10, color: 'grey'}}>{info.address}, {info.city.name}</p>

                                <p style={{width: '60%', marginTop: 20, color: 'grey'}}>Creativity has been an integral
                                    part of my life
                                    for as long as I can remember even as a child. I have always loved colour
                                    in whatever medium I have chosen to work MORE</p>

                            </div>

                        </div>

                        <div style={{display: 'flex'}}>


                            <div style={{width: '70%', marginLeft: 30, marginTop: 40}}>
                                <Tabs selectedTabClassName="bg-white" TabClassName='bg-black'>
                                    <TabList style={{marginBottom: 40, borderWidth: 1, borderColor: '#0016DC'}}>
                                        <Tab focus={false} style={{paddingLeft: 30, paddingRight: 30}}><p>My Vacancies</p></Tab>
                                        <Tab focus={false} style={{paddingLeft: 30, paddingRight: 30}}><p>Candidates</p></Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className='profile-card'>
                                            <h2>My Vacancies</h2>
                                            {info.vacancy_set.length!==0 && info.vacancy_set.map((position, index) => {
                                                    return (
                                                        <>
                                                            <div style={{marginTop:30}}>
                                                                <NavLink to={`/vacancies/${position.id}`}><h3>{position.title}</h3></NavLink>
                                                                <div style={{marginTop:10,display:'flex', width:'70%', justifyContent:'space-between'}}>
                                                                    <p style={{width:'30%', fontSize:12}}>location: {position.city.name}</p>
                                                                    <p style={{width:'30%', fontSize:12}}>salary: {position.salary}</p>
                                                                    <p style={{width:'30%', fontSize:12}}>experience: {position.exp_type}</p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className='profile-card'>
                                            <h2>Candidates</h2>
                                            {condidates.length!==0 && condidates.map((position, index) => {
                                                    return (
                                                        <>
                                                            <div style={{marginTop:30, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                                                <div>
                                                                    <NavLink to={`/profile/${position.user.id}`}><h3>{position.user.first_name} {position.user.last_name}</h3></NavLink>
                                                                    <p style={{fontSize:12, color:'gray'}}>{position.vacancy.title}</p>
                                                                </div>
                                                                <p>{(position.created_at).slice(0,10)}</p>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </TabPanel>
                                </Tabs>

                                <button onClick={logoutHandler}  style={{marginBottom: 40, marginTop: 30}} className='button-filled-blue'>logout
                                </button>
                            </div>
                        </div>
                    </div>
                    <p style={{color: 'transparent'}}>123</p>
                </div>
            }
                </>
    )
}
