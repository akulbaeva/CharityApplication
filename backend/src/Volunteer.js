class Volunteer {
    constructor() {
        this.volunteer = []
    }

    getVolunteer = () => {
        return this.volunteer
    }

    postVolunteer = (req, reqName, reqSurname, reqPhoneNumber, reqDateOfBirth, reqReason) => {
        if (!this.volunteer.find(it => it.name === reqName && it.surname === reqSurname) && req && reqName && reqSurname && reqPhoneNumber && reqDateOfBirth && reqReason) {
            this.volunteer.push({
                id: Math.random(), name: reqName, surname: reqSurname,
                phoneNumber: reqPhoneNumber, dateOfBirth: reqDateOfBirth, reason: reqReason
            })
        }
        return this.volunteer
    }

    delete = (reqId) => {
        this.volunteer = this.volunteer.filter(it => it.id !== Number(reqId))
        return this.volunteer
    }

    find = (reqId) => {
        return this.volunteer.find(it => it.id === Number(reqId))
    }
}

const volunteer = new Volunteer()
module.exports = volunteer