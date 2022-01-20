import React from "react";
import { useState } from "react";
import InputField from "./inputField";


const SingForm = ({addSing}) => {
    
  const [singTitle, setSingTitle] = useState('')
  const [singYear, setSingYear] = useState('')
  const [titleError, setTitleError] = useState('')
  const [yearError, setYearError] = useState('')
    
    const resetForm = ()=>{
        setSingTitle('')
        setSingYear('')
    }

    const validateForm = ()=> {
      let validated = true

      if (!singTitle){
        setTitleError('노래제목을 넣어주세요')
        validated = false
      }
      if (!singYear){
        setYearError('개봉년도를 넣어주세요')
        validated = false
      }
      return validated
    }

    const resetErrors = ()=>{
      setTitleError('')
      setYearError('')
    }

    const onSubmit = (e)=> {
      e.preventDefault()
      if(validateForm()){
        addSing( {
          id : Date.now(),
          title : singTitle,
          year : singYear,
        })
        resetErrors()
        resetForm()
      } 

    }
  
    return (
        <form onSubmit={onSubmit}>
          <InputField
            type="text"
            value={singTitle}
            placeholder='노래제목'
            onChange={e => setSingTitle(e.target.value)}
            errorMessage={titleError}
          ></InputField>

          {/* <input
          type = "text"
          value={singTitle}
          placeholder='노래제목'
          onChange={e => setSingTitle(e.target.value)}></input>
          <br></br>

          <div style={{color:'red'}}>{titleError}</div> */}

          <InputField
            type="number"
            value={singYear}
            placeholder='개봉년도'
            onChange={e => setSingYear(e.target.value)}
            errorMessage={yearError}
          ></InputField>

          {/* <input
          type = "number"
          value={singYear}
          placeholder='개봉년도'
          onChange={e => setSingYear(e.target.value)}></input>
          <br></br>

          <div style={{color:'red'}}>{yearError}</div> */}
          <button type = "submit">노래 추가</button>
        </form>
    )
}
export default SingForm