import React from 'react'
import Sidebar from './Sidebar'
import Notes from '../notes/Notes'

export default function Journal() {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <Notes />
        {/* <NothingSelected /> */}
      </main>
    </div>
  )
}
