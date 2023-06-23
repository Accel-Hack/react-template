import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApplicationLayout } from '@/shared/component/ApplicationLayout'
import { Home } from '@/pages'
import ErrorBoundary from '@/shared/component/ErrorBoundary'

export const ApplicationRouter: React.FC = () => {
  return <>
    <ErrorBoundary>
      <BrowserRouter>
        <h1>Hello React Router</h1>
        <Routes>
          <Route path='/' element={<ApplicationLayout />}>
            <Route path='home' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </>
}
