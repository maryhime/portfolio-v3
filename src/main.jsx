

import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './routes';


import { ThemeProvider } from "@material-tailwind/react";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
         {PAGES.map((item) => item.component)}
    </ThemeProvider>
  </React.StrictMode>,
)


