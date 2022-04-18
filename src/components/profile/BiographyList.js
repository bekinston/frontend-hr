import React, {useState} from 'react'


export const BiographyList = ({ bio }) => {
    const [text, setText] = useState('')
    if (bio == ''){
        setText('Test biography');
    }

    setText(bio);

    console.log(bio);

    return (
        <>
           <p>{text}</p>
        </>
    )
}
