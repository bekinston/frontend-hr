import React from 'react'

export const CreateVacancy = () => {
    return(
        <>
            <div className='card-back'>
                <p style={{color:'transparent'}}>123</p>
                <div className='card'>

                    <div className='create-vacancy' style={{width:'70%'}}>
                        <h2>Job Details</h2>
                        <div style={{marginTop:20}}>
                            <h3>What type of Job is this?</h3>
                            <div className='radio-group' style={{display:'flex', justifyContent:'space-between', marginTop:10}}>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Full-time</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Part-time</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Internship</h4>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Is there planned start date for this job ?</h3>
                            <div className='radio-group' style={{display:'flex', justifyContent:'space-between', marginTop:10, width:'58%'}}>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Back-End</h4>
                                </div>
                                <div className='accept-input'>
                                    <h4 style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Male" name="gender"/>Back-End</h4>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Company name for this job</h3>
                            <div className='radio-group' style={{display:'flex', marginTop:10}}>
                                <div style={{width:'98%', alignItems:'center'}}>
                                    <input style={{padding:'1%'}} className='accept-input-writable'/>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Your role in the hiring process</h3>
                            <div className='radio-group' style={{display:'flex', marginTop:10}}>
                                <div style={{width:'98%', alignItems:'center'}}>
                                    <input style={{padding:'1%'}} className='accept-input-writable'/>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Your typical hiring budget</h3>
                            <div className='radio-group' style={{display:'flex', marginTop:10}}>
                                <div style={{width:'98%', alignItems:'center'}}>
                                    <input style={{padding:'1%'}} className='accept-input-writable'/>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Job title</h3>
                            <div className='radio-group' style={{display:'flex', marginTop:10}}>
                                <div style={{width:'98%', alignItems:'center'}}>
                                    <input style={{padding:'1%'}} className='accept-input-writable'/>
                                </div>
                            </div>
                        </div>

                        <div style={{marginTop:20}}>
                            <h3>Job description</h3>
                            <div className='radio-group' style={{display:'flex', marginTop:10}}>
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
