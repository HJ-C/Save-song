import React from "react";

const Sing = ({sing, removeSing}) => {
    return (
        <>
            <div className='sing'>
                <div className='sing-title'>
                    {sing.title}
                    <span className='sing-year'>
                    {sing.year}
                    </span>
                </div>
                <div>
                    <button onClick={()=> removeSing(sing.id)}>삭제</button>
                </div>
            </div> 
        </>
            
    )
}

export default Sing