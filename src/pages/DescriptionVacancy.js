import React, {useCallback, useEffect} from 'react'
import axios from "axios";
import {useHttp} from "../hooks/http.hook";
import {NavLink} from "react-router-dom";
import icon from "../assets/filter/pin.png";
import doc from "../assets/filter/doc.png";
import search from "../assets/filter/search.png";
import {OptionsFetch} from "../components/registration/OptionsFetch";
import {VacanciesFetch} from "../components/vacancies/VacanciesFetch";

export const DescriptionVacancy = () => {
    const [desc, setDesc] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const {loading, request} = useHttp();

    const fetch = useCallback(async () => {
        try {
            const href = window.location.pathname;
            const fetched = await request('http://hr-backend.jcloud.kz' + href, 'GET', null, {
            })
            setDesc(fetched);
            setCountry(fetched.city.country);
            setCity(fetched.city);
        } catch (e) {}
    }, [request])

    useEffect(() => {

            fetch();

    }, [fetch])

    return(
        <>
            {desc !== '' &&  <div className='row'>
                <div className = 'col s12' style={{marginTop:-20, minHeight:800}}>
                    <div style={{width:"86%", marginLeft:"7%"}}>
                        <div className='row headh1' style={{padding:20}}>
                            <div className='col s8 offset-s2 filter z-depth-2'>
                                <div className='col s5' style={{marginLeft:0, marginTop:10, display:'flex', flexDirection:'row'}}>
                                    <img src={search} style={{marginRight:5,width:15, height:15, marginTop:15}}/>
                                    <input value='Backend'/>
                                </div>
                                <div className='col s5 center' style={{marginTop:10, display:'flex', flexDirection:'row'}}>
                                    <img src={icon} style={{width:15, height:15, marginTop:15}}/>
                                    <select className='browser-default filter-select'>
                                        <OptionsFetch/>
                                    </select>
                                </div>
                                <div className='col s2 right-align'>
                                    <button>Start</button>
                                </div>
                            </div>
                        </div>

                        <div className = 'row' style={{paddingLeft:30, paddingRight:30}}>
                            <div className='col s3'>

                            </div>
                        </div>

                        <div className='valign-wrapper'>
                            <div className='col s8'>
                                <div className='col s2'>
                                    <img className='responsive-img' style={{background:'black', width:70, height:70}}/>
                                </div>
                                <div className='col s5' style={{marginTop:-10}}>
                                    <h5 style={{height:80}}>{desc.title}</h5>
                                    <button style={{marginTop:10}} className='button-filled-blue'>Apply</button>
                                </div>
                                <div className='col s12 divider' style={{marginTop:70}}/>


                                <div className='col s12'>
                                    <div className='col s3' style={{marginLeft:10}}>
                                        <h6>SALARY</h6>
                                        <p>{desc.salary}</p>
                                    </div>
                                    <div className='col s3' style={{marginRight:10}}>
                                        <h6>CREATED AT</h6>
                                        <p>{desc.created_at.substring(0,10)}</p>
                                    </div>
                                    <div className='col s4' style={{marginRight:10}}>
                                        <h6>LOCATION</h6>
                                        <p>{country.name}, {city.name}</p>
                                    </div>
                                </div>

                                <div className='col s12'>
                                    <div className = 'col s3'>
                                        <button style={{minWidth:250}} className='button-filled-blue'>{desc.position.name}</button>
                                    </div>
                                    <div className = 'col s4 offset-s1'>
                                        <button style={{minWidth:300}} className='button-filled-blue'>{desc.type}</button>
                                    </div>
                                </div>

                                <div style={{marginLeft:20}} className='col s12'>
                                    <p>{desc.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
