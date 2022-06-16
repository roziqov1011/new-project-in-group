import './home.css'
import React, { useEffect, useState } from 'react'
import MediaCard from '../card/Card'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  return (
    <>
      <h1>Home</h1>
    <div className="list">
    {data && data.map((e,i)=> (
        <MediaCard title={e.title} id={e.id} body={e.body}/>
     ))}
    </div>
    </>
  )
}
