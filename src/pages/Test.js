import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import axios from "axios";
import {useAuth} from "../hooks/auth.hook";

export const Test = () => {
    const {loading, request} = useHttp();
    const [tests, setTests] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [test, setTest] = useState([]);
    const [score, setScore] = useState(0);
    const href = window.location.pathname;
    const {token, login, logout, ready} = useAuth();
    const accessTokenObj = JSON.parse(localStorage.getItem("userData"));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization':'Token '+accessTokenObj.token
    }


    const fetch = useCallback(async () => {
        try {
            const fetched = await request('http://hr-backend.jcloud.kz'+ href, 'GET', null, {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+ accessTokenObj.token
            })
            setTests(fetched);
            console.log(fetched);
        } catch (e) {}
    }, [request])

    useEffect(() => {

        if(accessTokenObj !== null){
            fetch();
        }

    }, [fetch, ])

    const changeHandler = event => {
        setAnswers(prevState => ({
            ...prevState,
            [event.target.name.split('|')[1]]:{'test':event.target.name.split('|')[0], 'q':event.target.name.split('|')[1], 'value':event.target.value}
        }))

    }



    const testResult = () => {
        console.log(answers);
        for(let i = 0; i < tests.length; i ++){
            let score = 0
            for(let n = 1; n < Object.keys(answers).length + 1; n++){
                if(parseInt(answers[n].test) === tests[i].id){
                    score = score + parseInt(answers[n].value)
                }
            }
            const newTest = test;
            newTest.push({[tests[i].id]: {score}})
            // setTest(prevState =>({...prevState, [tests[i].id] : {score}}));
            setTest(newTest)
        }

        console.log(test);
    }



    const confirmHandler = () => {
        console.log(test);

        testResult()
        // axios.post('http://hr-backend.jcloud.kz' + href +'/', {...test} , {
        //     headers : headers
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }





    return(
        <>
            <div className='card-back'>
                <p style={{color:'transparent'}}>123</p>
                <div style={{marginTop:80, marginBottom:80}} className='card'>
                    {tests.map((test, index) => {
                        return (
                            <>
                                <h2 style={{padding:30}}>{test.title}</h2>
                                <p style={{fontSize:16,padding:30}}>{test.description}</p>
                                {
                                    test.questionselect_set.map((question, index)=>{

                                            return(
                                                <>
                                                    <div style={{width:'40%', marginRight:30, marginLeft:30}}>
                                                        <div className='question'>
                                                            <p style={{background:'white', borderRadius:20, padding:10, fontSize:14}}>{question.question}</p>
                                                        </div>

                                                        <div className='radio-group' style={{padding:20}} onChange={(value)=>{changeHandler(value)}}>
                                                            <p style={{padding:5}}><input type='radio' value='0' name={`${test.id}|${question.id}`}/>{question.variant1}</p>
                                                            <p style={{padding:5}}><input type='radio' value='0' name={`${test.id}|${question.id}`}/>{question.variant2}</p>
                                                            <p style={{padding:5}}><input type='radio' value='0' name={`${test.id}|${question.id}`}/>{question.variant3}</p>
                                                            <p style={{padding:5}}><input type='radio' value='1' name={`${test.id}|${question.id}`}/>{question.answer}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )

                                        }
                                    )
                                }
                                <div className='border-bottom'></div>
                            </>
                        )
                    })
                    }
                    <button style={{marginLeft:50, marginTop:50}} onClick={confirmHandler} className='button-filled-blue'>Confirm</button>
                </div>
                <p style={{color:'transparent'}}>123</p>
            </div>

        </>
    )
}
