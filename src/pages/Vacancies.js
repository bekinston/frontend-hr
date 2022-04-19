import React, {useCallback, useEffect, useState} from 'react';
import SearchIcon from '../assets/filter/search.png';
import LocationIcon from '../assets/filter/pin.png';
import {OptionsFetch} from "../components/registration/OptionsFetch";
import {NavLink} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";
import {VacanciesList} from "../components/vacancies/VacanciesList";

export const Vacancies = () => {
    const [data, setData] = useState({
        search: '',
        salary_from:'',
        salary_to:'',
        type:'',
        city:'',
        exp_type:'',
        position:'',
    })
    const [vacancies, setVacancies] = useState([]);
    const [positions, setPositions] = useState([]);
    const {loading, request} = useHttp();

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value})
    }
    const searchHandler = async (event) => {
        const query_params = (`search=${data.search}&salary_from=${data.salary_from}&salary_to=${data.salary_to}&type=${data.type}&exp_type=${data.exp_type}&position=${data.position}&city=${data.city}`);
        console.log(query_params);
        try {
            const fetched = await request(`http://hr-backend.jcloud.kz/vacancies/?${query_params}`, 'GET', null, {
            })
            setVacancies(fetched)
            console.log(fetched);
        }
        catch (e) {

        }
    }

    const fetchVacancies = useCallback( async () => {
        try {
            const fetched = await  request('http://hr-backend.jcloud.kz/vacancies/')
            setVacancies(fetched);
        }
        catch (e) {

        }
    }, [request])

    const fetchPositions = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz/properties/positions/', 'GET', null, {
            })
            setPositions(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchPositions()
        fetchVacancies()
    }, [fetchPositions])

    return(
        <>
            <div className = 'page-head'>
                <h3>Vacancies</h3>
            </div>

            <div className = 'filter'>
                <div className='filter-item' style={{display:'flex', alignItems:'center'}}>
                    <div style={{placeContent:'flex-start', width:'100%', display:'flex', alignItems:'center'}}>
                        <img src={SearchIcon} style={{width:20, height:20}}/>
                        <div className='filter-input'>
                            <input placeholder='example: backend developer' name='search' onChange={changeHandler}/>
                        </div>
                    </div>

                </div>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{placeContent:'flex-start', width:'100%', display:'flex', alignItems:'center'}}>
                        <img src={LocationIcon} style={{width:20, height:20}}/>
                        <div className='filter-input'>
                            <select style={{border:'none'}} name='city' onChange={changeHandler}>
                                <OptionsFetch/>
                            </select>
                        </div>

                    </div>
                    <div style={{placeContent:'flex-end'}}>
                        <button className='button-search' onClick={searchHandler}>Search</button>
                    </div>
                </div>
            </div>

            <div className = 'side-filter'>
                <div>
                    <h5>Refine by Salary</h5>
                    <div>
                        <div style={{width:'100%', marginTop:5}}>
                            <p style={{fontSize:12}}>from</p>
                            <input type='number' style={{width:'80%'}} name='salary_from' onChange={changeHandler}/>
                        </div>
                        <div style={{width:'100%', marginTop:5}}>
                            <p style={{fontSize:12}}>to</p>
                            <input type='number' style={{width:'80%'}} name='salary_to' onChange={changeHandler}/>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:30}}>
                    <h5>Refine by Work Experience</h5>
                    <div style={{display:'flex', width:'100%'}}>
                        <div className='radio-group'>
                            <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="No Matter" name="exp_type" onChange={changeHandler}/>No Matter</p>
                            <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="No experience" name="exp_type" onChange={changeHandler}/>No experience</p>
                            <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="1-3 years" name="exp_type" onChange={changeHandler}/>1-3 years</p>
                            <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="3-6 years" name="exp_type" onChange={changeHandler}/>3-6 years</p>
                            <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="More than 6 years" name="exp_type" onChange={changeHandler}/>More than 6 years</p>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:30}}>
                    <h5>Refine by type of Job</h5>
                    <div style={{display:'flex', width:'100%'}}>
                        <div className='radio-group'>
                            <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Full-time" name="type" onChange={changeHandler}/>Full-time</p>
                            <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Part-time" name="type" onChange={changeHandler}/>Part-time</p>
                            <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value="Internship" name="type" onChange={changeHandler}/>Internship</p>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:30}}>
                    <h5>Refine by Position</h5>
                    <div>
                        <div className='radio-group'>
                            {!loading && <>
                                { positions.map((position, index) => {
                                        return (
                                            <>
                                                <p style={{width:'100%'}}><input style={{marginRight:5}} type="radio" value={position} name="position"  onChange={changeHandler}/>{position}</p>
                                            </>
                                        )
                                    }
                                )
                                }
                            </>}
                        </div>
                    </div>
                </div>
            </div>

            <div className = 'page-content' style={{minHeight:600}}>
                <VacanciesList vacancies={vacancies}/>

            </div>
            <div style={{display:'flex', width:'100%', justifyContent:'center', marginBottom:40}}>
                <center><NavLink to={'/create_vacancy'}><button onClick={()=>{window.scrollTo(0, 0)}} className='button-filled-yellow'>Create My Vacancy</button></NavLink></center>
            </div>
        </>
    )
}
