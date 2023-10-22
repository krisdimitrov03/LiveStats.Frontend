import React from 'react'
import style from './Standings.module.css'

function Standings({ standings }) {
    return (
        <div className={style.root}>
            <table className="table table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        standings.map(t => (
                            <tr key={t.id}>
                                <td>{standings.indexOf(t) + 1}</td>
                                <td>{t.name}</td>
                                <td>{t.gamesPlayed}</td>
                                <td>{t.wins}</td>
                                <td>{t.draws}</td>
                                <td>{t.losses}</td>
                                <td>{t.goalDifference}</td>
                                <td>{t.points}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Standings
