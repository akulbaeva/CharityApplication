import React from "react";
import {Link} from "react-router-dom";

const NeedyTable = (props) => {
    return (
        <div>
            <br/>
            <table style={{width: "100%"}}>
                <thead>
                <tr>
                    <th>FULL NAME</th>
                    <th>INFORMATION</th>
                    <th style={{color: 'white'}}>BUTTON</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.name} {props.surname}</td>
                    <td>
                        <div><b>Phone Number:</b> {props.phoneNumber},</div>
                        <div><b>Address:</b> {props.address},</div>
                        <div><b>What they need: </b> {props.reason}</div>
                    </td>
                    <td>
                        <Link to={'/NeedyExForm'}>
                            <button className='help-btn-needy'>HELP</button>
                        </Link>
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    )
}

export default NeedyTable