import React from 'react'
import TodoCounter from '../TodoCounter'
import TodoList from '../TodoList'
import TodoSearch from '../TodoSearch'

const Home = () => {
  return (
    <div>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
    </div>
  )
}

export default Home