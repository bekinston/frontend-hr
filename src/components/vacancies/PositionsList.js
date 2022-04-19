import React from 'react'



export const PositionsList = ({ positions }) => {


    return (
        <>

            <option>Choose position</option>
                { positions.map((position, index) => {
                    return (
                        <>
                            <option value={position}>{position}</option>
                        </>
                    )
                }) }

        </>
    )
}
