import React from 'react'

const Navbar = () => {
    let options = ["Open","Close","Boost"]
  return (
    <>
    <nav>
        <div className='options-container'>
            {
                options.map((item,index)=>{
                    return(
                        <span className='bg-change'  key={index}>{item}</span>
                    )
                })
            }
        </div>
        <div className='box'>

        </div>
    </nav>
    </>
  )
}

export default Navbar