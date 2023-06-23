import React from 'react'
import ReactDOM from 'react-dom/client'
import './shared/static/main.scss'

import { ApplicationRouter } from './shared/component/ApplicationRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <ApplicationRouter />
    </React.StrictMode>,
  )
