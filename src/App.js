import React, { useEffect, useState } from 'react'
import './App.css'
import Sing from './components/sing'
import SingForm from './components/SingForm'


function App() {

  const [sings, setSing] = useState([])

  const removeSing = (id)=> {
    setSing(sings.filter( sing =>{
      return sing.id !== id
    } ))
  }

  const renderSing = sings.length ? sings.map( (sing)=> {
    return (
      <Sing 
      sing={sing} 
      ket = {sing.id}
      removeSing={removeSing}>
      </Sing>
    )
  }) : '추가된 노래가 없습니다'

  const addSing = (sing)=> {
    setSing( [
      ...sings,
      sing 
    ])

  }

  return (
    <div className='App'>
      <h1>Sing List</h1>
    <SingForm addSing={addSing}></SingForm>
    {renderSing}
    </div>
  )

}

export default App;
