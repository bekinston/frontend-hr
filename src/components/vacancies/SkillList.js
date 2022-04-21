import React from 'react'



export const SkillList = ({ positions }) => {


    return (
        <>

            <option>Choose skill</option>
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
