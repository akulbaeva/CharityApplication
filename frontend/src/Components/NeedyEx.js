import {useState} from "react";
import NeedyExForm from "./Forms/NeedyExForm";

const NeedyEx = () => {
    const [needyEx, setNeedyEx] = useState([])

    const addNeedyEx = (name, surname, phoneNumber, reason) => {
        if (!needyEx.find(it => it.name === name && it.surname === surname) && name && surname && phoneNumber && reason) {
            const newVolunteer = [...needyEx, {id: Math.random(), name, surname, phoneNumber, reason}]
            setNeedyEx(newVolunteer)
        }
    }

    return (
        <div>
            <NeedyExForm setNeedyEx={setNeedyEx}/>
        </div>
    )
}

export default NeedyEx