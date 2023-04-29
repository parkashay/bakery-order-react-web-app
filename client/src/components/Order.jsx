import React, { useState } from 'react'
import './order.css'

function Order({
  customerName,
  customerAddress,
  customerPhone,
  itemName,
  quantity,
  price,
  completed,
  date
}) {


  const completeOrderUrl = process.env.REACT_APP_COMPLETE_ORDER;
  const [status, setStatus] = useState(completed)

  const handleComplete = async () => {

    const response = await fetch(completeOrderUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerName : customerName,
        customerPhone : customerPhone,
        date : date,
        completed: !status
      })
    })
    const data = await response.json()
    if(data.success){
      setStatus(!status)
    }else{
      alert("Some error occured !")
    }
  }

  return (
    <div className='order'>
      <div><b>Date : {date.slice(0, 10)}</b></div>
      <div className="customer">
        <div>Customer Name : {customerName}</div>
        <div>Address : {customerAddress}</div>
        <div>Phone Number : {customerPhone}</div>
      </div>
      <div className="ordered">
        <div>Ordered : {itemName}</div>
        <div>Quantity : {quantity}</div>
        <div>Price : {price}</div>
      </div>

      <div className='status'>Complete : {status ?
        <span style={{
          "color": "green",
          "backgroundColor": "var(--colorAccent)",
          "padding": "5px",
          "borderRadius": "3px",
          "margin": "5px"
        }}>Yes</span>
        : <span style={{
          "color": "red",
          "backgroundColor": "var(--colorAccent)",
          "padding": "5px",
          "borderRadius": "3px",
          "margin": "5px"
        }}>No</span>}</div>
      <button className='order-complete'
        onClick={handleComplete}
      >{status ? <>Incomplete</> : <>Complete</>}</button>
    </div>


  )
}

export default Order