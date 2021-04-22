class NeedHelp {
    constructor() {
        this.needHelpList = []
    }

    get = () => {
        return this.needHelpList
    }

    post = (req, reqName, reqSurname, reqPhoneNumber, reqAddress, reqReason) => {
        if (!this.needHelpList.find(it => it.name === reqName && it.surname === reqSurname) && req && reqName && reqSurname && reqPhoneNumber && reqAddress && reqReason) {
            this.needHelpList.push({
                id: Math.random(), name: reqName, surname: reqSurname,
                phoneNumber: reqPhoneNumber, address: reqAddress, reason: reqReason
            })
        }
        return this.needHelpList
    }

    delete = (reqId) => {
        this.needHelpList = this.needHelpList.filter(it => it.id !== Number(reqId))
        return this.needHelpList
    }

    find = (reqId) => {
        return this.needHelpList.find(it => it.id === Number(reqId))
    }
}

const needHelp = new NeedHelp()

module.exports = needHelp