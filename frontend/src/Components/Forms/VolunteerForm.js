import React, {useState} from "react";
import {Link} from "react-router-dom";

const volunteerUrl = 'http://localhost:3001/volunteer'
const VolunteerForm = ({setVolunteers}) => {
    const [inputNameValue, setInputNameValue] = useState('')
    const [inputSurnameValue, setInputSurnameValue] = useState('')
    const [inputPhoneNumValue, setInputPhoneNumValue] = useState('')
    const [inputDateOfBirthValue, setInputDateOfBirthValue] = useState('')
    const [inputReasonValue, setInputReasonValue] = useState('')

    const addVol = () => {
        fetch(volunteerUrl, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: inputNameValue, surname: inputSurnameValue,
                phoneNumber: inputPhoneNumValue, dateOfBirth: inputDateOfBirthValue, reason: inputReasonValue
            })
        }).then(it => it.json())
            .then(fetched => setVolunteers(fetched))

        setInputNameValue('')
        setInputSurnameValue('')
        setInputPhoneNumValue('')
        setInputDateOfBirthValue('')
        setInputReasonValue('')
    }

    return (
        <div>
            <h6 style={{marginLeft: '50px', marginTop: '20px', marginBottom: '20px'}}>BECOME A VOLUNTEER</h6>
            <form className='form' acceptCharset="UTF-8">
                <div className="form-group">
                    <label htmlFor="exampleInputName" className="col col-form-label">Name</label>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="Enter your name"
                               required="required"
                               onChange={e => setInputNameValue(e.target.value)}
                               value={inputNameValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName" className="col col-form-label">Surname</label>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="Enter your surname"
                               required="required"
                               onChange={e => setInputSurnameValue(e.target.value)}
                               value={inputSurnameValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="example-tel-input" className="col col-form-label">Phone Number</label>
                    <div className="col">
                        <input className="form-control" name="tel" type="tel" placeholder='Enter your phone number'
                               id="example-tel-input"
                               onChange={e => setInputPhoneNumValue(e.target.value)}
                               value={inputPhoneNumValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="example-date-input" className="col col-form-label">Date of Birth</label>
                    <div className="col">
                        <input className="form-control" name="date_of_birth" type="date"
                               id="example-date-input"
                               onChange={e => setInputDateOfBirthValue(e.target.value)}
                               value={inputDateOfBirthValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="example-Why-input" className="col col-form-label">Why do you want to
                        become volunteer?</label>
                    <div className="col">
                        <input style={{height: '100px'}} type="text" name="why" className="form-control"
                               id="exampleWhy" required="required"
                               onChange={e => setInputReasonValue(e.target.value)}
                               value={inputReasonValue}
                        />
                    </div>
                </div>
                <Link to={'/'}>
                    <button className="btn btn-primary" style={{marginLeft: '80px'}}
                            onClick={addVol}>Submit
                    </button>
                </Link>
                <Link to={'/'}>
                    <button className="btn btn-primary"> Back</button>
                </Link>
            </form>
        </div>
    )
}

export default VolunteerForm