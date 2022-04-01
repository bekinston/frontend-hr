import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {Loader} from '../utils/Loader'
import {VacanciesList} from "./VacanciesList";

export const VacanciesFetch = () => {
    const [vacancies, setVacancies] = useState([])
    const {loading, request} = useHttp()


    const fetchVacancies = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz/vacancies/', 'GET', null, {

            })
            setVacancies(fetched)
            console.log(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchVacancies()
        console.log(vacancies)
    }, [fetchVacancies])

    if (loading) {
        return <Loader/>
    }



    return (
        <>
            {!loading && <VacanciesList vacancies={vacancies} />}
        </>
    )
}
