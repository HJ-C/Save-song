import React, {useState} from "react";
import SingForm from '../components/SingForm'
import Sing from '../components/sing'

const Songs = () =>{

    const [sings, setSing] = useState([])

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

      const removeSing = (id)=> {
        setSing(sings.filter( sing =>{
          return sing.id !== id
        } ))
      }

    return (
        <>
            <h1>Sing List</h1>
            <SingForm addSing={addSing}></SingForm>
            {renderSing}
        </>
    )
}

export default Songs