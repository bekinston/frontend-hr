import React from 'react'



export const TestsList = ({ cities }) => {


    return (
        <>

            <option>Choose test</option>
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
