import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from '../pages/Home'
import { ListProducts } from '../pages/ListProducts'

const EcommerceRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<ListProducts/>} />

        </Routes>

    </>
  )
}

export default EcommerceRouter