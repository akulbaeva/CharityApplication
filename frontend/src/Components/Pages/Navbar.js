import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="d-flex flex-lg-nowrap justify-content-between blue p-1">
            <div className="p-0 m-1">
                <Link to={'/'}>
                    <button className="btn button-color text-white btn-lg" type="button">
                        <img src="https://www.pngrepo.com/download/270104/loving-charity.png"
                             alt="logo"
                             className='logo-img'/></button>
                </Link>
            </div>
            <div className="p-0 m-0 d-inline-block text-white">
                <Link to={'/'}>
                    <button className="btn blue text-white btn-sm" type="button">MAIN PAGE</button>
                </Link>
                <img src={'./static/img/page/spacer.gif'} height={55} width={1} alt={'img'}/>
                <Link to={'/Needy'}>
                    <button className="btn blue text-white btn-sm" type="button">NEEDY</button>
                </Link>
                <img src={'./static/img/page/spacer.gif'} height={1} width={20} alt={'img'}/>
                <img src={'./static/img/page/spacer.gif'} height={1} width={50} alt={'img'}/>
            </div>
        </div>
    );
};

export default Navbar;
