import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [toDosPerPage, setToDosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      let result = await axios.get('http://jsonplaceholder.typicode.com/todos')
      // .then(result => (
      //   setTodo(result.data)
      // ))
      // .catch(error => console.log(error))
      setTodo(result.data)
    }
    fetchData()
    // await axios.get('http://jsonplaceholder.typicode.com/todos')
    // .then(result => (
    //   setTodo(result.data)
    // ))
    // .catch(error => console.log(error))

  }, [])


  const numberOfPages = Math.ceil(todo.length / toDosPerPage);
  const pages = [...Array(numberOfPages + 1).keys()].slice(1);
  console.log(pages)

  const indexOfLastTodo = currentPage + toDosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - toDosPerPage;

  const visibleTodos = todo.slice(indexOfFirstTodo, indexOfLastTodo)

  const prevPageHandler =  ()=>{
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  const nextPageHandler =  ()=>{
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1)
  }



  return (
    <>
    <select onChange={(e)=>{setToDosPerPage(e.target.value)}}>
      <option value="10">10</option>
      <option value="30">30</option>
      <option value="50">50</option>
    </select>
    <div>
      <h1>Get Todos</h1>
      {
        visibleTodos.map((Todo) => {
          return (
            <p key={Todo.id}>{Todo.title}</p>
          )
        })
      }
      <span onClick={prevPageHandler}>Prev</span>
      <p>
        {
          pages.map((page) => (
            <span 
            className={`${currentPage === page ? 'active' : ""}` }
            key={page} 
            onClick={
              ()=>setCurrentPage(page)
            }
            >
              {`${page} | `}
            </span>
          ))
        }
      </p>
      <span onClick={nextPageHandler}>Next</span>
    </div>
    </>
  )
}

export default App