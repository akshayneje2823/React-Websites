import React, { useState } from 'react'

export default function App() {
  const [data, setData] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus ",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut ",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam ",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro ",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam ",
      "completed": false
    },])

  const deleteHandler = (id) => {
    const filterdData = data.filter(data => data.id !== id);
    setData(filterdData)
  }
  return (
    <div>
      <h1>Data</h1>
      {
        data.map((newData)=>{
          return <div key={newData.id}>
            {newData.id}.{newData.title}
            <button onClick={()=>deleteHandler(newData.id)}>delete</button>
            </div>
        })
      }
    </div>
  )
}