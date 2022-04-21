import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {Loader} from '../utils/Loader'
import {TestsList} from "./TestsList";

export const TestsFetch = () => {
    const [tests, setTest] = useState([])
    const {loading, request} = useHttp()


    const fetchTests = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz/', 'GET', null, {
            })
            setTest(fetched)
            console.log(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchTests()
        console.log(tests)
    }, [fetchTests])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <TestsList tests={tests} />}
        </>
    )
}
