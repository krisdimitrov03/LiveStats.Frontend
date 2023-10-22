import React, { useEffect, useState } from 'react'
import * as service from '../../services/matchService'
import CompetitionMatches from '../CompetitionMatches/CompetitionMatches';
import style from './Matches.module.css'

function Matches() {
    const [matches, setMatches] = useState([]);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        onComponentLoad(isLive);
    }, [isLive]);

    const onComponentLoad = async (isLive) => {
        var data;
        if (!isLive) {
            data = await service.getByCompetition();
        }
        else {
            data = await service.getLivescore();
        }

        setMatches(data);
    }

    return (
        <div className={style.root}>
            <table className="table table-borderless">
                {
                    matches.map(m => <CompetitionMatches key={m.competition.id} data={m} />)
                }
            </table>
        </div>
    )
}

export default Matches
