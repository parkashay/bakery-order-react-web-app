import { useEffect, useState } from 'react'
import Card from './Card'
import './cards.css'



function Cards() {
  const [items, setItems] = useState([
    {
      "name": "loading...",
      "description": "loading...",
      "price": "9999",
      "review": "loading..."
    }
  ])
  const itemsUrl = 'http://localhost:3001/items'

  const fetchData = async () => {
    const response = await fetch(itemsUrl);
    const data = await response.json();
    setItems(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='cards'>
      {
        items.map(item => {
          return (
            <Card key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )
        })
      }
    </div>
  )

}

export default Cards