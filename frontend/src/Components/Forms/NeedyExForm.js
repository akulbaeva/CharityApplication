import React, {useState} from "react";
import {Link} from "react-router-dom";

const needyUrl = 'http://localhost:3001/needy'
const NeedyExForm = ({setNeedyEx}) => {

    const [inputNeedyNameValue, setInputNeedyNameValue] = useState('')
    const [inputNeedySurnameValue, setInputNeedySurnameValue] = useState('')
    const [inputNeedyPhoneNumValue, setInputNeedyPhoneNumValue] = useState('')
    const [inputNeedyReasonValue, setInputNeedyReasonValue] = useState('')

    const addNeedEx = (e) => {
        fetch(needyUrl, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: inputNeedyNameValue, surname: inputNeedySurnameValue,
                phoneNumber: inputNeedyPhoneNumValue, reason: inputNeedyReasonValue
            })
        }).then(it => it.json())
            .then(fetched => setNeedyEx(fetched))
        setInputNeedyNameValue('')
        setInputNeedySurnameValue('')
        setInputNeedyPhoneNumValue('')
        setInputNeedyReasonValue('')
    }

    return (
        <div style={{width: '150%'}}>
            <form className='form' acceptCharset="UTF-8"
                  action="https://getform.io/f/{your-form-endpoint-goes-here}"
                  method="POST" encType="multipart/form-data" target="_blank">
                <div className="form-group">
                    <label htmlFor="exampleInputName" className="col col-form-label">Name</label>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="Enter your name"
                               required="required"
                               onChange={e => setInputNeedyNameValue(e.target.value)}
                               value={inputNeedyNameValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName" className="col col-form-label">Surname</label>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="Enter your surname"
                               required="required"
                               onChange={e => setInputNeedySurnameValue(e.target.value)}
                               value={inputNeedySurnameValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="example-tel-input" className="col col-form-label">Phone Number</label>
                    <div className="col">
                        <input className="form-control" name="tel" type="tel" placeholder='Enter your phone number'
                               id="example-tel-input"
                               onChange={e => setInputNeedyPhoneNumValue(e.target.value)}
                               value={inputNeedyPhoneNumValue}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="example-Why-input" className="col col-form-label">What do you want to
                        do?</label>
                    <div className="col">
                        <input style={{height: '100px'}} type="text" name="why" className="form-control"
                               id="exampleWhy" required="required"
                               onChange={e => setInputNeedyReasonValue(e.target.value)}
                               value={inputNeedyReasonValue}
                        />
                    </div>
                </div>
                <Link to={'/Needy'}>
                    <button className="btn btn-primary" style={{marginLeft: '150px'}}
                            onClick={addNeedEx}>Submit
                    </button>
                </Link>
                <Link to={'/Needy'}>
                    <button className="btn btn-primary"> Back</button>
                </Link>
            </form>
        </div>
    )
}

export default NeedyExForm
