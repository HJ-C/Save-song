import React from "react";
import { useState } from "react";

const SingForm = ({addSing}) => {
    
  const [singTitle, setSingTitle] = useState('')
  const [singYear, setSingYear] = useState('')
    
    const resetForm = ()=>{
        setSingTitle('')
        setSingYear('')
    }

    const onSubmit = (e)=> {
      e.preventDefault()
      addSing( {
        id : Date.now(),
        title : singTitle,
        year : singYear,
      })
      resetForm()
    }
  
    return (
        <form onSubmit={onSubmit}>
          <input
          type = "text"
          value={singTitle}
          placeholder='노래제목'
          onChange={e => setSingTitle(e.target.value)}></input>
          <br></br>
          <input
          type = "text"
          value={singYear}
          placeholder='개봉년도'
          onChange={e => setSingYear(e.target.value)}></input>
          <br></br>
          <button type = "submit">노래 추가</button>
        </form>
    )
}
export default SingForm