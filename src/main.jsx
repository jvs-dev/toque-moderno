import React from 'react'
import ReactDOM from 'react-dom/client'
import LoadingWindow from './components/LoadingWindow/index'
import './styles/reset.css'
import './styles/base.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingWindow />
  </React.StrictMode>,
)
