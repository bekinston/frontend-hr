import React from "react";

export const AsCompany = () => {

    const Check = () => {
        console.log('ascompany')
    }


    return(
        <>
            <div>
                <div className = 'col s6 left'>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                </div>

                <div className = 'col s6 right'>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                </div>

                <div className='center'>
                    <button style={{marginTop:20}} className='button-filled-blue' onClick={Check}>Confirm</button>
                </div>
            </div>
        </>
    )
}
