import { useState } from 'react'

import styles from './Form.module.css'



export function Form(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('GB')

    const handeleClick = () => {
        setCount(count + 1)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    console.log('props', props)

    return (
        <>
            <h1>{props.title}</h1>
            <h2 className={styles.border}> Name: {name}</h2>
            <input type="text" onChange={handleChange} />
            <p>COUNT: {count}</p>
            <button onClick={handeleClick}>Click</button>
        </>

    )
}