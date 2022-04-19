import React, {useEffect} from 'react';
import SearchIcon from '../assets/filter/search.png';
import LocationIcon from '../assets/filter/pin.png';
import {OptionsFetch} from "../components/registration/OptionsFetch";
import {VacanciesFetch} from "../components/vacancies/VacanciesFetch";
import {NavLink} from "react-router-dom";

export const Vacancies = () => {
    return(
        <>
            <div>
                <div  className = 'page-head'>
                    <h3>Vacancies</h3>
                </div>

                <div className = 'filter'>
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
                                <select>
                                    <OptionsFetch/>
                                </select>
                            </div>

                        </div>
                        <div style={{placeContent:'flex-end'}}>
                            <button className='button-search'>Search</button>
                        </div>
                    </div>
                </div>

                <div className = 'side-filter'>
                    <div>
                        <h5>Refine by Salary</h5>
                        <div>
                            <div style={{width:'100%', marginTop:5}}>
                                <p style={{fontSize:12}}>from</p>
                                <input type='number' style={{width:'80%'}}/>
                            </div>
                            <div style={{width:'100%', marginTop:5}}>
                                <p style={{fontSize:12}}>to</p>
                                <input type='number' style={{width:'80%'}}/>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop:30}}>
                        <h5>Refine by Work Experience</h5>
                        <div style={{display:'flex', width:'100%'}}>
                            <div className='radio-group'>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>No Matter</p>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>No experience</p>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>1-3 years</p>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>3-6 years</p>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>More than 6 years</p>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop:30}}>
                        <h5>Refine by Scope</h5>
                        <div style={{display:'flex', width:'100%'}}>
                            <div className='radio-group'>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Full-time</p>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Part-time</p>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Internship</p>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop:30}}>
                        <h5>Refine by Position</h5>
                        <div>
                            <div className='radio-group'>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Back-End</p>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Front-End</p>
                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Design</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = 'page-content' style={{minHeight:600}}>
                    <VacanciesFetch/>

                </div>
                <div style={{display:'flex', width:'100%', justifyContent:'center', marginBottom:40}}>
                    <center><NavLink to={'/create_vacancy'}><button onClick={()=>{window.scrollTo(0, 0)}} className='button-filled-yellow'>Create My Vacancy</button></NavLink></center>
                </div>
            </div>

        </>
    )
}
