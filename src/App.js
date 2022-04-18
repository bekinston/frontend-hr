import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes"
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {useAuth} from "./hooks/auth.hook"
import {Footer} from "./components/Footer";
import {Loader} from "./components/utils/Loader";
import {Anavbar} from "./components/Anavbar";
import './index.css'


function App() {
    const {token, login, logout, ready} = useAuth()

    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    console.log(token)


    if (!ready){
        return <Loader/>
    }


    return (
        <div className='global'>
            <AuthContext.Provider value={{token, login, logout, isAuthenticated}}>
                <Router>
                    {isAuthenticated === true ?  (<Anavbar/>) : (<Navbar/>)}
                    <div className='global'>
                        {routes}
                    </div>
                    <Footer/>
                </Router>
            </AuthContext.Provider>
        </div>

    )
}

export default App
