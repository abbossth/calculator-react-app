// eslint-disable-next-line
import { useState, useEffect } from "react"

import "./calculator.styles.css"

const Calculator = () => {
    // States
    const [preState, setPreState] = useState("")
    const [currentState, setCurrentState] = useState("")
    const [input, setInput] = useState("0")
    const [operator, setOperator] = useState(null)
    const [total, setTotal] = useState(false)

    // Functions
    const reset = () => {

    }
    const percent = () => {

    }

    const minusPlus = () => {

    }

    const operatorType = (e) => {

    }

    const inputNum = (e) => {

    }

    const equals = (e) => {

    }

    return (
        <div className="container">
            <div className='wrapper'>
                <div className='screen'>0</div>
                <div className="btn light-gray" onClick={reset}>AC</div>
                <div className="btn light-gray" onClick={percent}>%</div>
                <div className="btn light-gray" onClick={minusPlus}>+/-</div>
                <div className="btn orange" onClick={operatorType}>/</div>
                <div className="btn" onClick={inputNum}>7</div>
                <div className="btn" onClick={inputNum}>8</div>
                <div className="btn" onClick={inputNum}>9</div>
                <div className="btn orange" onClick={operatorType}>x</div>
                <div className="btn" onClick={inputNum}>4</div>
                <div className="btn" onClick={inputNum}>5</div>
                <div className="btn" onClick={inputNum}>6</div>
                <div className="btn orange" onClick={operatorType}>+</div>
                <div className="btn" onClick={inputNum}>1</div>
                <div className="btn" onClick={inputNum}>2</div>
                <div className="btn" onClick={inputNum}>3</div>
                <div className="btn orange" onClick={operatorType}>-</div>
                <div className="btn zero" onClick={inputNum}>0</div>
                <div className="btn" onClick={inputNum}>.</div>
                <div className="btn" onClick={equals}>=</div>
            </div>
        </div>
    )
}

export default Calculator