import { useState, useEffect, useRef } from 'react'
import { Child } from './components/Child'
import { Button } from './ui/Button'

import styles from './Form.module.css'



export function Form(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('GB')
    const [show, setShow] = useState(true)

    const myRef = useRef()

    useEffect(() => {
        console.log(myRef);
    }, [] )

    const handeleClick = () => {
        setCount(count + 1)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handeleShow = () => {
        setShow(!show)
    }

    

    return (
        <>
            <h1>{props.title}</h1>
            <h2 className={styles.border}> Name: {name}</h2>
            <input type="text" onChange={handleChange} />
            <p ref={myRef}>COUNT: {count}</p>
            <button onClick={handeleShow}>Show</button>
            <Button type='button' className='btn' onClick={handeleClick}> Click count</Button>
            { show && <Child count={count}/>}
        </>

    )
}
