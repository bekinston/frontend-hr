import React, {useState} from 'react'
import {OptionsFetch} from "../components/registration/OptionsFetch";
import icon from '../../src/assets/filter/pin.png'
import search from '../../src/assets/filter/search.png'
import {VacanciesFetch} from "../components/vacancies/VacanciesFetch";

export const Vacancies = () => {
    const [filter, setFilter] = useState({
        from:'',
        to:'',
        employment:'',
        scope:'',
        position:'',
    })

    const changeHandler = event => {
        setFilter({...filter,[event.target.name]: event.target.value});

    }

    const onPress = () => {
        console.log(filter);
    }



    return(
        <>
            <div className='row'>
                <div className = 'col s12' style={{marginTop:-20}}>
                    <div style={{width:"86%", marginLeft:"7%"}}>
                        <div className='headh1 center'>
                            <h4>Vacancies</h4>
                        </div>
                        <div className='col s8 offset-s2 filter z-depth-2' style={{marginTop:-30}}>
                            <div className='col s5' style={{marginLeft:0, marginTop:10, display:'flex', flexDirection:'row'}}>
                                <img src={search} style={{marginRight:5,width:15, height:15, marginTop:15}}/>
                                <input value='Backend' />
                            </div>
                            <div className='col s5 center' style={{marginTop:10, display:'flex', flexDirection:'row'}}>
                                <img src={icon} style={{width:15, height:15, marginTop:15}}/>
                                <select className='browser-default filter-select'>
                                    <OptionsFetch/>
                                </select>
                            </div>
                            <div className='col s2 right-align'>
                                <button onClick={onPress}>Start</button>
                            </div>
                        </div>


                        <div className='col s10 right'>
                            <VacanciesFetch/>
                        </div>

                        <div className='col s2 left'>
                            <div style={{marginTop:40, paddingLeft:30}}>
                                <h6>Refine by Salary</h6>
                                <div>
                                    <span style={{width:70}}>From <input style={{width:80}} name='from' onChange={changeHandler}/></span>
                                </div>
                                <div>
                                    <span style={{width:70}}>To   <input style={{width:80, marginLeft:20}} name='to' onChange={changeHandler}/></span>
                                </div>
                            </div>

                            <div style={{marginTop:40, paddingLeft:30}}>
                                <h6>Refine by Employment</h6>

                                <p>
                                    <label>
                                        <input type="radio" onChange={changeHandler} value='all'  name='employment'/>
                                        <span>All</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio" onChange={changeHandler} value='fulltime'  name='employment'/>
                                        <span>Full-time</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio" onChange={changeHandler} value='parttime'  name='employment'/>
                                        <span>Part-time</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio" onChange={changeHandler} value='internship'  name='employment'/>
                                        <span>Internship</span>
                                    </label>
                                </p>
                            </div>

                            <div style={{marginTop:40, paddingLeft:30}}>
                                <h6>Refine by Major</h6>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Backend</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Frontend</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Design</span>
                                    </label>
                                </p>
                            </div>

                            <div style={{marginTop:40, paddingLeft:30}}>
                                <h6>Refine by Position</h6>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>React</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Vue.js</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Python</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Java</span>
                                    </label>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
