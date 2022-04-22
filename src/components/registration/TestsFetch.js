import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {Loader} from '../utils/Loader'
import {OptionsList} from "./OptionsList";
import {TestsList} from "./TestsList";

export const TestsFetch = () => {
    const [cities, setCities] = useState([])
    const {loading, request} = useHttp()


    const fetchCities = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz/properties/tests/', 'GET', null, {

            })
            setCities(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchCities()
    }, [fetchCities])

    if (loading) {
        return <Loader/>
    }



    return (
        <>
            {!loading && <TestsList cities={cities} />}
        </>
    )
}
