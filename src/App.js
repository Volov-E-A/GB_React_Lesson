import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/func/Form'



function App() {
    const [toggle, setToggle] = useState(true)
    const [arr, setArr] = useState([{name: 'Biba'},{name: 'Bba'},{name: 'Giga'},{name: 'Goga'}])
    return (
        <>
            <Form />
            <hr/>
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'show'}</button>
            {toggle && <FormFunc title = "Func Comp" />}
            <ul>
                {arr.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App