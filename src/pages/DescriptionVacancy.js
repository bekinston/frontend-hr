import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {OptionsFetch} from "../components/registration/OptionsFetch";
import SearchIcon from "../assets/filter/search.png";
import LocationIcon from "../assets/filter/pin.png";
import {VacanciesBlockFetch} from "../components/home-content-blocks/VacanciesBlockFetch";
import {NavLink} from "react-router-dom";

export const DescriptionVacancy = () => {
    const [info, setInfo] = useState();
    const accessTokenObj = JSON.parse(localStorage.getItem("userData"));

    const headers = {

    }
    const [desc, setDesc] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [company, setCompany] = React.useState('');
    const {loading, request} = useHttp();

    const fetch = useCallback(async () => {
        try {
            const href = window.location.pathname;
            const fetched = await request('http://hr-backend.jcloud.kz' + href, 'GET', null, {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+ accessTokenObj.token
            })
            setDesc(fetched);
            setCountry(fetched.city.country);
            setCity(fetched.city);
            setCompany(fetched.company);
        } catch (e) {}
    }, [request])

    useEffect(() => {

        fetch();

    }, [fetch])

    console.log(company);
    console.log(desc);


    return(
        <>
            <div  className = 'page-head'>
                <div style={{height:60, marginTop:25}} className = 'filter'>
                    <div className='filter-item' style={{display:'flex', alignItems:'center'}}>
                        <div style={{placeContent:'flex-start', width:'100%', display:'flex', alignItems:'center'}}>
                            <img src={SearchIcon} style={{width:20, height:20}}/>
                            <div className='filter-input'>
                                <input placeholder='example: backend developer'/>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <div style={{placeContent:'flex-start', width:'100%', display:'flex', alignItems:'center'}}>
                            <img src={LocationIcon} style={{width:20, height:20}}/>
                            <div className='filter-input'>
                                <select style={{border:'none', marginTop:5}}>
                                    <OptionsFetch/>
                                </select>
                            </div>
                        </div>
                        <div style={{placeContent:'flex-end'}}>
                            <NavLink to={'/vacancies'}><button className='button-search'>Search</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginLeft:'10%', marginRight:'10%'}}>
                <div style={{display:'flex'}}>
                    <div className='border-right'><VacanciesBlockFetch/></div>
                    <div>
                        <div className='border-bottom' style={{display:'flex', margin:30}}>
                            <div>
                                <img style={{background:'black', width:70, height:70}}/>
                            </div>
                            <div>
                                <h3 style={{marginLeft:30}}>{desc.title}</h3>
                                <NavLink to={`/vacancies/${desc.id}/tests`}><button style={{marginLeft:30, marginTop:10, marginBottom:20}} onClick={()=>{console.log(window.location.pathname)}} className='button-filled-blue'>Apply Now</button></NavLink>
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <div style={{padding:30}}>
                                <h5>SALARY</h5>
                                <p>{desc.salary}</p>
                            </div>
                            <div style={{padding:30}}>
                                <h5>CREATED AT</h5>
                                <p>{desc.created_at !== undefined && (desc.created_at).slice(0,10)}</p>
                            </div>
                            <div style={{padding:30}}>
                                <h5>LOCATION</h5>
                                <p>{city.name}, {country.name}</p>
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <div style={{padding:30}}>
                                <NavLink to={`/profile/${company.id}`}><p style={{background:'#DCDFFF', paddingLeft:30, paddingRight:30, paddingTop:10, paddingBottom:10, borderRadius:40}}>{company.company_name}</p></NavLink>
                            </div>
                            <div style={{padding:30}}>
                                <p style={{background:'#DCDFFF', paddingLeft:30, paddingRight:30, paddingTop:10, paddingBottom:10, borderRadius:40}}>{desc.exp_type}</p>
                            </div>
                            <div style={{padding:30}}>
                                <p style={{background:'#DCDFFF', paddingLeft:30, paddingRight:30, paddingTop:10, paddingBottom:10, borderRadius:40}}>{desc.type}</p>
                            </div>
                        </div>

                        <div style={{padding:30}}>
                            <p>{desc.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
