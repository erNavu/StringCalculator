import { useState } from 'react'
import addition from './addition'

const initialValues = {
    value: '',
    result: null,
    error: ''
}

export const Calculator = () => {
    const [value, setValue] = useState(initialValues.value)
    const [result, setResult] = useState(initialValues.result)
    const [error, setError] = useState(initialValues.error)

    const handleReset = () => {
        setError(initialValues.error)
        setValue(initialValues.value)
        setResult(initialValues.result)
    }

    const handleAddition = () => {
        try {
            const result = addition(value)
            setResult(result)
            setError('')
        } catch (e) {
            setError(e.message)
            setResult(null)
        }
    }

    return (
        <div className="container">
            <h1>String Calculator </h1>
            <textarea
                type='text'
                placeholder='Enter numbers here'
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <div className='btn-container'>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleAddition}>Calculate</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result !== null && <p>Result: {result}</p>}
        </div>
    )
}
export default Calculator


