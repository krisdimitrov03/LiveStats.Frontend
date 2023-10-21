import { useState, useEffect } from 'react'
import * as service from '../../services/competitionService'

export default function CompetitionDetails({ id }) {
    const [comp, setComp] = useState({});

    useEffect(() => {
        onComponentLoad();
    }, []);

    const onComponentLoad = async () => {
        const competition = await service.getDetails(id);
        console.log(comp);
        setComp(competition);

    }

    return (
        <div className="root">
            <img src={comp.imageUrl} alt="" />
            <span>{comp.name}</span>
            <img src={comp.nationalityImageUrl} alt="" />
            <span>{comp.nationalityName}</span>
            <p>Season: {comp.season}</p>
        </div>
    )
}