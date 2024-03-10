import React from 'react'
import { lazy, Suspense } from 'react'
import Counter from './components/counter'
import Layout from './components/layout'
import "./App.css"

const Users = lazy( () => import ('./components/user'));

const App = () => {
  return (
    <div className='App-header'>

      <Layout>

        <Counter></Counter>

        <Suspense fallback={<div> Loading...</div>}>
          <Users></Users>
        </Suspense>
       
      </Layout> 
     
    </div>
  )
}

export default App