import React from "react"; 
import axios from 'axios'


function App() {
  
    const [count, setCount] = React.useState(0);

    const showCount = () => {
      axios.get('/data')
      .then(res =>{
        console.log(res.data)
        setCount(res.data)
      })
      .catch(err =>
        console.log(err))
    }

    const add = () => {
      axios.get('/add')
      .then(res =>{
        console.log(res.data)
        setCount(res.data)
      })
      .catch(err =>
        console.log(err))
    }

    const subtract = () => {
      axios.get('/minus')
      .then(res =>{
        console.log(res.data)
        setCount(res.data)
      })
      .catch(err =>
        console.log(err))
    }


  return (
    <>
    <p>{count}</p>
      <button onClick={showCount}>
      Get Data
    </button>

    <button onClick={add}>
      Add 1
    </button>
    
    <button onClick={subtract}>
      Minus 1
    </button>

    </>
    



  );
}

export default App;

