import { Link } from 'react-router-dom'
import style from './CompetitionsList.module.css'

export default function CompetitionsList({ data }) {
    return (
        <div>
            <a className={`list-group-item list-group-item-action py-2 ripple ${style.active}`}>
                <img className={style.image} src={data.nationality.imageUrl} alt="" height={30} width={30} />
                <span>{data.nationality.name}</span>
            </a>
            {
                data.competitions.map(c =>
                    <Link key={c.id} to={`/competitions/${c.id}`} className="list-group-item list-group-item-action py-2 ripple">
                        <img className={style.image} src={c.imageUrl} alt="" height={30} width={30} />
                        <span>{c.name}</span>
                    </Link>)
            }
        </div>
    )
}