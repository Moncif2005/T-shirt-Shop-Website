import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Componnets/Home'
import Store from './Componnets/Store'
import Footer from './Componnets/Footer'

createRoot(document.getElementById('root')).render(
  <div>
    <Home />
    <Store />
    <Footer />
  </div>
)
