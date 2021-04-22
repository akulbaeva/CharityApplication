import React, {useState} from "react";
import {Link} from "react-router-dom";

const needHelpUrl = 'http://localhost:3001/needHelp'
const NeedHelpForm = ({setNeedys}) => {
    const [inputHelpNameValue, setInputHelpNameValue] = useState('')
    const [inputHelpSurnameValue, setInputHelpSurnameValue] = useState('')
    const [inputHelpPhoneNumValue, setInputHelpPhoneNumValue] = useState('')
    const [inputHelpReasonValue, setInputHelpReasonValue] = useState('')
    const [inputHelpAddressValue, setInputHelpAddressValue] = useState('')

    const addNeedHelp = () => {
        fetch(needHelpUrl, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: inputHelpNameValue, surname: inputHelpSurnameValue,
                phoneNumber: inputHelpPhoneNumValue, address: inputHelpAddressValue, reason: inputHelpReasonValue
            })
        }).then(it => it.json())
            .then(fetched => setNeedys(fetched))
        setInputHelpNameValue('')
        setInputHelpSurnameValue('')
        setInputHelpPhoneNumValue('')
        setInputHelpAddressValue('')
        setInputHelpReasonValue('')
    }


    return (
        <div style={{width: '180%', marginLeft: '-40px'}}>
            <br/>
            <h6 style={{marginLeft: '100px', marginTop: '20px', marginBottom: '20px'}}>NEED HELP</h6>
            <form className='form' acceptCharset="UTF-8">
                <div className="form-group">
                    <label htmlFor="exampleInputName" className="col col-form-label">Name</label>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="Enter your name"
                               required="required"
                               onChange={e => setInputHelpNameValue(e.target.value)}
                               value={inputHelpNameValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName" className="col col-form-label">Surname</label>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="Enter your surname"
                               required="required"
                               onChange={e => setInputHelpSurnameValue(e.target.value)}
                               value={inputHelpSurnameValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="example-tel-input" className="col col-form-label">Phone Number</label>
                    <div className="col">
                        <input className="form-control" name="tel" type="tel" placeholder='Enter your phone number'
                               id="example-tel-input"
                               onChange={e => setInputHelpPhoneNumValue(e.target.value)}
                               value={inputHelpPhoneNumValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="example-tel-input" className="col col-form-label">Address</label>
                    <div className="col">
                        <input className="form-control" name="tel" type="tel" placeholder='Enter your address'
                               id="example-tel-input"
                               onChange={e => setInputHelpAddressValue(e.target.value)}
                               value={inputHelpAddressValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="example-Why-input" className="col col-form-label"> What do you need?</label>
                    <div className="col">
                        <input style={{height: '100px'}} type="text" name="why" className="form-control"
                               id="exampleWhy" required="required"
                               onChange={e => setInputHelpReasonValue(e.target.value)}
                               value={inputHelpReasonValue}
                        />
                    </div>
                </div>
                <Link to={'/'}>
                    <button className="btn btn-primary" style={{marginLeft: '80px'}}
                            onClick={addNeedHelp}>Submit
                    </button>
                </Link>
                <Link to={'/'}>
                    <button className="btn btn-primary"> Back</button>
                </Link>
            </form>
        </div>
    )
}

export default NeedHelpForm