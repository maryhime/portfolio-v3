

import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './routes';


import { ThemeProvider } from "@material-tailwind/react";
import './index.css'

import HomePage from './pages/HomePage';
import { customTheme } from './services/provider/customTheme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
         {/* {PAGES.map((item) => item.component)} */}
         <HomePage/>
    </ThemeProvider>
  </React.StrictMode>,
)


