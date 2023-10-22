import React from 'react'
import { BsBell } from 'react-icons/bs'
import style from './CompetitionMatches.module.css'

function CompetitionMatches({ data, isLive }) {
  return (
    <div>
      <thead className={`table-dark ${style.competition}`}>
        <tr>
          <th colSpan={3}>
            <img src={data.competition.imageUrl} alt="" />
            <span>{data.competition.name} ({data.competition.nationalityName})</span>
          </th>
          <th>
            <input type="checkbox" id="" checked={isLive} />
            <span> Live</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          data.matches.map(m => (
            <tr key={m.id} className={style.match}>
              <td>{m.minutes == 0 ? m.dateAndTime : m.minutes + '\''}</td>
              <td>
                <div className="team">
                  <img src={m.homeTeam.imageUrl} alt="" />
                  <span>{m.homeTeam.name}</span>
                </div>
                <div className="team">
                  <img src={m.awayTeam.imageUrl} alt="" />
                  <span>{m.awayTeam.name}</span>
                </div>
              </td>
              <td>
                <div>{m.homeTeam.goals}</div>
                <div>{m.awayTeam.goals}</div>
              </td>
              <td>
                <BsBell />
              </td>
            </tr>
          ))
        }
      </tbody>
    </div>
  )
}

export default CompetitionMatches
