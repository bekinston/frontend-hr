import React, {useContext} from 'react'
import {AuthContext} from "../context/AuthContext";
import {useAuth} from "../hooks/auth.hook";

export const User = () => {
    const auth = useContext(AuthContext);
    const {logout} = useAuth();

    const exit = () => {
        logout();
        window.location.reload();
    }

    return(
        <>
            <div className='row'>
                <div className='col s12 colored-back' style={{marginTop:-20}}>
                    <div className='container'>
                        <div className='card z-depth-0' style={{marginTop:50 ,borderRadius:20, minHeight:1000}}>
                            <div className='col s12'>
                                <img className='prof' src={'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'}/>
                            </div>




                            <div className='center'>
                                <button style={{position:'absolute', bottom:20, right:0}} className='button-filled' onClick={exit}>logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
