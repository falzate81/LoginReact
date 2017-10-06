import React, {Component} from 'react';

import {SubMenu} from '../../subMenu/SubMenu';
import {connect} from 'react-redux'

class HomeAllSubjects extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            renderList: true,
        }
    }

    render()
    {
        return (
            <div>

                <h1>You have arrive here in some momment</h1>
            </div>
        );
    }
}

HomeAllSubjects.prototypes = {
    /*student: React.PropTypes.string,
    numberAchievedGoals: React.PropTypes.number,
    numberActiveUnits: React.PropTypes.number,
    numberSubjectsPlan: React.PropTypes.number,*/
};



export default connect(null, null)(HomeAllSubjects);