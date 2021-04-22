import React from 'react';

const Footer = () => {
    return (
        <div className="blue p-4 d-flex flex-row text-white small">
            <div className="mp-0" style={{marginLeft: '90px'}}>
                <p className={"mt-2"}>We are ready to help share your needs<br/>
                    <a className={"text-white"}>
                        info@iaau.edu.kg</a></p>
            </div>
            <div className={"ml-4 pl-2 p-0"}>
                CONTACT US<br/>
                <p className={"mt-2"}>Ala-Too International University, Ankara Street 1/8, Tunguch, 720048, Bishkek,
                    Kyrgyz Republic<br/>
                    +996 (312) 63 14 25</p>
            </div>
            <div className="ml-4 pl-2 p-0">
                <p className={"mt-2"}>Check out our GitHub: <br/>
                    <a className={"text-white"} href={`https://github.com/orgs/cs-305/dashboard`}>
                        Charity Management System</a></p>
            </div>
        </div>
    )
};

export default Footer;
