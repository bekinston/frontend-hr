import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {Loader} from '../utils/Loader'
import {PositionsList} from "./PositionsList";

export const PositionsFetch = () => {
    const [positions, setPositions] = useState([])
    const {loading, request} = useHttp()


    const fetchPositions = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz/properties/positions/', 'GET', null, {

            })
            setPositions(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchPositions()
    }, [fetchPositions])

    if (loading) {
        return <Loader/>
    }



    return (
        <>
            {!loading && <PositionsList positions={positions} />}
        </>
    )
}
