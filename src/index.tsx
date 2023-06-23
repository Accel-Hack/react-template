import './shared/static/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApplicationRouter } from './shared/component/ApplicationRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>,
)
