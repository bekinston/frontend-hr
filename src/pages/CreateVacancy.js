import React, {useState} from 'react'
import {OptionsFetch} from "../components/registration/OptionsFetch";
import {PositionsFetch} from "../components/vacancies/PositionsFetch";

export const CreateVacancy = () => {
    const [data, setData] = useState({
        title: '',
        description:'',
        salary:'',
        type:'',
        exp_type:'',
        city:'',
        position:'',
        test:'',
    })
    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value})
    }

    return(
        <>
            <div className='card-back'>
                <p style={{color:'transparent'}}>123</p>
                <div className='card'>

                    <div className='create-vacancy' style={{width:'90%'}}>
                        <h2>Job Details</h2>
                        <div style={{marginTop:20}}>
                            <h3>What type of Job is this?</h3>
                            <div className='radio-group' style={{display:'flex', justifyContent:'space-between', marginTop:10}}>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Full-time" name="type" onChange={changeHandler} />Full-time</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Part-time" name="type" onChange={changeHandler} />Part-time</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Internship" name="type" onChange={changeHandler} />Internship</h4>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Work Experience</h3>
                            <div className='radio-group' style={{display:'flex', justifyContent:'space-between', marginTop:10}}>
                                <div className='accept-input'>
                                    <h4 style={{width:'180%'}}><input style={{marginRight:5}} type="radio" value="No matter" name="exp_type" onChange={changeHandler} />No matter</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="No experience" name="exp_type" onChange={changeHandler} />No experience</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="1-3 years" name="exp_type" onChange={changeHandler} />1-3 years</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="3-6 years" name="exp_type" onChange={changeHandler} />3-6 years</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="More than 6 years" name="exp_type" onChange={changeHandler} />More than 6 years</h4>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Job title</h3>
                            <div style={{display:'flex', marginTop:10}}>
                                <div style={{width:'98%', alignItems:'center'}}>
                                    <input style={{padding:'1%'}} className='accept-input-writable' name='title' onChange={changeHandler} />
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Job description</h3>
                            <div style={{display:'flex', marginTop:10}}>
                                <div style={{width:'98%', alignItems:'center'}}>
                                    <input style={{padding:'1%'}} className='accept-input-writable' name='description' onChange={changeHandler} />
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Salary</h3>
                            <div style={{display:'flex', marginTop:10}}>
                                <div style={{width:'98%', alignItems:'center'}}>
                                    <input style={{padding:'1%'}} className='accept-input-writable' name='salary' type='number' onChange={changeHandler} />
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>City</h3>
                            <div style={{display:'flex', marginTop:10}}>
                                <div className='filter-input' style={{width:'100%', alignItems:'center', marginLeft:0, marginRight:0}}>
                                    <select style={{paddingTop:10, paddingBottom:10, paddingLeft:10}}>
                                        className="browser-default select" onChange={changeHandler} name='city'>
                                        <OptionsFetch/>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Position</h3>
                            <div style={{display:'flex', marginTop:10}}>
                                <div className='filter-input' style={{width:'100%', alignItems:'center', marginLeft:0, marginRight:0}}>
                                    <select style={{paddingTop:10, paddingBottom:10, paddingLeft:10}}>
                                        className="browser-default select" onChange={changeHandler} name='position'>
                                        <PositionsFetch/>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Test</h3>
                            <div style={{display:'flex', marginTop:10}}>
                                <div style={{width:'98%', alignItems:'center'}}>
                                    <input style={{padding:'1%'}} className='accept-input-writable'/>
                                </div>
                            </div>
                        </div>

                        <button style={{marginBottom:40, marginTop:30}} className='button-filled-blue'>Confirm</button>

                    </div>



                </div>
                <p style={{color:'transparent'}}>123</p>
            </div>
        </>
    )
}
