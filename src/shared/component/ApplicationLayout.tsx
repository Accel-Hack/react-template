import React from 'react'
import { Outlet } from 'react-router-dom'

export const ApplicationLayout: React.FC = () => {
  return (
    <>
      <div>
        <h1>ApplicationLayout</h1>
        <Outlet />
      </div>
    </>
  )
}
