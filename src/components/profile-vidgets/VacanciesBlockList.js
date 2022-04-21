import React from 'react';
import pin from '../../assets/filter/pin.png';
import {NavLink} from "react-router-dom";


export const VacanciesBlockList = ({ jobs }) => {
    console.log(jobs);

    return (
        <div style={{height:400}}>
            { jobs.map((job, index) => {
                return (
                    <div style={{marginTop:15, display:'flex', alignItems:'center'}}>
                        <div style={{width:300}}>
                            <NavLink to={`/vacancies/${job.id}`} onClick={()=>{window.location.pathname(`/vacancies/${job.id}`)}}><h3 style={{color:'#03157A', fontWeight:'lighter'}}>{job.title}</h3></NavLink>
                            <p style={{color:"#03157ACC", fontSize:14}}>{job.salary}</p>
                            <div style={{display:'flex', alignItems:'center',  marginTop:10}}>
                                <img src={pin} height={15} style={{color:'grey'}}/>
                                <p  style={{color:"grey", marginLeft:4, fontSize:12}}>{job.company.company_name} {job.city.name} {job.city.country.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
