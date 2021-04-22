import {useState} from "react";
import VolunteerForm from "./Forms/VolunteerForm";

const Volunteer = () => {
    const [volunteers, setVolunteers] = useState([])

    const addVolunteer = (name, surname, phoneNumber, dateOfBirth, reason) => {
        if (!volunteers.find(it => it.name === name && it.surname === surname) && name && surname && phoneNumber && dateOfBirth && reason) {
            const newVolunteer = [...volunteers, {id: Math.random(), name, surname, phoneNumber, dateOfBirth, reason}]
            setVolunteers(newVolunteer)
            console.log(newVolunteer)
        }
    }

    return (
        <div>
            <VolunteerForm setVolunteers={setVolunteers}/>
        </div>
    )
}

export default Volunteer