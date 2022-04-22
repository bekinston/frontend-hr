import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import clock from "../assets/profile/clock.png";
import trophy from "../assets/profile/trophy.png";
import policy from "../assets/profile/policy.png";
import axios from "axios";
import {NavLink} from "react-router-dom";


export const Person = () => {
    const [info, setInfo] = useState();
    const auth = useContext(AuthContext);
    const [is_company, setIs_company] = useState(false);
    const accessTokenObj = JSON.parse(localStorage.getItem("userData"));
    const [similar, setSimilar] = useState([]);

    let href = window.location.pathname;

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ accessTokenObj.token
    }
    console.log(href);




    const getInfo = async() => {
        await axios.get('http://hr-backend.jcloud.kz' + href + '/similar/' , {
            headers : headers
        })
            .then(async function (response) {
                setSimilar(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        await axios.get('http://hr-backend.jcloud.kz' + href + '/', {
            headers : headers
        })
            .then(async function (response) {
                setInfo(response.data);
                console.log(response.data);
                if(response.data.is_company === true){
                    setIs_company(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getInfo();
    }, [])


    if(is_company){
        return(<>
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
                                        <Tab focus={false} style={{paddingLeft: 30, paddingRight: 30}}><p>Vacancies</p></Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className='profile-card'>
                                            <h2>Vacancies</h2>
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
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <p style={{color: 'transparent'}}>123</p>
                </div>
            }
        </>)
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
                                            </div>
                                            <h2>Experiences</h2>
                                            <div style={{marginTop:20}}>{ info.experiences.map((position, index) => {
                                                    return (
                                                        <div style={{marginTop:20, display:'flex', justifyContent:'space-between'}}>
                                                            <div style={{width:'80%'}}>
                                                                <h3>{position.name}</h3>
                                                                <p>{position.position.name} {position.date_from}    {position.date_to}</p>
                                                                <p>{position.description}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )
                                            }</div>
                                        </div>
                                    </TabPanel>



                                    <TabPanel>
                                        <div className='profile-card'>
                                            <div style={{display:'flex'}} style={{marginTop:20}}>
                                                <h2>Skills</h2>
                                                { info.skills.map((position, index) => {
                                                        return (
                                                            <div style={{display:'flex', background:'#DCDFFF', justifyContent:'space-between', padding:5, borderRadius:5, marginTop:10}}>
                                                                <span>{position.name}</span>
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
                            </div>

                            <div style={{width: "30%", marginLeft: 100, marginTop: 50, alignContent: 'center'}}>
                                <h3 style={{width: '100%'}}>SIMILAR PROFILES</h3>
                                { similar.map((position, index) => {
                                        return (
                                            <>
                                                <div>
                                                    <NavLink to={`/profile/${position.id}`}><h4>{position.first_name} {position.last_name}</h4></NavLink>
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



