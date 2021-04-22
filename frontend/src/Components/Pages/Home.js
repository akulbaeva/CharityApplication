import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <div className='become'>
                    <Link to={'/VolunteerForm'}>
                        <button className="btn become-btn text-white btn-lg" type="button">
                            BECOME A VOLUNTEER
                        </button>
                    </Link>
                    <Link to={'/NeedHelpForm'}>
                        <button className="btn help-btn text-white btn-lg" type="button">
                            NEED HELP
                        </button>
                    </Link>
                </div>
                <div className='info'>
                    <p/>
                    <h4 className="m-2 text-center text-white">
                        <br/>
                        Giving individuals the power to make impactful donations by connecting them with the items
                        charities need most.
                    </h4>
                    <p className="lead text-center text-white">
                        <br/>
                        Charities often have certain needed items that are expensive to purchase and also aren’t items
                        that are typically donated. Donors want to make impactful donations, but often don’t know what
                        items the charity needs to operate. Charity management system solves this problem from both ends
                        by creating a platform to connect donors with the items charities need most.
                    </p>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Home;
