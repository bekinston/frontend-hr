import React, {useEffect} from 'react';
import SearchIcon from '../assets/filter/search.png';
import {TestsFetch} from "../components/tests/TestsFetch";

export const Tests = () => {
    return(
        <>
            <div>
                <div  className = 'page-head'>
                    <h3>Tests</h3>
                </div>

                <div className = 'filter'>

                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <div className='filter-item-test' style={{display:'flex', alignItems:'center', width:'100%'}}>
                            <div style={{placeContent:'flex-start', width:'100%', display:'flex', alignItems:'center'}}>
                                <img src={SearchIcon} style={{width:20, height:20}}/>
                                <div className='filter-input'>
                                    <input placeholder='example: english for business'/>
                                </div>
                            </div>

                        </div>
                        <div style={{placeContent:'flex-end'}}>
                            <button className='button-search'>Search</button>
                        </div>
                    </div>
                </div>

                <div className = 'page-content' style={{minHeight:600}}>
                    <TestsFetch />
                </div>
            </div>

        </>
    )
}
