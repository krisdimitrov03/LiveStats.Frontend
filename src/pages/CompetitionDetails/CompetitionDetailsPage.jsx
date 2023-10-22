import React from 'react'
import style from './CompetitionDetailsPage.module.css'
import CompetitionDetails from '../../components/CompetitionDetails/CompetitionDetails'
import SideBar from '../../components/SideBar/SideBar'
import Standings from '../../components/Standings/Standings'
import * as service from '../../services/competitionService'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function CompetitionDetailsPage() {
    const [details, setDetails] = useState({ standings: [] });
    const params = useParams();

    useEffect(() => {
        onComponentLoad();
    }, []);

    const onComponentLoad = async () => {
        const competition = await service.getDetails(params.id);
        setDetails(competition);
    }

    return (
        <div className={style.root}>
            <SideBar />
            <div className={style.details}>
                <CompetitionDetails comp={details} />
                <Standings standings={details.standings} />
            </div>
        </div>
    )
}

export default CompetitionDetailsPage
