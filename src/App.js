import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/func/Form'



function App() {
    const [toggle, setToggle] = useState(true)
    const [arr, setArr] = useState([{name: 'Biba'},{name: 'Bba'},{name: 'Giga'},{name: 'Goga'}])
    return (
        <>
            
            <button onClick={() => setToggle(!toggle)}> toggle </button>
            <hr/>
            <h2>{toggle ? 'Func Comp' : 'Classe Components'} </h2>
            {!toggle && <Form />}
            {toggle && <FormFunc title = "Func Comp" />}
            {/* <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'show'}</button> */}
            
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App