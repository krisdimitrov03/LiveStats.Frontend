import style from './CompetitionDetails.module.css'

export default function CompetitionDetails({ comp }) {
    return (
        <div className={style.root}>
            <img className={style.logo} src={comp.imageUrl} alt="" />
            <div>
                <div>
                    <h1>{comp.name}</h1>
                </div>
                <div>
                    <img src={comp.nationalityImageUrl} alt="" />
                    <span>{comp.nationalityName}</span>
                    <p>Season: {comp.season}</p>
                </div>
            </div>
        </div>
    )
}