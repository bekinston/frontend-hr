import React from 'react'



export const OptionsList = ({ cities }) => {


    return (
        <>

            <option>Choose location</option>
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
