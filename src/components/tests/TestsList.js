import React, {useState} from 'react'
import icon from '../../assets/filter/pin.png'
import doc from '../../assets/filter/doc.png'
import {NavLink} from "react-router-dom";


export const TestsList = ({ tests }) => {

    return (
        <>
        <div className='col s12 offset-s1' style={{minHeight:600, marginTop:10}}>
            <div style={{marginTop:30}}>
                { tests.map((test, index) => {
                    return (
                        <>
                            <div style={{display:'flex', marginTop:20}}>
                                <div>
                                    <img style={{width:100, height:100, background:'black', marginBottom:15}}/>
                                </div>
                                <div style={{width:'60%', marginLeft:30}}>
                                    <div>
                                        <NavLink to={`/vacancies/${test.id}/`}><h2 style={{width: '100%'}}>{test.title}</h2></NavLink>

                                        <h4>For {test.company.company_name}</h4>

                                        <div style={{display:'flex', width:'100%', marginTop:10, justifyContent:'space-between'}}>
                                            <div style={{placeContent:'flex-start', display:'flex', alignItems:'center'}}>
                                                <img src={icon} style={{display:'flex', flexDirection:'row',width:15, height:15, marginRight:5}}/>
                                                <p style={{marginRight:30}}>{test.city.name}</p>
                                            </div>
                                            <div style={{placeContent:'flex-start', display:'flex', alignItems:'center'}}>
                                                <img src={doc} style={{display:'flex', flexDirection:'row',width:15, height:15, marginRight:5}}/>
                                                <p style={{marginRight:30}}>{test.type}</p>
                                            </div>
                                            <div style={{placeContent:'flex-start', display:'flex', alignItems:'center'}}>
                                                <img src={doc} style={{display:'flex', flexDirection:'row',width:15, height:15, marginRight:5}}/>
                                                <p style={{marginRight:30}}>{test.salary}</p>
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

