import {useState} from "react";
import NeedHelpForm from "./Forms/NeedHelpForm";
import Needy from "./Needy/Needy";

const NeedHelp = () => {
    const [needys, setNeedys] = useState([])


    return (
        <div>
            <NeedHelpForm setNeedys={setNeedys}/>
        </div>
    )
}

export default NeedHelp