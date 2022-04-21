import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {Loader} from '../utils/Loader'
import {SkillList} from "./SkillList";

export const SkillFetch = () => {
    const [positions, setPositions] = useState([])
    const {loading, request} = useHttp()


    const fetchPositions = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz/properties/skills/', 'GET', null, {

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
            {!loading && <SkillList positions={positions} />}
        </>
    )
}
