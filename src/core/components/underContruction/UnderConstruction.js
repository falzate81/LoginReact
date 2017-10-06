/**
 * Created by lenovo on 12/07/2017.
 */
import React, {Component} from 'react';

const styles = {
    divStyle:{
        marginTop: 70,
        marginLeft: 300,
    },
    p:{
        color: 'black',
        bold: false,
        fontSize: 44,
        textShadow:'gray 1px 5px 6px'
    }
}

export class UnderConstruction extends Component
{
    render()
    {
        return(
            <div style={styles.divStyle}>
                <div className="col-xs-3">
                    <img src={require('../../../assets/images/logos/logo.png')} className="img-responsive logo" alt=""/>
                </div>
                <p className="col-xs-12" style={styles.p}>Disculpe las molestias ocasionadas</p>
                <img src={require('../../../assets/images/UnderConstruction.jpg')} className="img-responsive logo" alt=""/>
            </div>
        );
    }
}

