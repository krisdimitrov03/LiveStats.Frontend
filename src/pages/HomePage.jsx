import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import Matches from '../components/Matches/Matches'
import style from './HomePage.module.css'

function HomePage() {
  return (
    <div className={style.root}>
      <SideBar />
      <Matches />
    </div>
  )
}

export default HomePage
