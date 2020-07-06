import React from 'react'
import { useDispatch } from 'react-redux'

import JournalEntries from './JournalEntries'
import { startLogout } from '../../actions/auth'

export default function Sidebar() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Jorge</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-10x"></i>
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}
