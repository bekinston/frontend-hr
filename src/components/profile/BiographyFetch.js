import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {Loader} from '../utils/Loader'
import {BiographyList} from './BiographyList'

export const BiographyFetch = () => {
    const [bio, setBio] = useState([])
    const {loading, request} = useHttp()


    const fetchBio = useCallback(async () => {
        try {
            const fetched = await request('', 'GET', null, {

            })
            setBio(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchBio()
    }, [fetchBio()])

    if (loading) {
        return <Loader/>
    }



    return (
        <>
            {!loading && <BiographyList bio={bio} />}
        </>
    )
}
