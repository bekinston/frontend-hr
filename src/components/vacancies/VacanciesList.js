import React, {useState} from 'react'
import icon from '../../assets/filter/pin.png'
import doc from '../../assets/filter/doc.png'
import {NavLink} from "react-router-dom";


export const VacanciesList = ({ vacancies }) => {

    return (
        <>
        <div className='col s12 offset-s1' style={{minHeight:600, marginTop:10}}>
            <div style={{marginTop:30}}>
                { vacancies.map((vacancy, index) => {
                    return (
                        <>
                            <div style={{display:'flex', marginTop:20}}>
                                <div>
                                    <img style={{width:100, height:100, background:'black', marginBottom:15}}/>
                                </div>
                                <div style={{width:'60%', marginLeft:30}}>
                                    <div>
                                        <NavLink to={`/vacancies/${vacancy.id}/`}><h2 style={{width: '100%'}}>{vacancy.title}</h2></NavLink>

                                        <h4>For {vacancy.company.company_name}</h4>

                                        <div style={{display:'flex', width:'100%', marginTop:10, justifyContent:'space-between'}}>
                                            <div style={{placeContent:'flex-start', display:'flex', alignItems:'center'}}>
                                                <img src={icon} style={{display:'flex', flexDirection:'row',width:15, height:15, marginRight:5}}/>
                                                <p style={{marginRight:30}}>{vacancy.city.name}</p>
                                            </div>
                                            <div style={{placeContent:'flex-start', display:'flex', alignItems:'center'}}>
                                                <img src={doc} style={{display:'flex', flexDirection:'row',width:15, height:15, marginRight:5}}/>
                                                <p style={{marginRight:30}}>{vacancy.type}</p>
                                            </div>
                                            <div style={{placeContent:'flex-start', display:'flex', alignItems:'center'}}>
                                                <img src={doc} style={{display:'flex', flexDirection:'row',width:15, height:15, marginRight:5}}/>
                                                <p style={{marginRight:30}}>{vacancy.salary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='button-filled-blue'>Apply</button>
                                </div>
                            </div>
                            <div style = {{width:'90%', height:1, background:'grey'}}/>
                        </>
                    )
                }
                )
                }
            </div>
        </div>
        </>
    )
}

/*<div>
    <div className='col s2'>
        <img style={{background:'black', width:130, height:130}}/>
    </div>
    <div style={{marginLeft:10, minWidth:350,}} className='col'>
        <NavLink to={`/vacancies/${vacancy.id}/`}><a>{vacancy.title}</a></NavLink>
        <h6 className='filterh6'>For {vacancy.company.company_name}</h6>
    </div>
    <div className='col s2 pull-s2' style={{marginTop:30, marginLeft:200}}>
        <button className='button-filled-blue'>Apply</button>
    </div>
    <div className='col s6' style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop:10
    }}>
        <img src={icon} style={{display:'flex', flexDirection:'row',width:15, height:15, marginTop:18, marginRight:5}}/>
        <p style={{marginRight:30}}>{vacancy.city.name}</p>
        <img src={doc} style={{display:'flex', flexDirection:'row',width:15, height:15, marginTop:18, marginRight:5}}/>
        <p style={{marginRight:30}}>{vacancy.type}</p>
        <img src={doc} style={{display:'flex', flexDirection:'row',width:15, height:15, marginTop:18, marginRight:5}}/>
        <p style={{marginRight:30}}>{vacancy.salary}</p>
    </div>
    <div className='col s12 pull-s2' style={{marginBottom:20}}>
        <div style={{marginLeft:50}} className="divider"/>
    </div>

</div>*/
