import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes"
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {useAuth} from "./hooks/auth.hook"
import 'materialize-css'
import {Footer} from "./components/Footer";


function App() {
    const {token, login, logout, userId, ready, company} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)


    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                {<Navbar />}
                <div className="global">
                    {routes}
                </div>
                {<Footer/>}
            </Router>
        </AuthContext.Provider>
    )
}

export default App