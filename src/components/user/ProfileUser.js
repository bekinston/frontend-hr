import React, {useEffect, useState} from 'react';
import clock from "../../assets/profile/clock.png";
import trophy from "../../assets/profile/trophy.png";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import axios from "axios";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {ExperienceFetch} from "../profile-vidgets/ExperienceFetch";
import {PositionsFetch} from "../vacancies/PositionsFetch";
import {SkillFetch} from "../vacancies/SkillFetch";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


export const ProfileUser = () => {
    const [info, setInfo] = useState();
    const [id, setId] = useState();
    const accessTokenObj = JSON.parse(localStorage.getItem("userData"));

    const [experience, setExperience] = useState({
        name:'',
        position: '',
        description:'',
        date_from:'',
        date_to:'',
    });

    const [skill, setSkill] = useState({
        skill:'',
    });


    const experienceChange = event => {
        setExperience({...experience, [event.target.name]: event.target.value});
    }


    const skillChange = event => {
        setSkill({...skill, [event.target.name]: event.target.value});
    }
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
                await axios.get(`http://hr-backend.jcloud.kz/profile/${response.data.id}/similar/` , {
                    headers : headers
                })
                    .then(async function (response) {
                        console.log(response.data)
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
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getInfo();
        getSimular();
    }, [])


    const addExperience = () => {
        axios.post(`http://hr-backend.jcloud.kz/profile/${id}/experience/` ,{...experience}, {
            headers : headers
        })
            .then(async function (response) {
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const addSkills = () => {
        axios.post(`http://hr-backend.jcloud.kz/profile/${id}/skills/` ,{...skill}, {
            headers : headers
        })
            .then(async function (response) {
               // window.location.reload();
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const getSimular = async() => {

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

                                <h2>{info.first_name} {info.last_name}</h2>

                                <p style={{marginTop: 10, color: 'grey'}}>{info.city}</p>

                                <p style={{width: '80%', marginTop: 20, color: 'grey'}}>Creativity has been an integral
                                    part of my life
                                    for as long as I can remember even as a child. I have always loved colour
                                    in whatever medium I have chosen to work MORE</p>
                                <div style={{
                                    width: '80%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginTop: 20
                                }}>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={clock} style={{width: 30, height: 30}}/>
                                        <div style={{marginLeft: 10}}>
                                            <h5>4+ Years Job</h5>
                                            <p style={{color: 'grey', fontSize: 12}}>Experienced</p>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={trophy} style={{width: 30, height: 30}}/>
                                        <div style={{marginLeft: 10}}>
                                            <h5>6 Certificates</h5>
                                            <p style={{color: 'grey', fontSize: 12}}>Achieved</p>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={clock} style={{width: 30, height: 30}}/>
                                        <div style={{marginLeft: 10}}>
                                            <h5>1 Internship</h5>
                                            <p style={{color: 'grey', fontSize: 12}}>Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{display: 'flex'}}>


                            <div style={{width: '70%', marginLeft: 30, marginTop: 40}}>
                                <Tabs selectedTabClassName="bg-white" TabClassName='bg-black'>
                                    <TabList style={{marginBottom: 40, borderWidth: 1, borderColor: '#0016DC'}}>
                                        <Tab focus={false} style={{paddingLeft: 30, paddingRight: 30}}><p>Experience</p>
                                        </Tab>
                                        <Tab focus={false} style={{paddingLeft: 30, paddingRight: 30}}><p>Skills</p>
                                        </Tab>
                                        <Tab focus={false} style={{paddingLeft: 30, paddingRight: 30}}><p>Passed
                                            Tests</p></Tab>
                                        <Tab focus={false} style={{paddingLeft: 30, paddingRight: 30}}><p>Applied Vacancies</p></Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className='profile-card'>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                                <h2>Job Experience</h2>
                                            </div>
                                            <div style={{marginTop: 40}}>
                                                <div>
                                                    <select name='position' value={experience.position} onChange={experienceChange}>
                                                        <PositionsFetch/>
                                                    </select>

                                                    <input name='name' value={experience.name} onChange={experienceChange}/>
                                                    <input type='date' name='date_to' value={experience.date_to} onChange={experienceChange}/>
                                                    <input type='date' name='date_from' value={experience.date_from} onChange={experienceChange}/>
                                                    <input name='description' value={experience.description} onChange={experienceChange}/>
                                                    <button onClick={addExperience} className='button-filled-blue'>add</button>
                                                </div>
                                            </div>
                                            { info.experiences.map((position, index) => {
                                                    return (
                                                        <>
                                                            <div>{position.description}</div>
                                                            <button onClick={()=>{axios.delete(`http://hr-backend.jcloud.kz/profile/${id}/experience/${position.id}` ,{...experience}, {
                                                                headers : headers
                                                            })
                                                                .then(async function (response) {
                                                                    window.location.reload(true);
                                                                })
                                                                .catch(function (error) {
                                                                    console.log(error);
                                                                });

                                                            }}>delete</button>
                                                        </>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className='profile-card'>
                                            <h2>Skills</h2>
                                            <div>
                                                <select name='skill' value={skill.name} onChange={skillChange}>
                                                    <SkillFetch/>
                                                </select>

                                                <button onClick={addSkills} className='button-filled-blue'>add</button>
                                            </div>
                                            { info.skills.map((position, index) => {
                                                    return (
                                                        <>
                                                            <div>{position.id}</div>
                                                            <div>{position.name}</div>
                                                            <button onClick={()=>{axios.delete(`http://hr-backend.jcloud.kz/profile/${id}/skills/${position.id}` , {
                                                                headers : headers,
                                                            })
                                                                .then(async function (response) {
                                                                    window.location.reload();
                                                                })
                                                                .catch(function (error) {
                                                                    console.log(error);
                                                                });}}>delete</button>
                                                        </>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className='profile-card'>
                                            <h2>Passed Tests</h2>
                                            { info.result_set.map((position, index) => {
                                                    return (
                                                        <>
                                                            <div>{position.test.title} {position.score}</div>
                                                        </>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                        <div className='profile-card'>
                                            <h2>Applied Vacancies</h2>
                                            { info.vacancyreply_set.map((position, index) => {
                                                    return (
                                                        <>
                                                            <div>{position.vacancy.title}</div>
                                                        </>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </TabPanel>
                                </Tabs>

                                <button style={{marginBottom: 40, marginTop: 30}}
                                        className='button-filled-blue'>logout
                                </button>
                            </div>

                            <div style={{width: "30%", marginLeft: 10, marginTop: 50, alignContent: 'center'}}>
                                <h3 style={{width: '100%', textAlign: 'center'}}>SIMILAR PROFILES</h3>
                                {

                                }
                            </div>
                        </div>
                    </div>
                    <p style={{color: 'transparent'}}>123</p>
                </div>
            }
        </>
    )
}
