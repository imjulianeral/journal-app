import React from 'react'
import { useSelector } from 'react-redux'

import Sidebar from './Sidebar'
import Notes from '../notes/Notes'
import NothingSelected from './NothingSelected'

export default function Journal() {
  const { active } = useSelector(state => state.notes)

  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>{active ? <Notes /> : <NothingSelected />}</main>
    </div>
  )
}
