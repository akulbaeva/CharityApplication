import React, {useEffect, useState} from "react";
import NeedyTable from "./NeedyTable";

const needHelpUrl = 'http://localhost:3001/needHelp'
const Needy = () => {
    const [needys, setNeedys] = useState([])

    useEffect(() => {
        fetch(needHelpUrl)
            .then(it => it.json())
            .then(fetched => setNeedys(fetched))
    }, [])

    return (
        <div>
            {needys.map((it, index) =>
                <NeedyTable key={index}
                            index={index}
                            name={it.name}
                            surname={it.surname}
                            phoneNumber={it.phoneNumber}
                            address={it.address}
                            reason={it.reason}/>
            )}
        </div>
    )
}

export default Needy