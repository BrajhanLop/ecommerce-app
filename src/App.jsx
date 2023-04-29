
import { BrowserRouter } from 'react-router-dom'
import EcommerceRouter from './router/EcommerceRouter'

export const App = () => {
  return (
    <BrowserRouter> 
      <EcommerceRouter/>
    </BrowserRouter>    
  )
}
