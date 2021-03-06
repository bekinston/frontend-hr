import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {DescriptionVacancy} from './pages/DescriptionVacancy'
import Registration from './pages/Registration'
import {Test} from './pages/Test'
import {User} from './pages/User'
import {Vacancies} from './pages/Vacancies'
import {CreateVacancy} from './pages/CreateVacancy'
import {Person} from "./pages/Person";




export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/about" element ={<About/>}/>
                <Route path="/profile" element ={<User/>}/>
                <Route path='/profile/:id/' element ={<Person />}/>
                <Route path="/register" element ={<Registration/>}/>
                <Route path="/vacancies" element ={<Vacancies/>}/>
                <Route path="/create_vacancy" element ={<CreateVacancy/>}/>
                <Route path='/vacancies/:id/' element ={<DescriptionVacancy/>}/>
                <Route path='/vacancies/:id/tests/' element ={<Test/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/register" element ={<Registration/>}/>
            <Route path="/about" element ={<About/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}
