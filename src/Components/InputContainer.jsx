import React,{useState} from 'react'



const InputContainer = () => {
 
   const [selectedValue, setSelectedValue] = useState('');
const [amount,setAmount] = useState('')
const [checkAmt,setCheckAmt]=useState(false)
  
   const handleDropdownChange = (e) => {
     setSelectedValue(e.target.value);
   };
   const handleSubmit=(e)=>{
        e.preventDefault()
        if (selectedValue && amount>0){
            setCheckAmt(true)
        }
        else{
            alert("Value is not present or less than Zero")
        }
   }
  return (
    <>
 <main >
    <div className='div1'>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>

    <div className='dropdown'>
                <p className='bg-change'>Select Asset</p>
            <select  placeholder='Sele' value={selectedValue} onChange={handleDropdownChange}>
                
        <option value="option1">ETH</option>
        <option value="option2">BTC</option>
        <option value="option3">BNB</option>
        <option value="option3">XRP</option>
      </select>
            </div>
            <div className='amt-container'>
            <article className='amt'>
                <p className='bg-change'>Borrow Amount</p>
                <p className='max-amount bg-change'>Max held amount: 200</p>
            </article>
            <input type="text" onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Supply Amount' name=""  id="" />
            <textarea name="" id="" cols="20" rows="10"></textarea>
            <button className='action'>Execute</button>
            </div>
                </form>
    </div>
    <div className='div2'></div>
    <div className='div3'>{
        checkAmt && <h3 className='final'>{`${amount} ${selectedValue}`}</h3>
    }</div>
 </main>
    </>
  )
}

export default InputContainer