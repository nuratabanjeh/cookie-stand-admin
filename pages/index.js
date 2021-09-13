import Head from 'next/head'
import React, { useState } from 'react'
export default function Home() {
  const [sorted,set_data] = useState([]);
  function Handler(event){
    event.preventDefault();
    
    const save_data={
      location:event.target.location.value,
      min_customers:event.target.min.value,
      max_customers:event.target.max.value,
      avg_cookies:event.target.avg.value,
      
    }
    set_data (sorted=> [...sorted, save_data])
    // console.log("🚀 ~ file: index.js ~ line 16 ~ Handler ~ set_data(save_data)", set_data(save_data))
    // console.log("🚀 ~ file: index.js ~ line 5 ~ Home ~ sorted", sorted)
    
  }
  console.log("🚀 ~ file: index.js ~ line 5 ~ Home ~ sorted", sorted, '*************')
  return (
    <div className="">
      <head>
        <title>Cookie Stand Admin</title>
      </head>
      <body  className="bg-green-50"> 
      <header className="flex justify-between p-6 bg-green-500">
        <p  className='text-3xl'>
      Cookie Stand Admin
      </p>
      </header>
      <main className="">
      <form className="flex-col w-2/3 p-2 mx-auto my-7 bg-green-300 rounded-md " onSubmit={Handler}>
        <h1 className='my-6 text-2xl text-center'>Create Cookie Stand</h1>
        <div className="flex " >
          <label className="mx-1" >Location</label>
          <input name="location" className="flex-auto"/>
        </div>
        <div className="flex w-3.5/4 mx-auto my-5">
          <div className="flex-col w-1/4">
            <label>Minimum Customers per hour</label>
            <input type='number' name="min" className=""/>
          </div>
          <div className="flex-col w-1/4">
            <label>Maximum Customers per hour</label>
            <input type='number' name="max" className=""/>
          </div>
          <div className="flex-col w-1/4">
            <label>Average Cookies per Sale</label>
            <input type='number' name="avg" className=""/>
          </div>
          <button className="w-1/4 bg-green-500 ">Create</button>      
        </div>   
      </form>
      <p className='my-3 text-center text-gray-600 text-1xl'>
        Report Table Coming Soon...
      </p>
          {sorted.map((i)=>
      <p className='my-3 text-center text-gray-600 text-1xl'>
        {JSON.stringify(i)}
      </p>
          )
}
      </main>
      <footer className="flex justify-between p-4 bg-green-500">
      &copy;2021
      </footer>
      </body>
    </div>
  )
}
