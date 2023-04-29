import React, { useEffect, useState } from 'react'
import Order from '../components/Order';
import './admin.css'

function AdminPanel() {

    const complete = [false, true];

    const [orders, setOrders] = useState([{
        customerName: "loading...",
        customerAddress: "loading...",
        customerPhone: "loading...",
        order: {
            itemName: "loading...",
            quantity: "9999",
            price: "9999"
        },
        completed: true,
        date: "NaN"
    }])




    useEffect(() => {
        const routeGetOrders = process.env.REACT_APP_GET_ORDERS;

        const getOrders = async () => {
            const response = await fetch(routeGetOrders);
            const data = await response.json();
            setOrders(data)
        }
        getOrders();
    }, [orders])


    return (
        localStorage.isAdmin ?
            <>
                <div className="orders-container">
                    {complete.map(group => {
                        return (
                            <div key={group} className='order-display'>
                            <div className='order-type'>{group? "Completed:" : "Pending:"}</div>
                            {orders.filter(status => status.completed === group).map(ord => {
                                 return <Order key={Math.random()}
                                             customerName={ord.customerName}
                                             customerAddress={ord.customerAddress}
                                             customerPhone={ord.customerPhone}
                                             itemName={ord.order.itemName}
                                             quantity={ord.order.quantity}
                                             price={ord.order.price}
                                             completed={ord.completed}
                                             date={ord.date}
                                         /> 
                            })}
                            </div> 
                            
                        )
                    })}
                </div>
            </>
            : <div>Access Denied</div>
    )
}

export default AdminPanel