import React from 'react'


export const HotListingJobList = ({ jobs }) => {


    return (
        <div className = "row">
            <div className = "col s12">
                <div className = "card">

                    <table className="striped responsive-table">
                        <tbody>
                        { jobs.map((job, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td></td>
                                </tr>
                            )
                        }) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
