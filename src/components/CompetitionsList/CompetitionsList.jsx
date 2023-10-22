import style from './CompetitionsList.module.css'

export default function CompetitionsList({ data }) {
    return (
        <div className={style.nationalityCompetitions}>
            <div className="country">
                <img src={data.nationality.imageUrl} alt="" />
                <span>{data.nationality.name}</span>
            </div>
            <div className="competitions">
                {
                    data.competitions.map(c => (
                        <div key={c.id} className="comp">
                            <img src={c.imageUrl} alt="" />
                            <span>{c.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}