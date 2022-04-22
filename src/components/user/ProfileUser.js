import React, {useContext, useEffect, useState} from 'react';
import clock from "../../assets/profile/clock.png";
import trophy from "../../assets/profile/trophy.png";
import policy from "../../assets/profile/policy.png";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import axios from "axios";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {ExperienceFetch} from "../profile-vidgets/ExperienceFetch";
import {PositionsFetch} from "../vacancies/PositionsFetch";
import {SkillFetch} from "../vacancies/SkillFetch";
import Collapsible from 'react-collapsible';
import {OptionsFetch} from "../registration/OptionsFetch";
import del from '../../assets/utils/delete.png'
import {AuthContext} from "../../context/AuthContext";

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
    const [similar, setSimilar] = useState([]);
    const auth = useContext(AuthContext);

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
                console.log(response.data);
                await axios.get(`http://hr-backend.jcloud.kz/profile/${response.data.id}/similar/` , {
                    headers : headers
                })
                    .then(async function (response) {
                        setSimilar(response.data);
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
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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

                                <h2>{info.first_name} {info.last_name}</h2>

                                <p style={{marginTop: 10, color: 'grey'}}>{info.city.name}</p>

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
                                    {
                                        <>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <img src={clock} style={{width: 30, height: 30}}/>
                                                <div style={{marginLeft: 10}}>
                                                    <h5>{info.experiences.length} Jobs</h5>
                                                    <p style={{color: 'grey', fontSize: 12}}>Experienced</p>
                                                </div>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <img src={trophy} style={{width: 30, height: 30}}/>
                                                <div style={{marginLeft: 10}}>
                                                    <h5>{info.result_set.length} Tests</h5>
                                                    <p style={{color: 'grey', fontSize: 12}}>Passed</p>
                                                </div>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <img src={policy} style={{width: 30, height: 30}}/>
                                                <div style={{marginLeft: 10}}>
                                                    <h5>{info.vacancyreply_set.length} Vacancies</h5>
                                                    <p style={{color: 'grey', fontSize: 12}}>Replied</p>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                        <div style={{display: 'flex'}}>


                            <div style={{width: '60%', marginLeft: 30, marginTop: 40}}>
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
                                        <div style={{overflow:'auto'}} className='profile-card'>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',

                                            }}>

                                            </div>
                                            <div style={{marginTop: 10}}>
                                                <div>
                                                    <Collapsible trigger={<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><h2>Job Experience</h2><button className='button-filled-blue'>+</button></div>}>
                                                    <div style={{padding:20, justifyContent:'center'}}>
                                                        <div className='filter-input' style={{marginTop:10, width:'52%'}}>
                                                            <label className='input-label'>Position</label>
                                                            <div style={{marginTop:20}}>
                                                                <select className="browser-default select" name='position' value={experience.position} onChange={experienceChange}>
                                                                    <PositionsFetch/>
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div className='filter-input' style={{ width:'50%', marginTop:10}}>
                                                            <label className='input-label'>Name</label>
                                                            <input
                                                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                                                id="name"
                                                                type="text"
                                                                name="name"
                                                                value={experience.name}
                                                                className="yellow-input"
                                                                onChange={experienceChange}
                                                            />
                                                        </div>
                                                        <div className='filter-input' style={{ width:'50%', marginTop:10}}>
                                                            <label className='input-label'>Date From</label>
                                                            <input
                                                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                                                id="date_from"
                                                                type="date"
                                                                name="date_from"
                                                                value={experience.date_from}
                                                                className="yellow-input"
                                                                onChange={experienceChange}
                                                            />
                                                        </div>
                                                        <div className='filter-input' style={{ width:'50%', marginTop:10}}>
                                                            <label className='input-label'>Date To</label>
                                                            <input
                                                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                                                id="date_to"
                                                                type="date"
                                                                name="date_to"
                                                                value={experience.date_to}
                                                                className="yellow-input"
                                                                onChange={experienceChange}
                                                            />
                                                        </div>
                                                        <div className='filter-input' style={{ width:'50%', marginTop:10}}>
                                                            <label className='input-label'>Description</label>
                                                            <input
                                                                style={{marginTop:10, borderWidth:1, borderColor:'#144AF1', padding: 5, borderRadius:5}}
                                                                id="description"
                                                                type="text"
                                                                name="description"
                                                                value={experience.description}
                                                                className="yellow-input"
                                                                onChange={experienceChange}
                                                            />
                                                        </div>
                                                        <button style={{marginTop:20, marginLeft:20}} onClick={addExperience} className='button-filled-blue'>add</button>
                                                    </div>
                                                    </Collapsible>
                                                </div>
                                            </div>
                                            <div style={{marginTop:20}}>{ info.experiences.map((position, index) => {
                                                    return (
                                                        <div style={{marginTop:20, display:'flex', justifyContent:'space-between'}}>
                                                            <div style={{width:'80%'}}>
                                                                <h3>{position.name}</h3>
                                                                <p>{position.position.name} {position.date_from}    {position.date_to}</p>
                                                                <p>{position.description}</p>
                                                            </div>
                                                            <button style={{background:'white', borderWidth:1, borderColor:'transparent', marginRight:35}} onClick={()=>{axios.delete(`http://hr-backend.jcloud.kz/profile/${id}/experience/${position.id}` ,{...experience}, {
                                                                headers : headers
                                                            })
                                                                .then(async function (response) {
                                                                    window.location.reload(true);
                                                                })
                                                                .catch(function (error) {
                                                                    console.log(error);
                                                                });

                                                            }}><img src={del} style={{width:20}}/></button>
                                                        </div>
                                                    )
                                                }
                                            )
                                            }</div>
                                        </div>
                                    </TabPanel>



                                    <TabPanel>
                                        <div className='profile-card'>
                                            <div style={{marginTop: 10}}>
                                                <div>
                                                    <Collapsible trigger={<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><h2>Skills</h2><button className='button-filled-blue'>+</button></div>}>
                                                        <div style={{padding:20, justifyContent:'center'}}>
                                                            <div className='filter-input' style={{width:'52%', display:'flex', alignItems:'center'}}>
                                                                <div style={{width:'100%'}}>
                                                                    <select style={{width:'100%'}} className="browser-default select" name='skill' value={skill.name} onChange={skillChange}>
                                                                        <SkillFetch/>
                                                                    </select>
                                                                </div>
                                                                <button style={{marginLeft:20}}  onClick={addSkills} className='button-filled-blue'>add</button>
                                                            </div>
                                                        </div>
                                                    </Collapsible>
                                                </div>
                                            </div>
                                            <div style={{display:'flex'}} style={{marginTop:20}}>
                                            { info.skills.map((position, index) => {
                                                    return (
                                                            <div style={{display:'flex', background:'#DCDFFF', justifyContent:'space-between', padding:5, borderRadius:5, marginTop:10}}>
                                                                <span>{position.name}</span>
                                                                <button style={{background:'#DCDFFF', borderWidth:1, borderColor:'transparent'}}  onClick={()=>{axios.delete(`http://hr-backend.jcloud.kz/profile/${id}/skills/${position.id}` , {
                                                                    headers : headers,
                                                                })
                                                                    .then(async function (response) {
                                                                        window.location.reload();
                                                                    })
                                                                    .catch(function (error) {
                                                                        console.log(error);
                                                                    });}}><img src={del} style={{width:15}}/></button>
                                                            </div>
                                                    )
                                                }
                                            )
                                            }
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div style={{overflow:'auto'}} className='profile-card'>
                                            <h2>Passed Tests</h2>
                                            { info.result_set.map((position, index) => {
                                                    return (
                                                        <div style={{marginTop:10}}>
                                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                                <h4>{position.test.title}</h4>
                                                                <h4>{position.score}/{position.test.questionselect_set.length}</h4>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                        <div  style={{overflow:'auto'}} className='profile-card'>
                                            <h2>Applied Vacancies</h2>
                                            { info.vacancyreply_set.map((position, index) => {
                                                    return (
                                                        <>
                                                            <div style={{display:'flex', justifyContent:'space-between', marginTop:10}}>
                                                                <h4 style={{width:'40%'}}>{position.vacancy.title}</h4>
                                                                <p style={{width:'30%'}}>{position.vacancy.company.company_name}</p>
                                                                <p style={{width:'30%'}}>{position.vacancy.type}</p>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            )
                                            }
                                        </div>
                                    </TabPanel>
                                </Tabs>

                                <button onClick={logoutHandler} style={{marginBottom: 40, marginTop: 30}}
                                        className='button-filled-blue'>logout
                                </button>
                            </div>

                            <div style={{width: "30%", marginLeft: 100, marginTop: 50, alignContent: 'center'}}>
                                <h3 style={{width: '100%'}}>SIMILAR PROFILES</h3>
                                { similar.map((position, index) => {
                                        return (
                                            <>
                                                <div>
                                                   <h4>{position.first_name} {position.last_name}</h4>
                                                    <p style={{color: 'grey', fontSize: 12}}>City: {position.city.name}, Experiences: {position.experiences.length}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                )
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
