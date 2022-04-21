import React, {useContext, useEffect, useState} from 'react';
import clock from "../../assets/profile/clock.png";
import trophy from "../../assets/profile/trophy.png";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import axios from "axios";
import {VacanciesBlockFetch} from "../home-content-blocks/VacanciesBlockFetch";
import {AuthContext} from "../../context/AuthContext";


export const ProfileCompany = () => {
    const [info, setInfo] = useState();
    const accessTokenObj = JSON.parse(localStorage.getItem("userData"));
    const auth = useContext(AuthContext);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ accessTokenObj.token
    }

    const getInfo = async() => {
        await axios.get(`http://hr-backend.jcloud.kz/profile/info/` , {
            headers : headers
        })
            .then(async function (response) {
                setInfo(response.data);
                console.log(response.data);
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

                                <p style={{marginTop: 10, color: 'grey'}}>{info.address}, {info.city}</p>

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
                                    </TabList>



                                    <TabPanel>
                                        <div className='profile-card'>
                                            <VacanciesBlockFetch />
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
