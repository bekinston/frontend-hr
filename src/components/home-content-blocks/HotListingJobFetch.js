import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {Loader} from '../utils/Loader'
import {HotListingJobList} from './HotListingJobList'

export const HotListingJobFetch = () => {
    const [jobs, setJobs] = useState([])
    const {loading, request} = useHttp()


    const fetchJobs = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz/vacancies/', 'GET', null, {

            })
            setJobs(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchJobs()
    }, [fetchJobs])

    if (loading) {
        return <Loader/>
    }



    return (
        <>
            {!loading && <HotListingJobList jobs={jobs} />}
        </>
    )
}
