import { useState, useEffect } from "react";
import * as service from '../../services/competitionService';
import CompetitionsList from "../CompetitionsList/CompetitionsList";
import style from './SideBar.module.css'

export default function SideBar() {
    const [compets, setCompets] = useState([]);

    useEffect(() => {
        onComponentLoad();
    }, []);

    const onComponentLoad = async () => {
        const data = await service.getByNationality();
        setCompets(data);
    }

    return (
        <nav id={style.sidebarMenu} className={`collapse d-lg-block ${style.sidebar} collapse bg-white`}>
            <br />
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    {
                        compets.map(c => <CompetitionsList key={c.nationality.id} data={c} />)
                    }
                </div>

            </div>

        </nav>
    )
}