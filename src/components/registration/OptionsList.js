import React from 'react'
import M from 'materialize-css'



export const OptionsList = ({ cities }) => {
    M.FormSelect.init();


    return (
        <>

            <option>Location</option>
                { cities.map((city, index) => {
                    return (
                        <>
                            <option value={city}>{city}</option>
                        </>
                    )
                }) }

        </>
    )
}
