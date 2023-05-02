import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { ListProducts } from '../pages/ListProducts'
import { Navbar } from '../components'

const EcommerceRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ListProducts />} />
      </Routes>
    </>
  )
}

export default EcommerceRouter
