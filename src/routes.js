import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {DescriptionTest} from './pages/DescriptionTest'
import {DescriptionVacancy} from './pages/DescriptionVacancy'
import Registration from './pages/Registration'
import {Test} from './pages/Test'
import {Tests} from './pages/Tests'
import {User} from './pages/User'
import {Vacancies} from './pages/Vacancies'
import {CreateVacancy} from './pages/CreateVacancy'




export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/about" element ={<About/>}/>
                <Route path="/tests" element ={<Tests/>}/>
                <Route path="/tests/:id/" element ={<DescriptionTest/>}/>
                <Route path="/test" element ={<Test/>}/>
                <Route path="/profile" element ={<User/>}/>
                <Route path="/register" element ={<Registration/>}/>
                <Route path="/vacancies" element ={<Vacancies/>}/>
                <Route path="/create_vacancy" element ={<CreateVacancy/>}/>
                <Route path='/vacancies/:id/' element ={<DescriptionVacancy/>}/>
                <Route path="/test" element ={<Test/>}/>
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
