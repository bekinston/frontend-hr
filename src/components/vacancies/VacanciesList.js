import React, {useState} from 'react'
import icon from '../../assets/filter/pin.png'
import doc from '../../assets/filter/doc.png'



export const VacanciesList = ({ vacancies }) => {


    return (
        <>


                    <div className='col s12 offset-s1' style={{minHeight:1000, marginTop:10}}>
                        <div>
                            <h5>4 Vacancy “Backend”</h5>
                        </div>
                        <div style={{marginTop:30}}>
                            { vacancies.map((vacancy, index) => {
                                return (
                                    <>
                                        <div>
                                            <div className='col s2'>
                                                <img style={{background:'black', width:130, height:130}}/>
                                            </div>


                                            <div style={{marginLeft:10, minWidth:350,}} className='col'>
                                                <h6 className='filterh6'>{vacancy.title}</h6>
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

                                        </div>
                                    </>
                                )
                            }) }
                        </div>
                    </div>





        </>
    )
}
