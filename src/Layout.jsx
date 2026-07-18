import React from 'react'
import { Outlet } from 'react-router-dom'
import  FloatingDock from './components/FloatingDock'
import Background from './components/Background'
function Layout() {
  return (<>
      {/* <Background /> */}
      {<Background />}
    <div>
      
      <main>
        <Outlet />
      </main>
      <FloatingDock />
    </div>
  </>
  )
}

export default Layout