class NeedyEx {
    constructor() {
        this.needy = []
    }

    getNeedy = () => {
        return this.needy
    }

    postNeedy = (req, reqName, reqSurname, reqPhoneNumber, reqReason) => {
        if (!this.needy.find(it => it.name === reqName && it.surname === reqSurname) && req && reqName && reqSurname && reqPhoneNumber && reqReason) {
            this.needy.push({
                id: Math.random(), name: reqName, surname: reqSurname,
                phoneNumber: reqPhoneNumber, reason: reqReason
            })
        }
        return this.needy
    }

    delete = (reqId) => {
        this.needy = this.needy.filter(it => it.id !== Number(reqId))
        return this.needy
    }

    find = (reqId) => {
        return this.needy.find(it => it.id === Number(reqId))
    }

}

const needy = new NeedyEx()

module.exports = needy