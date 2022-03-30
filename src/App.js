import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes"
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {useAuth} from "./hooks/auth.hook"
import 'materialize-css'
import {Footer} from "./components/Footer";
import {Loader} from "./components/utils/Loader";
import {Anavbar} from "./components/Anavbar";


function App() {
    const {token, login, logout, ready} = useAuth()

    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    console.log(token)


    if (!ready){
        return <Loader/>
    }


    return (
        <AuthContext.Provider value={{
            token, login, logout, isAuthenticated
        }}>
            <Router>
                {!isAuthenticated && <Navbar/>}
                {isAuthenticated && <Anavbar/>}
                <div className="global">
                    {routes}
                </div>
                {<Footer/>}
            </Router>
        </AuthContext.Provider>
    )
}

export default App
