import { useState, useEffect } from "react";
import * as service from '../../services/competitionService';
import CompetitionsList from "../CompetitionsList/CompetitionsList";

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
        <div className="root">
            {
                compets.map(c => <CompetitionsList key={c.nationality.id} data={c} />)
            }
        </div>
    )
}