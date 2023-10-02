import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function Footer(props) {
  const navigate = useNavigate()
  const handlePayment = (e)=>{
    // e.preventDefault();
    // <PaymentForm/>
    navigate('/stripe-container')
  }
  return (
    <div className='row fixed-bottom'>
        <button className='btn btn-danger col-2' onClick={()=>{props.reset()}}>Reset</button>
        <div className='col-8 bg-dark text-white text-center'>{props.totalAmount}</div>
        <button className='btn btn-primary col-2' onClick={()=>{handlePayment()}}>Paynow</button>
    </div>
  )
}
