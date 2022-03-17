import React, {useState}  from 'react'
import PropTypes from 'prop-types';




const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value); 

    console.log(counter );


    const handleAdd = () => {setCounter(counter+1)}

    const handleLess = () => {setCounter(counter-1)}

    const handleRestart = () => {setCounter(value)}
    

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>Incrementar Estado</button>
            <button onClick={handleRestart}>Reiniciar Estado </button>
            <button onClick={handleLess}>Decrementar Estado </button>
        </>


      );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;