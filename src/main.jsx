import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from "./components/ui/provider"
import React from "react"

import App from "./App"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <browserRouter> 
     <Provider theme={"theme-dark"}>
      <App />
    </Provider>
    </browserRouter>
  </StrictMode>,
)
